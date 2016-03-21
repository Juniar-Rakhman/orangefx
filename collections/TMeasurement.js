TMeasurement = new Mongo.Collection('measurements');

Measurement = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    symbol: {
        type: String,
        label: "Symbol"
    }
});

TMeasurement.attachSchema(Measurement);
