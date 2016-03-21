TUserGroup = new Mongo.Collection('user_groups');

UserGroup = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    }
});

TStatus.attachSchema(UserGroup);
