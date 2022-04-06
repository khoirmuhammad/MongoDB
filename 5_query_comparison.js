//  db.<collection_name>.find({
//    <field>:{
//        <query_comparison> : value
//      }
//  })

// $eq = equals
// SQL equivalent : select * from customer where _id = 'A-003'
db.customer.find({
    _id: {
        $eq: "A-003"
    }
});

// $gt : Greater Than
// SQL equivalent : select * from product where price > 15000
db.product.find({
    price: {
        $gt: new NumberLong(15000)
    }
});

// $gte : Greater than equal
// SQL equivalent : select * from product where price >= 24000
db.product.find({
    price: {
        $gte: new NumberLong(24000)
    }
});

// $lt : Less than
// SQL equivalent : select * from product where price < 15000
db.product.find({
    price: {
        $lt: new NumberLong(15000)
    }
});

// $lte : Less than equal
// SQL equivalent : select * from product where price <= 17000
db.product.find({
    price: {
        $lte: new NumberLong(17000)
    }
});

// $in : Matches any of the values specified in an array.
// SQL equivalent : select * from product where category in ('food','electronic')

db.product.find({
    category: {
        $in: ['food','electronic']
    }
})

// $ne : Not equals
// SQL equivalent : select * from product where category is not null (in other scenario will be <> / !=)
db.product.find({
    category: {
        $ne: null
    }
})

//$nin : Not In
// SQL equivalent : select * from product where category not in ('food','electronic')
db.product.find({
    category: {
        $nin: ['food','electronic']
    }
})