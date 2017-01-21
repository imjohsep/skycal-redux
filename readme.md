[![Build Status](https://travis-ci.org/imjohsep/skycal-redux.svg?branch=master)](https://travis-ci.org/imjohsep/skycal-redux?branch=master)

#Skycal Redux

## Installation

Open up a new terminal tab and run `mongod`

**Installing Mongo**
```
brew update
brew install mongodb
sudo mkdir -p /data/db
sudo chown -R $USER /data/db
```
**Start and Stop Mongodb**
```
brew services start mongodb
brew services stop mongodb
```

**Import Data**
```
mongoimport --db skycal --collection events --type json --file ./models/seed/01-12-2017.json
```

## Usage
**Grab all of the application dependencies.**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**Open <localhost:7770> in your browser.**


**Build and start the production build**
```
npm run build:start
```
