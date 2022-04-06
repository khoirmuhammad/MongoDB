
//db.<collection_name>.find(query)

// SQL equivalent : select * from customer where _id = 'MK-001
db.customer.find({
    _id: "MK-001"
});

// SQL equivalent : select * from product where category = 'food'
db.product.find({
    category:'food'
})

// SQL equivalent : select * from product where category is null
db.product.find({
    category:null
})

// SQL equivalent : select * from order where totalDiscount = 10
db.order.find({
    totalDiscount: 10
})

// SQL equivalent : select * from customer where name like '%Khoirudin%'
db.customer.find({"name": /Khoirudin/})

// SQL equivalent : select * from customer where name like 'Muhammad%'
db.customer.find({name: /^Muhammad/})

// SQL equivalent : select * from customer where name like '%Khoirudin'
db.customer.find({name: /Khoirudin$/})