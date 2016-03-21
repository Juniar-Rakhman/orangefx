TBrand = new Mongo.Collection('brands');

Brand = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TBrand.attachSchema(Brand);