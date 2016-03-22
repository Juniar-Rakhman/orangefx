TBuilding = new Mongo.Collection('buildings');

Building = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TBuilding.attachSchema(Building);