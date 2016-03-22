TDepartment = new Mongo.Collection('departments');

Department = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TDepartment.attachSchema(Department);
