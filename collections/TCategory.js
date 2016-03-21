//TODO: replace label with constants

TCategory = new Mongo.Collection('categories');

Category = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    subCategories: {
        type: [SSubCategory]
    }
});

TCategory.attachSchema(Category);
