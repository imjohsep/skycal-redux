var _ = require('lodash')
var Event = require('./models/event')

/* Utils */

// Group events by year-month-day key
function groupEvents(events) {
  var grouping = {}

  _.map(events, function(event) {
    var key = event._id.date.year + '-' + event._id.date.month + '-' + event._id.date.day

    if (grouping[key] === undefined) {
        grouping[key] = []
    }

    grouping[key].push(event._id)
  })

  return grouping
}


/* Routes */

module.exports = function (app) {
  // Event
  app.get('/api/event/:year/:month/:day', function (req, res) {
    var start_range = new Date(req.params.year, req.params.month - 1, req.params.day)
    var end_range = new Date(req.params.year, req.params.month - 1, req.params.day)
    end_range.setDate(end_range.getDate() + 1)
    Event.find({
      occurrence_at: {
        $gte: start_range, 
        $lte: end_range
      }})
    .sort('occurrence_at')
    .exec(function (err, events) {
      if (err) res.send([])
      res.send(events)
    })
  })

  // Events
  app.get('/api/events', function (req, res) {
    Event.find({}, function (err, events) {
      if (err) res.send([])
      res.send(events)
    })
  })

  // Upcoming Events
  app.get('/api/events/upcoming', function (req, res) {
    var now = new Date()
    var end_range = new Date()
    end_range.setDate(end_range.getDate() + 7)
    Event.find({
      occurrence_at: {
        $gte: now, 
        $lte: end_range
      }})
    .sort('occurrence_at')
    .limit(4)
    .exec(function (err, events) {
      if (err) res.send([])
      res.send(events)
    })
  })

  // Grouped Events
  app.get('/api/events/grouped', function (req, res) {
    Event.aggregate({
      $group: {
        _id: {
          date: {
            year: {$year: "$occurrence_at"},
            month: {$month: "$occurrence_at"},
            day: {$dayOfMonth: "$occurrence_at"}
          },
          occurrence_at: "$occurrence_at",
          description: "$description",
          uid: "$_id"
        },
      }
    }, {
      $sort: {
        "_id.date.year": 1,
        "_id.date.month": 1,
        "_id.date.day": 1,
      }
    }).exec(function (err, events) {
      if (err) res.send({'error': err})

      var groupedEvents = {}
      _.map(events, function(event) {
        var key = event._id.date.year + '-' + event._id.date.month + '-' + event._id.date.day

        if (groupedEvents[key] === undefined) {
            groupedEvents[key] = []
        }

        groupedEvents[key].push(event._id)
      })

      res.send(groupedEvents)
    })
  })

  // Grouped Events for a single Month
  app.get('/api/events/grouped/:year/:month', function (req, res) {
    var start_date = new Date(req.params.year, req.params.month)
    var end_date = new Date(req.params.year, parseInt(req.params.month) + 1, 0)

    Event.aggregate(
      {
        $match: {
          occurrence_at: {$gte: start_date, $lte: end_date}
        }
      }, {
        $group: {
          _id: {
            date: {
              year: {$year: "$occurrence_at"},
              month: {$month: "$occurrence_at"},
              day: {$dayOfMonth: "$occurrence_at"}
            },
            occurrence_at: "$occurrence_at",
            description: "$description",
            uid: "$_id"
          },
        }
      }, {
        $sort: {
          "_id.date.year": 1,
          "_id.date.month": 1,
          "_id.date.day": 1,
        }
    }
    ).exec(function (err, events) {
      if (err) res.send({'error': err})

      var groupedEvents = {}
      _.map(events, function(event) {
        var key = event._id.date.year + '-' + event._id.date.month + '-' + event._id.date.day

        if (groupedEvents[key] === undefined) {
            groupedEvents[key] = []
        }

        groupedEvents[key].push(event._id)
      })
      
      // var count = 0
      // for (var k in groupedEvents) {
      //     var c = Object.keys(groupedEvents[k]).length
      //     count += c
      // }
      // groupedEvents['group_count'] = Object.keys(groupedEvents).length
      // groupedEvents['event_count'] = count
      res.send(groupedEvents)
    })
  })
}