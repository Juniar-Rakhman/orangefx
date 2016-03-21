TCurrency = new Mongo.Collection('currencies');

Currency = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    symbol: {
        type: String,
        label: "Symbol"
    }
});

TCurrency.attachSchema(Currency);

