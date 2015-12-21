if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("em483BmjvFfMfzp2a"))
            Roles.addUsersToRoles("em483BmjvFfMfzp2a", ['admin']);

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "moderator"}))
            Roles.createRole("moderator");

        if(!Meteor.roles.findOne({name: "operator"}))
            Roles.createRole("operator");
    });
}

if (Meteor.isClient) {
    Template.adminTemplate.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}

