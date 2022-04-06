// Database
// Either SQL and NoSQl have similar paradigm of Database. Basically in SQL, single database will be used by single application. This condition also applied in NoSQL
// The difference is, SQL has tables member, wheares NoSQL has collection.


// In order to get list of databases
// show databases

// In order to activate / use database, in other word we can use this syntax to switch DB. Basically this command also has functionality to create a database. But need to keep in mind that, we have to create a new collection so that DB can be created as well
use <database_name>

// In order to drop existing database we have
db.dropDatabase()

// In order to get database name
db.getName()

// In order to get host / server information whereby mongodb is installed
db.hostInfo()

// In order to see about mongodb version
db.version()

// In order to see statistic of mongodb utilization
db.stats()