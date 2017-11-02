$(window).on('load', function () {
    "use strict";

    var detalleValue = localStorage.getItem("data-detalle");
    console.log(detalleValue);

    if (detalleValue == "BWS Blanco Rojo") {

      //************MOTOS****************//
      var smallP = [{urlSmall:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws2.jpeg"},
                    {urlSmall:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws6.jpeg"},
                    {urlSmall:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws4.jpeg"},
                    {urlSmall:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws3.jpeg"}];
      var smallTemplateScript = $("#small-template").html();
      var theSmallTemplate = Handlebars.compile(smallTemplateScript);
      $(".addSmall").append (theSmallTemplate(smallP));

      var bigP = [{urlBig:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws2.jpeg"},
                  {urlBig:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws6.jpeg"},
                  {urlBig:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws4.jpeg"},
                  {urlBig:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws3.jpeg"}];
      var bigTemplateScript = $("#big-template").html();
      var theBigTemplate = Handlebars.compile(bigTemplateScript);
      $(".addBig").append (theBigTemplate(bigP));

      //************TEXTO****************//
      var name = [{name:detalleValue}];
      var nameTemplateScript = $("#name-template").html();
      var theNameTemplate = Handlebars.compile(nameTemplateScript);
      $(".addName").append (theNameTemplate(name));

      var text = [{price:199.00, text:"Descripción de moto BWS Blanco Rojo"}];
      var textTemplateScript = $("#text-template").html();
      var theTextTemplate = Handlebars.compile(textTemplateScript);
      $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "EF Rojo Negro") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/automaticas/EF/EF3.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/EF/EF4.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/EF/EF6.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/EF/EF5.jpeg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/automaticas/EF/EF3.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/EF/EF4.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/EF/EF6.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/EF/EF5.jpeg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto EF Rojo Negro"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Nmax") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/automaticas/nMax/NM3.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/nMax/NM5.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/nMax/NM6.jpeg"},
                      {urlSmall:"/images/Fotos Motos/automaticas/nMax/NM1.jpeg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/automaticas/nMax/NM3.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/nMax/NM5.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/nMax/NM6.jpeg"},
                    {urlBig:"/images/Fotos Motos/automaticas/nMax/NM1.jpeg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto Nmax Blanca"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "YBR Roja") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR2.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR3.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR4.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR1.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR2.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR3.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR4.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR1.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto YBR Rojo"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Libero Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 2.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 3.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 4.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 2.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 3.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul 4.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto Libero Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "SZ-RR Negro Verde") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11966.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11977.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11973.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11968.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11966.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11977.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11973.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11968.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto SZ-RR Negro Verde"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "FAZER FL Gris Rojo") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-017.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-012.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-018.jpg"},
                      {urlSmall:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-010.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-017.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-012.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-018.jpg"},
                    {urlBig:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-010.jpg"}];
        var bigTemplateScript = $("#big-template").html();
        var theBigTemplate = Handlebars.compile(bigTemplateScript);
        $(".addBig").append (theBigTemplate(bigP));

        //************TEXTO****************//
        var name = [{name:detalleValue}];
        var nameTemplateScript = $("#name-template").html();
        var theNameTemplate = Handlebars.compile(nameTemplateScript);
        $(".addName").append (theNameTemplate(name));

        var text = [{price:199.00, text:"Descripción de moto FAZER FL Girs Rojo"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "XTZ 125 Negro") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria9.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria10.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria11.png"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria12.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria9.png"},
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
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356251_2014_yam_xt660r_eu_pws1_stu_006.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356252_2014_yam_xt660r_eu_pws1_stu_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356253_2014_yam_xt660r_eu_pws1_stu_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.jpg"},
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
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0272745.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0387470.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0149946.png"},
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

        var text = [{price:199.00, text:"Descripción de moto MT 10 Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 09 Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul2.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul.png"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"},
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

        var text = [{price:199.00, text:"Descripción de moto MT 09 Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 09 Tracer Verde") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_001_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto MT 09 Tracer Verde"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "MT 07 Blanco") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"},
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
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0282.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0301.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0307.jpeg"},
                      {urlSmall:"/images/Fotos Motos/deportivas/MT03/9C2A0290.jpeg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/deportivas/MT03/9C2A0282.jpeg"},
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

        var text = [{price:199.00, text:"Descripción de moto MT 03 Gris"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R1 Rojo") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr106gallery47362.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr107gallery83434.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr105gallery48950.png"},
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

        var text = [{price:199.00, text:"Descripción de moto R1 Rojo"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R1M Gris Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00740571.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00818189.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00959911.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_01072745.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_00740571.png"},
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

        var text = [{price:199.00, text:"Descripción de moto R1M Gris Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R3 Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul002.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul003.png"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul001.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
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

        var text = [{price:199.00, text:"Descripción de moto R3 azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "R15 Negro Gris Verde") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
                      {urlSmall:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto R15 Negro Gris Verde"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "XSR 900 Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_002_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto XSR 900 Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "SCR 950 Rojo Gris") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_005_03.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/Sport Heritage/SCR950/2017_YAM_XVS950XR-A_EU_VRC1_STU_001_03.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto SCR 950 Rojo Gris"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Bolt Negro") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
                      {urlSmall:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0113397.png"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"},
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

        var text = [{price:199.00, text:"Descripción de moto Bolt Negro"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Grizzly 350 Verde") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Grizzly 350 Verde"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Grizzly 700 Rojo") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_001.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Grizzly 700 Rojo"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Raptor 90") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Raptor 90"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Raptor 700") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/1.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/2.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/raptor700/3.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Raptor 700"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Viking Azul") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE3.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE2.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Viking Azul"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "Viking VI Camuflado") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (1).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (2).jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (3).jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto Viking VI Camuflado"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }

    if (detalleValue == "YFZ 450R") {
        //************MOTOS****************//
        var smallP = [{urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_002.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_006.jpg"},
                      {urlSmall:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg"}];
        var smallTemplateScript = $("#small-template").html();
        var theSmallTemplate = Handlebars.compile(smallTemplateScript);
        $(".addSmall").append (theSmallTemplate(smallP));

        var bigP = [{urlBig:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_001.jpg"},
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

        var text = [{price:199.00, text:"Descripción de moto YFZ 450R"}];
        var textTemplateScript = $("#text-template").html();
        var theTextTemplate = Handlebars.compile(textTemplateScript);
        $(".addText").append (theTextTemplate(text));
    }
});
