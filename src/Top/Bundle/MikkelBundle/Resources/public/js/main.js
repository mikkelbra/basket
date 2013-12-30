$(function() {
    Backbone.emulateJSON = true;
    $('#s1').click(function() {
        console.log(prod1.toJSON(), col);
    });
    
    AppRouter = Backbone.Router.extend({
        
        routes: {
            'car': 'carAction',
            'hus': 'husAction',
            'indbo': 'indboAction',
            'test': 'testAction',
            'product/:id': 'productAction',
            'contact': 'contactAction',
            '*actions': 'defaultAction'
        }
    });

    var Insurance = Backbone.Model.extend({
        name: null,
        urlRoot: 'prod'
    });
    
    var Insurances = Backbone.Collection.extend({
        model: Insurance       
    });
    
    var conView = Backbone.View.extend({
        initialize: function() {
            this.name = '';
            this.content = '';
        },
                
        setName: function(n) {
            this.name = n;
            return this;
        },
            setContent: function(n) {
            this.content = n;
            return this;
        },
        renderoverskrift: function() {
            $('#insurancetype').text(this.name);
        },
         rendercontent: function() {
            $('#content').text(this.name);
            $('#test').text(this.name);
        
        }
    });
    
    var appRouter = new AppRouter();
    
     appRouter.on('route:testAction', function() {
         alert("Optimalt")
        console.log('Det virker');
        (new conView()).setName('Det virker!').renderoverskrift();
    });
    
     appRouter.on('route:indboAction', function() {
              
        (new conView()).setName('Indbo forsikring').renderoverskrift();
        (new conView()).setName('Priserne, du har beregnet, er hentet fra vores generelle prisliste. Vær opmærksom på, at der kan \n\
        være omstændigheder, hvor vi alligevel ikke kan tilbyde dig forsikringerne til disse priser. ').rendercontent();
        
    });
     appRouter.on('route:husAction', function() {
               
        (new conView()).setName('Hus forsikring').renderoverskrift();
        (new conView()).setName('Prisen på bilforsikring er beregnet ud fra, at du overfører en bilforsikring med skadefri år fra et andet selskab. \n\
        Har du flere køretøjer, kan prisen også være en anden. Prisen på bilforsikring er beregnet ud fra, at du overfører en bilforsikring med skadefri \n\
        år fra et andet selskab. Har du flere køretøjer, kan prisen også være en anden.').rendercontent();
    });
    
       appRouter.on('route:carAction', function() {
               
        (new conView()).setName('Bil forsikring').renderoverskrift();
        (new conView()).setName('Der kan desuden være bestemte betingelser, der skal være opfyldt, \n\
        for at du kan få en forsikring. Det betyder, at vi under særlige omstændigheder slet\n\
        ikke kan tilbyde dig forsikringen eller ikke kan tilbyde visse dækninger. Priserne, du har beregnet, \n\
        er hentet fra vores generelle prisliste. Vær opmærksom på, at der kan være omstændigheder, \n\
        hvor vi alligevel ikke kan tilbyde dig forsikringerne til disse priser.').rendercontent();
    });
    
       appRouter.on('route:carAction', function() {
               
        (new conView()).setRediger('Bil forsikring').renderoverskrift();
        
        (new conView()).setName('Der kan desuden være bestemte betingelser, der skal være opfyldt, \n\
        for at du kan få en forsikring. Det betyder, at vi under særlige omstændigheder slet\n\
        ikke kan tilbyde dig forsikringen eller ikke kan tilbyde visse dækninger. Priserne, du har beregnet, \n\
        er hentet fra vores generelle prisliste. Vær opmærksom på, at der kan være omstændigheder, \n\
        hvor vi alligevel ikke kan tilbyde dig forsikringerne til disse priser.').rendercontent();
    });
    
    appRouter.on('route:productAction', function(id) {
        console.log('product action, id ' + id);
        (new conView()).setName('p' + id).render();
    });

    appRouter.on('route:contactAction', function() {
        debugger;
        
        alert("perfekt");
        console.log('contact');
        (new conView()).setName('sdfdsf').render();
    });

    appRouter.on('route:defaultAction', function() {
        console.log('main');
        (new conView()).setName('main').render();
    });
    
Backbone.history.start();


    var colA = new Insurances();
    var prod1 = new Insurance({status: 'U', name: 'Indbo', price: 1, link: '#removeHouse', type: 'Ung', born: '1990'});
    var prod2 = new Insurance({status: 'U', name: 'House', price: 10, link: '#removeHouse', opfort: '1997', add: 'kollegiebakken 9'});
    var prod3 = new Insurance({status: 'U', name: 'Car', price: 100, link: '3', from: '2012', type: 'Audi'});
       
     colA.add(prod1);
     prod1.save({}, {success: handler1, error: handler2, wait: true})
     colA.add(prod2);
     prod2.save({}, {success: handler1, error: handler2, wait: true});
     colA.add(prod3);
     prod3.save({}, {success: handler1, error: handler2, wait: true});
    
    $('#insurance-list').on('click', 'a.remove', function(evt) {
        var id = $(evt.target).attr('data-id');
        // console.log('Please remove element ' + id + 'from collection');
        removeElement(colA.findWhere({id: id}));    
    });

    $('#insurance-listB').on('click', 'a.add', function(evt) {
        var id = $(evt.target).attr('data-id');
        AddProducts(colA.findWhere({id: id}));
    });

    $('#posthouse').click(function() {
        var addresse = document.getElementById("huosead").value;
        var opf = document.getElementById("housemade").value;
        prod2.set("add", addresse);
        prod2.set("opfort", opf);
        updatebarsket();
    });

    $('#dogedit').click(function() {
        var dogborn = document.getElementById("dogborn").value;
        var dogt = document.getElementById("dogtype").value;
        prod1.set("born", dogborn);
        prod1.set("type", dogt);
        updatebarsket();
    });

    $('#postcar').click(function() {
        var cara = document.getElementById("cara").value;
        var carb = document.getElementById("carb").value;
        prod3.set("from", cara);
        prod3.set("type", carb);
        updatebarsket();
    });

    $('#testButton').click(function() {
        alert("Test knappen virker");
        var input = document.getElementById("textbox").value;
        alert(input);
        prod1.set("name", input);
    });

    // Gemmer Hund 
    $('#addDog').click(function() {
        AddProducts(prod1);
        console.log(prod1);
    });

    $('#test').click(function() {
        alert("TEST");
        console.log(prod3);
    });

    $('#addCar').click(function() {
        AddProducts(prod3);
    });

    $('#addHouse').click(function() {
        AddProducts(prod2);
    });

    $('#removeCar').click(function() {
        removeElement(prod3);
        // console.log(prod3);
    });

    $('#removeDog').click(function() {
        removeElement(prod1);
    });

    $('#removeHouse').click(function() {
        removeElement(prod2);
    });

    $('#s3').click(function() {
        prod1.save();
        $("#insurance-list").append("<li>" + prod1.get('name') + " - <a href='sletAlt'> Fjern</a></li>");

    });

    $('#s4').click(function() {
        prod1.save();
        console.log(prod1);

    });
    $('#s5').click(function() {
        prod1.destroy();
        console.log(prod1);
    });

    $('#deleteAll').click(function() {
        colA.each(function(prod) {
            removeElement(prod)
        });
        colA.each(function(prod) {
            removeElement(prod)
        });
    });

      function test()
    {
        alert("Kalder test");
    }

    function updatebarsket() {
        // sendSession();
        
        $("#insurance-list").empty();
        $("#insurance-listB").empty();
        updateBasketListA();
        updatediscount();
        updatetotalprice();
        updatetotaldiscount();
        updateView();
    }
    
    function createLink(){
           window.location.href = "testsend?w1=" + hello + "&w2=" + world;
    }
       
    function sendSession(){
       colA.where({status: "A"});
       colA.where({status: "D"});
       alert("Der er: " + colA.where({status: "D"}).length); 
       prod1.get('name'); 
       //var count = 0; 
       colA.where({status: "D"}).each(function(prod) {
       
       });
           
       var hello = prod1.get('name');
       var world = prod1.get('type');
       window.location.href = "testsend?w1=" + hello + "&w2=" + world;
     }
    
    function getSession(){
    alert("henter data");   
    }

    function updateView() {
        $("#insuranceView").empty();
        colA.each(function(prod) {
            if (prod.get("status") === "A") {
            renderView(prod);
            }
        });
    }

    function updatetotaldiscount() {
        $("#Totaldiscount").empty();
        $("#Totaldiscount").append(totald());
    }
    
    function createLink(){
           window.location.href = "testsend?w1=" + hello + "&w2=" + world;
    }

    function updateBasketListA() {
          colA.each(function(prod) {
            if (prod.get("status") === "A") 
            {renderAddProductsA(prod);}
            if (prod.get("status") === "D"){
            renderAddProductsB(prod);
                }
        });
    }

    function updatetotalprice() {
        $("#Totalcost").empty();
        $("#Totalcost").append(totalp());
    }
  function updatediscount() {
        $("#Totaldiscount").empty();
        $("#Totaldiscount").append(totald());
        //alert("prisen bliver updateret");
    }
    
    function totald() {
        total = 0;
        return total;
    }

    function totalp() {
        sum = 0;

        colA.each(function(prod) {
            if (prod.get("status") === "A"){
            sum += (prod.get('price'));
            }
        });
        return sum;
    }
       
    function  removeElement(model)
    {
        if (model.get("status") === "A")
        {
            model.set("status", 'D');
            updatebarsket();
        }
        else
        {
            alert("Elementet er ikke i indkøbskurven");
        }
    }

    function AddProducts(model) {
        
        if (model.get("status") === "A") 
        {
            alert("OBS: Elementet findes allerede");
        }
        else
        {
            model.set("status", 'A');
            updatebarsket();
        }
        console.log(model);
    }

    function handler1() {
        console.log("ok, succes!");
    }

    function handler2() {
      console.log("Fail");
    }

    function renderAddProductsA(model)
    {
        console.log(model, model.id);
        $("#insurance-list").prepend("<li>" + model.get('name') + " - kr. " + model.get("price") + ' - <a href="#" class="remove" data-id="' + model.id + '">remove</a>');
    }

      function renderAddProductsB(model)
    {
        $("#insurance-listB").prepend("<li>" + model.get('name') + ' - <a href="#" class="add" data-id="' + model.id + '">add</a>' + ' status: ' + model.get("status"));
    }

      function renderView(model)
    {
        if (model === prod1) {
            $("#insuranceView").prepend("<li>" + model.get('name') + " - Pris: \t" + model.get('price') + " - Type: \t" + model.get("type") + " - Født \t" + model.get("born"));
        }
        else if (model === prod2) {
            $("#insuranceView").prepend("<li>" + model.get('name') + " - Pris: \t" + model.get('price') + " - Opført: \t" + model.get("opfort") + " - adresse: \t" + model.get("add"));
        }
        else if (model === prod3) {
            $("#insuranceView").prepend("<li>" + model.get('name') + " - Pris: \t" + model.get('price') + " - Fra: \t" + model.get("from") + " - Mærke: \t" + model.get("type"));
        }
    }
});

$(document).ready(function() {
    $("#showBarsket").click(function() {
        var data = {name: $('#showBarsket').val()};
        console.log(data);
        $.ajax({url: config.urls.showBarsket,
            data: data,
            type: 'post'}
        ).done(function(data, status) {
            alert("Data: " + data + "\n Status: " + status);
        });
    });

    $("#deleteAll8").click(function() {
        var data = {name: $('#deleteAll').val()};
        console.log(data);
        $.ajax({url: config.urls.deleteAll,
            data: data,
            type: 'post'}
        ).done(function(data, status) {
            alert("Data: " + data + "\n Status: " + status);
            // alert("du har nu slettet alt")
        });
    });

    $("#fjernIndbo").click(function() {
        var data = {name: $('#fjernIndbo').val()};
        console.log(data);
        $.ajax({url: "{{ url('sletEnkelt') }}",
            data: data,
            type: 'post'}
        ).done(function(data, status) {
            alert("Data: " + data + "\n Status: " + status);
        });
    });

    $("#knap3").click(function() {
        // var data = {name: $('#test').val()};
        var f = $(event.target).val();
        console.log(data);
        $.ajax({url: "{{ url('myaction2') }}",
            data: f,
            type: 'post'}
        ).done(function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

    $(".addinsurance").click(function(event) {

        //var f = $(event.target).val();
        var datas = {name: $(event.target).attr('data-product-id')};
        // console.log(id);
        console.log(datas);

        $.ajax({url: config.urls.addInsuranc,
            data: datas,
            dataType: 'json',
            type: 'post'}
        ).done(function(data) {
            console.log(data);

            // alert("Er tilføjet til array'et  : " + datas);
        });

        alert("du har nu tilføjet " + datas + " til indkøbskurven - virker!");
        console.log(datas);
        $("fg").prepend("<li> " + datas.valueOf() + " <left> - \t Fjern </left> </li>");
    });

    $("#sendText").click(function(event) {
        var f = $(event.target).val();
        //   alert("Value: " + $("#test").val());
    });

    $("#sendText").click(function() {
        alert("sendTekst - funktionen!");
        var data = {name: $('#test').val()};
        console.log(data);
        $.ajax({url: "{{ url('myaction') }}",
            data: data,
            type: 'post'}
        ).done(function(data, test) {
            alert("Data: " + data + "\nStatus: " + test);
        });
    });

    $("#sletalle").click(function() {
        var data = {name: $(event.target).val()};
        alert("Du vil nu slette alle- test");

        console.log(data);
        $.ajax({url: "{{ url('sletAlt') }}",
            data: data,
            type: 'post'}
        ).done(function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

});

//Funktion til knap 
function indkob(navn)
{
    alert("Den bliver kaldt");
    var test = $("#data-product-id").val();
    var data = navn;
    alert(data);

    console.log(test);
    $.ajax({url: "{{ url('myaction2') }}",
        data: "test",
        type: 'post'}
    ).done(function(data, status) {
        alert("Sidste" + test);
        alert("Data: " + data + "\nStatus: " + status + "variable: " + test);
    });
}

function sletAlt()
{
    //alert("navn");
    var data = "test";
    alert("Du vil nu slette alt");

    console.log(data);
    $.ajax({url: "{{ url('sletAlt') }}",
        data: "test",
        type: 'post'}
    ).done(function(data, status) {
        alert("Sidste");
        alert("Data: " + data + "\nStatus: " + status);
    });
}


Backbone.emulateJSON = true;
$('#s1').click(function() {
    console.log(prod1.toJSON(), colA);
});

$(function() {
    var Insurance = Backbone.Model.extend({
        name: null
    });

    var Insurances = Backbone.Collection.extend({
        model: Insurance,
        // sørger for, at den også bliver tilføjet til addElement 
        url: 'addElement'

    });

    AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function() {
            this.products = new Insurances();

        },
        events: {
            "click #add-insurance": "showPrompts",
            "click #test-insurance": "showPrompts_slet",
            "click #test-insurance2": "showPrompts_add",
            "click #deleteAll": "deleteAllInsurance",
        },
        showPrompts: function() {
            var Insurance_name = prompt("Tilføj forsikring indkøbskurven");
            //Add a new Insurance model to our Insurance collection

            this.products.create({name: Insurance_name}, {wait: true, success: $.proxy(this.renderProducts, this), error: function() {
                    alert('ffff')
                }});

        },
        deleteAllInsurance: function() {

            //var that = this;
            $("#insurance-list").empty();
            // alert('Du sletter nu alt');
            this.products.each(function(prod) {
                prod.destroy();

            });
            this.products.reset();
        },
        deleteOneInsurance: function() {

            //var that = this;
            $("#insurance-list").empty();
            this.products.each(function(prod) {
                prod.destroy();
            });

            this.products.reset();
        },
        showPrompts_slet: function() {

            alert('TEST - det virker fra main.js');

        },
        showPrompts_add: function() {

            alert('Dettte er fra test 2');

            //var f = $(event.target).val();
            var datas = {name: $(event.target).attr('data-product-id')};

            // console.log(id);
            console.log(datas);

            $.ajax({url: config.urls.addInsurance,
                data: datas,
                dataType: 'json',
                type: 'post'}
            ).done(function(data) {
                console.log(data);
            });

            //alert("du har nu tilføjet " + datas + " til indkøbskurven - virker!");
            console.log(datas);
            $("fg").prepend("<li> " + datas.valueOf() + " <left> - \t Fjern </left> </li>");

        },
        addInsurance: function(model) {
            // console.log(model, col, op);
            // The parameter passed is a reference to the model that was added
            $("#insurance-list").append("<li>" + model.get('name') + " - <a href='sletAlt'> Fjern</a></li>");
            //Use .get to receive attributes of the model

        },
        renderProducts: function() {
            var that = this;
            $("#insurance-list").empty();
            this.products.each(function(prod) {
                that.addInsurance(prod);
            });
        }
    });

    var appview = new AppView();
});