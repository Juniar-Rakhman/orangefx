TAccount = new Mongo.Collection('accounts');

Account = new SimpleSchema({
    number: {
        type: Number,
        label: "Account No."
    },
    description: {
        type: String,
        label: "Description"
    }
});

TAccount.attachSchema(Account);