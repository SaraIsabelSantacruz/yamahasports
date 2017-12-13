
$(window).on('load', function () {
    "use strict";
    var url = window.location.href;
    var options = {
        twitter: true,
        facebook : true,
        googlePlus : true
    };
    $('.socialShare').shareButtons(url, options);


    var detalleValue = localStorage.getItem("data-detalle");

    console.log(url);

    $("#carousel-negro").hide();
    $(".small-negro").hide();
    $("#carousel-azul").hide();
    $(".small-azul").hide();
    $("#carousel-rojo").hide();
    $(".small-rojo").hide();
    $("#carousel-verde").hide();
    $(".small-verde").hide();


    $(document).on("click", ".blanco", function() {
      console.log("estoy haciendo click");
      $("#carousel-blanco").show();
      $(".small-blanco").show();
      $("#carousel-negro").hide();
      $(".small-negro").hide();
      $("#carousel-azul").hide();
      $(".small-azul").hide();
      $("#carousel-rojo").hide();
      $(".small-rojo").hide();
      $("#carousel-verde").hide();
      $(".small-verde").hide();
    });

    $(document).on("click", ".negro", function() {
      $("#carousel-blanco").hide();
      $(".small-blanco").hide();
      $("#carousel-negro").show();
      $(".small-negro").show();
      $("#carousel-azul").hide();
      $(".small-azul").hide();
      $("#carousel-rojo").hide();
      $(".small-rojo").hide();
      $("#carousel-verde").hide();
      $(".small-verde").hide();
    });

    $(document).on("click", ".azul", function() {
      console.log("estoy haciendo click");
      $("#carousel-blanco").hide();
      $(".small-blanco").hide();
      $("#carousel-negro").hide();
      $(".small-negro").hide();
      $("#carousel-azul").show();
      $(".small-azul").show();
      $("#carousel-rojo").hide();
      $(".small-rojo").hide();
      $("#carousel-verde").hide();
      $(".small-verde").hide();
    });

    $(document).on("click", ".rojo", function() {
      $("#carousel-blanco").hide();
      $(".small-blanco").hide();
      $("#carousel-negro").hide();
      $(".small-negro").hide();
      $("#carousel-azul").hide();
      $(".small-azul").hide();
      $("#carousel-rojo").show();
      $(".small-rojo").show();
      $("#carousel-verde").hide();
      $(".small-verde").hide();
    });

    $(document).on("click", ".verde", function() {
      $("#carousel-blanco").hide();
      $(".small-blanco").hide();
      $("#carousel-negro").hide();
      $(".small-negro").hide();
      $("#carousel-azul").hide();
      $(".small-azul").hide();
      $("#carousel-rojo").hide();
      $(".small-rojo").hide();
      $("#carousel-verde").show();
      $(".small-verde").show();
    });

    if (url == "http://localhost:3000/detalle?BWS-FL") {

      //************MOTOS BLANCAS****************//
      var small_blanca =  [{Small_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra =  [{Small_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =  [{Small_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2195.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2197.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2205.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_FL/bws_azul/EF8A2204.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =  [{Small_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2221.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2227.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2233.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2240.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2221.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2227.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2233.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2240.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =  [{Small_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2206.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2208.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2209.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2210.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2206.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2208.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2209.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_FL/bws_rojo/EF8A2210.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{ color:"azul", NomColor:"azul"},
                   { color:"rojo", NomColor:"rojo"},
                   { color:"verde", NomColor:"verde"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?BWS-X") {

      //************MOTOS BLANCAS****************//
      var small_blanca =  [{Small_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2247.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2253.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2260.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2162.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2164.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2168.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2169.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2162.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2164.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2168.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/BWS_X/BWS_rojo/EF8A2169.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{ color:"azul", NomColor:"azul"},
                   { color:"rojo", NomColor:"rojo"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?CRYPTON-FL") {

      //************MOTOS BLANCAS****************//
      var small_blanca =  [{Small_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4583.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4579.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4591.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4587.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4583.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4579.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4591.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/Crypton_FL /blanco/EF8A4587.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4677.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4688.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4697.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4717.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4677.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4688.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4697.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/Crypton_FL /negro/EF8A4717.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4621.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4634.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4637.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4639.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4621.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4634.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4637.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4639.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4621.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4634.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4637.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4639.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4621.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4634.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4637.png"},
                 {Big_Verde:"/images/Fotos Motos/automaticas/Crypton_FL /azul/EF8A4639.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4645.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4649.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4658.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4663.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4645.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4649.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4658.png"},
                 {Big_Rojo:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4663.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{ color:"blanco", NomColor:"blanco"},
                   { color:"negro", NomColor:"negro"},
                   {color:"azul", NomColor:"azul"},
                   {color:"rojo", NomColor:"rojo"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?N-MAX") {

      //************MOTOS BLANCAS****************//
      var small_blanca =  [{Small_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1877.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1890.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1896.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1897.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1877.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1890.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1896.png"},
                 {Big_Blanco:"/images/Fotos Motos/automaticas/N_MAX/gris/9C2A1897.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1900.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1908.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1916.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1920.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1900.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1908.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1916.png"},
                 {Big_Negro:"/images/Fotos Motos/automaticas/N_MAX/negro/9C2A1920.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1926.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1931.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1938.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1939.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1926.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1931.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1938.png"},
                 {Big_Azul:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1939.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/no-foto.png"},
                 {Big_Rojo:"/images/Fotos Motos/no-foto.png"},
                 {Big_Rojo:"/images/Fotos Motos/no-foto.png"},
                 {Big_Rojo:"/images/Fotos Motos/no-foto.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{ color:"blanco", NomColor:"gris"},
                   { color:"negro", NomColor:"negro"},
                   {color:"azul", NomColor:"azul"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?YBR-125") {

      //************MOTOS BLANCAS****************//
      var small_blanca =[{Small_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26211.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26213.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26217.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26218.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26211.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26213.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26217.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/YBR-125/blanco/YBR BLANCA26218.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26177.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26185.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26193.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26200.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26177.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26185.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26193.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26200.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/no-foto.png"},
                 {Big_Azul:"/images/Fotos Motos/no-foto.png"},
                 {Big_Azul:"/images/Fotos Motos/no-foto.png"},
                 {Big_Azul:"/images/Fotos Motos/no-foto.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026234.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026247.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026268.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026283.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026234.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026247.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026268.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026283.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{color:"blanco", NomColor:"blanco"},
                   {color:"negro", NomColor:"negro"},
                   {color:"rojo", NomColor:"rojo"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if ( url == "http://localhost:3000/detalle?LIBERO") {

      //************MOTOS BLANCAS****************//
      var small_blanca =[{Small_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 2.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 3.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 4.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 2.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 3.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca 4.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/LIBERO/blanco/Libero Blanca.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 2.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 3.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 4.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 2.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 3.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra 4.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/LIBERO/negro/Libero Negra.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 2.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 3.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 4.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 2.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 3.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 4.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 2.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"},
                 {Big_Verde:"/images/Fotos Motos/no-foto.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026234.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026247.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026268.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026283.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026234.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026247.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026268.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/YBR-125/roja/YBR ROJA 36026283.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{ color:"blanco", NomColor:"blanco"},
                   { color:"negro", NomColor:"negro"},
                   {color:"azul", NomColor:"azul"},
                   {color:"rojo", NomColor:"rojo"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?SZ-RR") {

      //************MOTOS BLANCAS****************//
      var small_blanca =[{Small_Blanco:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/no-foto.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/no-foto.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/no-foto.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/no-foto.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11966.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11968.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11973.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11977.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11966.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11968.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11973.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11977.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11984.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11988.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11992.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11982.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11984.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11988.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11992.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/SZ-RR/rojo/SZRR NEGRA ROJO11982.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{color:"azul", NomColor:"azul"},
                   {color:"rojo", NomColor:"rojo"},
                   {color:"verde", NomColor:"verde"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (url == "http://localhost:3000/detalle?FAZER%202.0") {

      //************MOTOS BLANCAS****************//
      var small_blanca =[{Small_Blanco:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/blanco/FAZER BLANCA Y AZUL 360-059.png", slide:"0"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/blanco/FAZER BLANCA Y AZUL 360-065.png", slide:"1"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/blanco/FAZER BLANCA Y AZUL 360-072.png", slide:"2"},
                    {Small_Blanco:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/blanco/FAZER BLANCA Y AZUL 360-078.png", slide:"3"}];
      var smallTemplateBlanca = $("#small-blanco").html();
      var theSmallTemplateBlanca = Handlebars.compile(smallTemplateBlanca);
      $(".small-blanco").append (theSmallTemplateBlanca(small_blanca));

      var big_blanca =[{state: "active", Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png"},
                 {Big_Blanco:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png"}];
      var bigTemplateBlanca = $("#big-blanco").html();
      var theBigTemplateBlanca = Handlebars.compile(bigTemplateBlanca);
      $(".big-blanco").append (theBigTemplateBlanca(big_blanca));

      //************MOTOS NEGRA ****************//
      var small_negra = [{Small_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-021.png", slide:"0"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-023.png", slide:"1"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-029.png", slide:"2"},
                    {Small_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-033.png", slide:"3"}];
      var smallTemplateNegra = $("#small-negro").html();
      var theSmallTemplateNegra = Handlebars.compile(smallTemplateNegra);
      $(".small-negro").append (theSmallTemplateNegra(small_negra));

      var big_negra =[{state: "active", Big_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-021.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-023.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-029.png"},
                 {Big_Negro:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/negro-rojo/FAZER ROJA Y NEGRA-033.png"}];
      var bigTemplateNegra = $("#big-negro").html();
      var theBigTemplateNegra = Handlebars.compile(bigTemplateNegra);
      $(".big-negro").append (theBigTemplateNegra(big_negra));

      //************MOTOS AZUL****************//
      var small_azul =[{Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png", slide:"0"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png", slide:"1"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png", slide:"2"},
                    {Small_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png", slide:"3"}];
      var smallTemplateAzul = $("#small-azul").html();
      var theSmallTemplateAzul = Handlebars.compile(smallTemplateAzul);
      $(".small-azul").append (theSmallTemplateAzul(small_azul));

      var big_azul =[{state: "active", Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11951.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11953.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11956.png"},
                 {Big_Azul:"/images/Fotos Motos/urbanas/SZ-RR/azul/SZRR BLANCA AZUL11962.png"}];
      var bigTemplateAzul = $("#big-azul").html();
      var theBigTemplateAzul = Handlebars.compile(bigTemplateAzul);
      $(".big-azul").append (theBigTemplateAzul(big_azul));

      //************MOTOS VERDE****************//
      var small_verde =[{Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11966.png", slide:"0"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11968.png", slide:"1"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11973.png", slide:"2"},
                    {Small_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11977.png", slide:"3"}];
      var smallTemplateVerde = $("#small-verde").html();
      var theSmallTemplateVerde = Handlebars.compile(smallTemplateVerde);
      $(".small-verde").append (theSmallTemplateVerde(small_verde));

      var big_verde =[{state: "active", Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11966.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11968.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11973.png"},
                 {Big_Verde:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11977.png"}];
      var bigTemplateVerde = $("#big-verde").html();
      var theBigTemplateVerde = Handlebars.compile(bigTemplateVerde);
      $(".big-verde").append (theBigTemplateVerde(big_verde));

      //************MOTOS ROJO****************//
      var small_rojo =[{Small_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-010.png", slide:"0"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-012.png", slide:"1"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-017.png", slide:"2"},
                    {Small_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-018.png", slide:"3"}];
      var smallTemplateRojo = $("#small-rojo").html();
      var theSmallTemplateRojo = Handlebars.compile(smallTemplateRojo);
      $(".small-rojo").append (theSmallTemplateRojo(small_rojo));

      var big_rojo =[{state: "active", Big_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-010.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-012.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-017.png"},
                 {Big_Rojo:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/gris-rojo/FAZER ROJA Y GRIS-018.png"}];
      var bigTemplateRojo = $("#big-rojo").html();
      var theBigTemplateRojo = Handlebars.compile(bigTemplateRojo);
      $(".big-rojo").append (theBigTemplateRojo(big_rojo));

      //************TEXTO****************//
      var name = [{ name:detalleValue }];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var color = [{color:"blanco", NomColor:"blanco-azul"},
                   {color:"negro", NomColor:"gris-rojo"},
                   {color:"rojo", NomColor:"gris-negro"}];
      var nameTemplateColor = $("#color-template").html();
      var theNameTemplateColor = Handlebars.compile(nameTemplateColor);
      $(".addColor").append(theNameTemplateColor(color));
    }

    if (detalleValue == "XTZ 125 Negro") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria9.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria10.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria11.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria12.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria9.png"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria10.png"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria11.png"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria12.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto XTZ 125 Negro"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "XT 660R Blanco") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356251_2014_yam_xt660r_eu_pws1_stu_006.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356252_2014_yam_xt660r_eu_pws1_stu_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356253_2014_yam_xt660r_eu_pws1_stu_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.jpg"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356251_2014_yam_xt660r_eu_pws1_stu_006.jpg"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356252_2014_yam_xt660r_eu_pws1_stu_001.jpg"},
                    {urlBig:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356253_2014_yam_xt660r_eu_pws1_stu_002.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto XT 660R Blanco"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 10 Azul") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0272745.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0387470.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0272745.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0387470.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto MT 10 Azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 09 Azul") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul2.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul2.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul.png"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto MT 09 Azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 09 Tracer Verde") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto MT 09 Tracer Verde"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 07 Blanco") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_001_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_002_03.jpg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto MT 07 Blanco"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 03 Gris") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0282.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0301.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0307.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0290.jpeg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/deportivas/MT03/9C2A0282.jpeg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT03/9C2A0301.jpeg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT03/9C2A0307.jpeg"},
                    {urlBig:"/images/Fotos Motos/deportivas/MT03/9C2A0290.jpeg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto MT 03 Gris"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R1 Rojo") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto R1 Rojo"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R1M Gris Azul") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00740571.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00818189.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00959911.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_01072745.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00740571.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00818189.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00959911.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_01072745.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto R1M Gris Azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R3 Azul") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul002.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul003.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul001.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul002.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul003.png"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul001.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto R3 azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R15 Negro Gris Verde") {
      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                    {urlBig:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto R15 Negro Gris Verde"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "XSR 900 Azul") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_001_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_002_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto XSR 900 Azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "SCR 950 Rojo Gris") {
      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto SCR 950 Rojo Gris"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Bolt Negro") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                    {urlBig:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Bolt Negro"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Grizzly 350 Verde") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Grizzly 350 Verde"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Grizzly 700 Rojo") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Grizzly 700 Rojo"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Raptor 90") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Raptor 90"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Raptor 700") {
      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/1.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/2.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/3.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/raptor700/1.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/raptor700/2.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/raptor700/3.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Raptor 700"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Viking Azul") {


      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE3.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE2.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE3.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE2.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Viking Azul"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Viking VI Camuflado") {
      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (1).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (2).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (3).jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (1).jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (2).jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (3).jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto Viking VI Camuflado"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "YFZ 450R") {

      //************MOTOS AZUL ****************//
      var small = [ {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg", slide:"0"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg", slide:"1"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg", slide:"2"},
                    {Small:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", slide:"3"}];
      var smallTemplate = $("#small").html();
      var theSmallTemplate = Handlebars.compile(smallTemplate);
      $(".small").append (theSmallTemplate(small));

      var big =[ {state: "active", Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                 {Big:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
      var bigTemplate = $("#big").html();
      var theBigTemplate = Handlebars.compile(bigTemplate);
      $(".big").append (theBigTemplate(big));

      //************MOTOS NEGRA ****************//
      var smallB = [{Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png", slide:"0"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png", slide:"1"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png", slide:"2"},
                    {Small:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", slide:"3"}];
      var smallBlackTemplate = $("#smallBlack").html();
      var theSmallTemplateBlack = Handlebars.compile(smallBlackTemplate);
      $(".smallBlack").append (theSmallTemplateBlack(smallB));

      var bigB =[ {state: "active", Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                 {Big:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
      var bigBlackTemplate = $("#bigBlack").html();
      var theBigTemplateBlack= Handlebars.compile(bigBlackTemplate);
      $(".bigBlack").append (theBigTemplateBlack(bigB));

        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{state: "active", urlBig:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                    {urlBig:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        // var text = [{price:199.00, text:"Descripción de moto YFZ 450R"}];
        // var textTemplateScript = $("#text-template").html();
        // var theTextTemplate = Handlebars.compile(textTemplateScript);
        // $(".addText").append (theTextTemplate(text));
    }
});
