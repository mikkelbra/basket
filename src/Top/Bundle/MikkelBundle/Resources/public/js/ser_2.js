$(function() {

    AppRouter = Backbone.Router.extend({
        routes: {
            'product/:id': 'productAction',
            'contact': 'contactAction',
            'test': 'testAction',
            'type': 'typeAction',
            '*actions': 'defaultAction'
        }
    });

    var conView = Backbone.View.extend({
        initialize: function() {
            this.name = '';
            this.emne = '';
            this.test = '';
        },
        setName: function(n) {
            this.name = n;
            return this;
        },
        setemne: function(n) {
        this.emne = n;
        return this;
        },
                
        settest: function(n) {
        this.test = n;
        return this;
        },
                
        render: function() {
            $('#layout').text(this.name);
            $('#emne').text(this.emne);
            $('#test').text(this.test);
        }
    });

    var appRouter = new AppRouter();
    
    appRouter.on('route:productAction', function(id) {
        console.log('product action, id ' + id);
        (new conView()).setName('p' + id).render();
    });
    
      appRouter.on('route:testAction', function(id) {
        //console.log('product action, id ' + id);
        (new conView()).setName('noget helt andet').render();
    });

    appRouter.on('route:contactAction', function() {
        console.log('contact');
        (new conView()).setemne('Contact').render();
        (new conView()).settest('test 2').render();
    });

    appRouter.on('route:defaultAction', function() {
        console.log('main');
        (new conView()).setName('main').render();
    });
    
    Backbone.history.start();
});