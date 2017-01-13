# SkyCal

## Installation

Open up a new terminal window and run `mongod`

### Installing Mongo

```bash
brew update
brew install mongodb
sudo mkdir -p /data/db
sudo chown -R $USER /data/db
```

### Start and Stop Mongodb**

```bash
brew services start mongodb
brew services stop mongodb
```

### Import Data

#### Import locally

```bash
mongoimport --db skycal --collection events --type json --file ./models/seed/01-12-2017.json
```

#### Import to mLab

```bash
mongoimport -d <database> -c <collection> --type json --file <filename> --host <hostname> --port <port> -u <username> -p <password>
```

These keys can be retrieved from the heroku environment variable `MONGOLAB_URI`.
Use the following to view that value usign the heroku cli.

```bash
heroku config --app skycalapp
```

## Usage

**Grab all of the application dependencies.**

```bash
npm install
```

## Start the application in dev mode with hot-module-replacement

```bash
npm start
```

**Open <localhost:7770> in your browser.**

## Build and start the production build

```bash
npm run build:start
```
