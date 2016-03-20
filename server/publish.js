Meteor.publish('TCompany', function () {
    return TCompany.find()
});
Meteor.publish('TDepartment', function () {
    return TDepartment.find()
});
Meteor.publish('TCategory', function () {
    return TCategory.find()
});
Meteor.publish('TSubCategory', function () {
    return TSubCategory.find()
});
Meteor.publish('TMeasurement', function () {
    return TMeasurement.find()
});
Meteor.publish('TItem', function () {
    return TItem.find()
});
Meteor.publish('TAsset', function () {
    return TAsset.find()
});
Meteor.publish('TBrand', function () {
    return TBrand.find()
});
Meteor.publish('TModel', function () {
    return TModel.find()
});
Meteor.publish('TCondition', function () {
    return TCondition.find()
});
Meteor.publish('TStatus', function () {
    return TStatus.find()
});
Meteor.publish('TCurrency', function () {
    return TCurrency.find()
});
Meteor.publish('TAccount', function () {
    return TAccount.find()
});
Meteor.publish('TAssetUser', function () {
    return TAssetUser.find()
});
Meteor.publish('TDepreciationGroup', function () {
    return TDepreciationGroup.find()
});
Meteor.publish('TDepreciationClass', function () {
    return TDepreciationClass.find()
});
Meteor.publish('TLocations', function () {
    return TLocations.find()
});
Meteor.publish('TBuilding', function () {
    return TBuilding.find()
});
Meteor.publish('TSite', function () {
    return TSite.find()
});
Meteor.publish('TUserGroup', function () {
    return TUserGroup.find()
});