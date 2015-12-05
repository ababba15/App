Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/add-transfer', {
    name: 'addTransfer',
    template: 'addTransfer'
});

Router.route('/add-event', {
    name: 'addEvent',
    template: 'addEvent'
});

Router.route('/order-taxi', {
    name: 'orderTaxi',
    template: 'orderTaxi'
});

Router.route('/order-event', {
    name: 'orderEvent',
    template: 'orderEvent'
});

Router.route('/order-transfer', {
    name: 'orderTransfer',
    template: 'orderTransfer'
});
