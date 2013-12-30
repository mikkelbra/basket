$(function() {



FriendList = Backbone.Collection.extend({
    initialize: function(){
        this.bind("add", function( model ){
            alert("hey");
            view.render( model );
        })
    }
});

FriendView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click #add-input':  'getFriend',
    },

    initialize: function() {
        this.friendslist = new FriendList;
        _.bindAll(this, 'render');
    }, 

    getFriend: function() {
        var friend_name = $('#input').val();
        this.friendslist.add( {name: friend_name} );
    },

    render: function( model ) {
        $("#friends-list").append("<li>"+ model.get("name")+"</li>");
        console.log('rendered')
    },

});

var view = new FriendView({el: 'body'});
});