/* This is where route magic happens */

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('Home');
    }
});

FlowRouter.route('/setup', {
    name: 'setup',
    action(){
        BlazeLayout.render('Main', {main: 'Setup'});
    }
});

FlowRouter.route('/asset', {
    name: 'asset',
    action(){
        BlazeLayout.render('Main', {main: 'Asset'});
    }
});

FlowRouter.route('/report', {
    name: 'report',
    action(){
        BlazeLayout.render('Main', {main: 'Report'});
    }
});

FlowRouter.route('/help', {
    name: 'help',
    action(){
        BlazeLayout.render('Main', {main: 'Help'});
    }
});