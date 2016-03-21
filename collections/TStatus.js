TStatus = new Mongo.Collection('statuses');

Status = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TStatus.attachSchema(Status);
