/**
 * Created by a9jr5626 on 3/20/16.
 */

Accounts.onLogin(()=> {
    FlowRouter.go('setup');
});

Accounts.onLogout(()=> {
    FlowRouter.go('/');
});
