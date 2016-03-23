/* This is where route magic happens */

FlowRouter.triggers.enter([(context, redirect)=> {
    if (!Meteor.userId()) {  //if user does not exist go home
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('Home');
    }
});

FlowRouter.route('/setup', {
    name: 'setup',
    action(){
        BlazeLayout.render('Main', {content: 'Setup'});
    }
});

FlowRouter.route('/asset', {
    name: 'asset',
    action(){
        BlazeLayout.render('Main', {content: 'Asset'});
    }
});

FlowRouter.route('/report', {
    name: 'report',
    action(){
        BlazeLayout.render('Main', {content: 'Report'});
    }
});

FlowRouter.route('/help', {
    name: 'help',
    action(){
        BlazeLayout.render('Main', {content: 'Help'});
    }
});