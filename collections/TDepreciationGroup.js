TDepreciationGroup = new Mongo.Collection('depreciation_groups');

DepreciationGroup = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    classes: {
        type: [SDepreciationClass]
    }
});

TDepreciationGroup.attachSchema(DepreciationGroup);