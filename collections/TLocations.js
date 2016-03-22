TLocation = new Mongo.Collection('Location');

Location = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Address"
    }
});

TLocation.attachSchema(Location);