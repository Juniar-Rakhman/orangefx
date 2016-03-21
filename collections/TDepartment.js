TDepartment = new Mongo.Collection('departments');

Department = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    symbol: {
        type: String,
        label: "Symbol"
    }
});

TDepartment.attachSchema(Department);
