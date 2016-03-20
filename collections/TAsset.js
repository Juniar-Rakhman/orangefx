TAsset = new Mongo.Collection('assets');

Asset = new SimpleSchema({
    item: {
        type: Item,
        label: "Item No: "
    },
    brand: {
        type: String,
        label: "Brand: "
    },
    model: {
        type: String,
        label: "Label: "
    },
    status: {
        type: Number,
        label: "Status: "
    },
    manufacturer: {
        type: String,
        label: "Manufacturer: "
    },
    condition: {
        type: String,
        label: "Condition: "
    },
    purchaseId: {
        type: String
    },
    warranty: {
        type: String,
        label: "Warranty"
    },
    insurance: {
        type: String
    },
    attachment: {
        type: String
    },
    borrowing: {
        type: String
    },
    repairing: {
        type: String
    },
    asset_owner: {
        type: String
    },
    account: {
        type: String
    },
    location: {
        type: String
    },
    modifiedDate: {
        type: Date,
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});