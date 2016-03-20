TCategory = new Mongo.Collection('categories');

Category = new SimpleSchema({
    name: {
        type: String
    },
    subCategories: {
        type: [TSubCategory]
    }
});

TCategory.attachSchema(Category);
