TAssetUser = new Mongo.Collection('asset_users');

AssetUser = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});