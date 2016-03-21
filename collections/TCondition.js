TCondition = new Mongo.Collection('conditions');

Condition = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TCondition.attachSchema(Condition);
