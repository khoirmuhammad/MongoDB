//#region $expr

// $expr : expression aggregation
// https://www.mongodb.com/docs/manual/reference/operator/query/expr/
// https://www.mongodb.com/docs/manual/meta/aggregation-quick-reference

// SQL equivalent : select * from product where price > 7000
db.product.find({
    $expr: {
        $gt: ["$price",7000]
    }
})

// SQL equivalent : select * from customer where lower(_id) = 'n-002'
// If value on left is match to right value then return the result ( $toLower: "$_id" } == "n-002")
db.customer.find({
    $expr: {
        $eq: [
            { $toLower: "$_id" }, 
            "n-002"
        ]
    }
});

// SQL equivalent : select * from customer where phone = '+620987653211'
// it seems we modify the where field
db.customer.find({
    $expr: {
        $eq: [
            {$concat: [ "+62", "$phone" ]},
            "+620987653211"
        ]
    }
})


//#endregion