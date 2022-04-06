// In order to create collection within active database

db.createCollection('<collection_name>')
db.createCollection('customer')
db.createCollection('product')
db.createCollection('order')

// In order to get all names of collection within active database
db.getCollectionNames()

// In order to get object collection info. The info like be <database_name>.<collection_name>
db.getCollection('<collection_name>')
db.getCollection('customer')
// db.<collection_name>
db.customer

// In order to get collection infomartion. The information is in the form of json 
db.getCollectionInfos()

