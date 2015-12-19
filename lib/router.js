Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });

    this.route('admin', {
        path: '/admin',
        template: 'accountsAdmin',
        onBeforeAction: function () {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
        }
    });
});

Router.route('/add-transfer', {
    name: 'addTransfer',
    template: 'addTransfer'
});

Router.route('/add-tour', {
    name: 'addTour',
    template: 'addTour'
});

Router.route('/add-taxi-route', {
    name: 'addTaxiRoute',
    template: 'addTaxiRoute'
});

Router.route('/add-visa', {
    name: 'addVisa',
    template: 'addVisa'
});

Router.route('/add-shopping', {
    name: 'addShopping',
    template: 'addShopping'
});

Router.route('/add-spa', {
    name: 'addSpa',
    template: 'addSpa'
});

Router.route('/add-provider', {
    name: 'addProvider',
    template: 'addProvider'
});

Router.route('/add-place', {
    name: 'addPlace',
    template: 'addPlace'
});

Router.route('/order-transfer', {
    name: 'orderTransfer',
    template: 'orderTransfer'
});

Router.route('/order-tour', {
    name: 'orderTour',
    template: 'orderTour'
});

Router.route('/order-taxi', {
    name: 'orderTaxi',
    template: 'orderTaxi'
});

Router.route('/order-visa', {
    name: 'orderVisa',
    template: 'orderVisa'
});

Router.route('/order-spa', {
    name: 'orderSpa',
    template: 'orderSpa'
});

Router.route('/order-shopping', {
    name: 'orderShopping',
    template: 'orderShopping'
});
