//#region CUSTOMER START


// Insert document customer
// Format  : db.<collection>.insertOne(document);
// SQL equivalent : insert into customer (_id, name, phone, email) values ('MK-001','Muhammad Khoirudin','0987653211','muhammad.khoirudin@email.com')
// Notes : since SQL doesn't support nested object, then we have to create other table called customer_address that will be linked by _id (customer) 


//INSERTONE
db.customer.insertOne({
    _id: "MK-001",
    name: "Muhammad Khoirudin",
    phone: "0987653211",
    email: "muhammad.khoirudin@email.com",
    address: {
        street: "Jl Jend Soedirman",
        city: "Jakarta",
        country: "Indonesia"
    }
});

// Insert documents customer (bulk insert)
// Format  : db.<collection>.insertMany(array<document>);

//INSERTMANY
db.customer.insertMany([
    {
        _id: "N-002",
        name: "Naskala",
        email: "naskala@email.com",
        address: {
            street: "Jl Jend Soedirman",
            city: "Yogyakarta",
            country: "Indonesia"
        }
    },
    {
        _id: "A-003",
        name: "Alvine",
        phone: "0987639716",
        address: "Sleman, Indonesia"
    }
]);

//#endregion

//#region PRODUCT START

//INSERTONE
db.product.insertOne({
    _id: "PRD-001",
    name: "Bimoli Oil",
    category: "food",
    price: new NumberLong(24000)
});

//INSERTONE
db.product.insertOne({
    _id: "PRD-002",
    name: "Indomie",
    category: "food",
    price: new NumberLong(3000),
    dimension : {
        height: 3,
        width: 10,
        lenght: 20
    }
});

//INSERTMANY
db.product.insertMany([
    {
        _id: "PRD-003",
        name: "Pepsodent",
        price: new NumberLong(17000)
    },
    {
        _id: "PRD-004",
        name: "Listerine",
        price: new NumberLong(10000)
    }
]);

//INSERTONE
db.product.insertOne({
    _id: "PRD-005",
    name: "Toshiba Monitor 24 Inchi",
    category: "electronic",
    price: new NumberLong(2000000),
    dimension : {
        height: 35,
        width: 10,
        lenght: 70
    },
    canReturn: true
});

//#endregion

//#region ORDER START

//INSERTONE
db.order.insertOne(
    {
        _id: new ObjectId(),
        customerId: 'MK-001',
        items: [
            {
                productId: 'PRD-001',
                qty: new NumberInt(25),
                price: new NumberLong(24000)
            },
            {
                productId: 'PRD-002',
                qty: new NumberInt(40),
                price: new NumberLong(3000)
            }
        ],
        totalDiscount: new NumberInt(5)

    }
);

//INSERTONE
db.order.insertOne(
    {
        _id: new ObjectId(),
        customerId: 'MK-001',
        items: [
            {
                productId: 'PRD-005',
                qty: new NumberInt(1),
                price: new NumberLong(2000000)
            }
        ]

    }
);

//INSERTONE
db.order.insertOne(
    {
        _id: new ObjectId(),
        customerId: 'N-002',
        items: [
            {
                productId: 'PRD-003',
                qty: new NumberInt(40),
                price: new NumberLong(17000)
            },
            {
                productId: 'PRD-004',
                qty: new NumberInt(100),
                price: new NumberLong(10000)
            }
        ],
        totalDiscount: new NumberInt(10)

    }
);


//#endregion