// either $exists or $type not exists in SQL relational Database. SQL equivalent in here just to make us easy to understand


//SQL Equivalent : select * from product where category is null
db.product.find({
    category: {
        $exists : false
    }
})

//SQL Equivalent : select * from product where category is not null
db.product.find({
    category: {
        $exists : true
    }
})

//equivalent

db.product.find({
    category: {
        $nin: [null]
    }
})


//SQL Equivalent : select * from customer where type(_id) = 'nvarchar'
db.customer.find({
    _id: {
        $type: 'string'
    }
})


