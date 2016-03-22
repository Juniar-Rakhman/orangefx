TCompany = new Mongo.Collection('company');

Company = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    phone: {
        type: Number,
        label: "Phone"
    },
    email: {
        type: String,
        label: "Email"
    },
    address: {
        type: String,
        label: "Address"
    }
});

TCompany.attachSchema(Company);

















