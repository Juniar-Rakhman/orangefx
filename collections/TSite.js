TSite = new Mongo.Collection('sites');

Site = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TSite.attachSchema(Site);