TCompany = new Mongo.Collection('company');

Company = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TCompany.attachSchema(Company);

















