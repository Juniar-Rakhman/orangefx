TAsset = new Mongo.Collection('assets');

Asset = new SimpleSchema({
    item: {
        type: SItem,
        label: "Item No"
    },
    brand: {
        type: String,
        label: "Brand"
    },
    model: {
        type: String,
        label: "Label"
    },
    status: {
        type: Number,
        label: "Status"
    },
    manufacturer: {
        type: String,
        label: "Manufacturer"
    },
    condition: {
        type: String,
        label: "Condition"
    },
    purchaseId: {
        type: String,
        label: "Purchase Id"
    },
    warranty: {
        type: String,
        label: "Warranty"
    },
    insurance: {
        type: String,
        label: "Insurance"
    },
    attachment: {
        type: String,
        label: "Attachment"
    },
    borrowing: {
        type: String,
        label: "Borrowing"
    },
    repairing: {
        type: String,
        label: "Repairing"
    },
    asset_owner: {
        type: String,
        label: "Asset Owner"
    },
    account: {
        type: String,
        label: "Account"
    },
    location: {
        type: String,
        label: "Location"
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

TAsset.attachSchema(Asset);