TModel = new Mongo.Collection('models');

Model = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TModel.attachSchema(Model);
