
// $and
// SQL Equivalent : select * from product where category = 'food' AND price > 10000
db.product.find({
    $and: [
        {
            category: {
                $eq: 'food'
            }
        },
        {
            price: {
                $gt : new NumberLong(10000)
            }
        }
    ]
})

// $not
// SQL Equivalent : select * from product where category not in ('food','electronic')
db.product.find({
    category : {
        $not : {
            $in : ['food','electronic']
        }
    }
})

// equivalent to

// $not $in == $nin
// SQL Equivalent : select * from product where category not in ('food','electronic')
db.product.find({
    category: {
        $nin : ['food','electronic']
    }
})

// $or
// SQL Equivalent : select * from customer where _id = 'MK-001' or _id = 'N-002'
db.customer.find({
    $or: [
        {
            _id: 'MK-001'
        },
        {
            _id: 'N-002'
        }
    ]
})

// $nor
// SQL Equivalent : select * from customer where _id not in ('MK-001','N-002')
db.customer.find({
    $nor: [
        {
            _id: 'MK-001'
        },
        {
            _id: 'N-002'
        }
    ]
})
