"use strict";
$(function() {

  $(".auto1").click(function() {
    var url = $('#auto').data('url');
    localStorage.setItem("catalog_site", url);
    console.log("estoy haciendo hover");
   });

  $(".urbana1").click(function() {
    var url = $('#urbana').data('url');
    localStorage.setItem("catalog_site", url);
  });

  $(".todo_terreno1").click(function() {
    var url = $('#todo_terreno').data('url');
    localStorage.setItem("catalog_site", url);
   });

  $(".deportivas1").click(function() {
    var url = $('#deportivas').attr('data-url');
    localStorage.setItem("catalog_site", url);
  });

  $(".super1").click(function() {
    var url = $('#super').attr('data-url');
    localStorage.setItem("catalog_site", url);
   });

  $(".sport1").click(function() {
    var url = $('#sport').attr('data-url');
    localStorage.setItem("catalog_site", url);
  });

  $(".cuatri1").click(function() {
    var url = $('#cuatri').attr('data-url');
    localStorage.setItem("catalog_site", url);
   });


     var aValue = localStorage.getItem("catalog_site");
     console.log(aValue);

     if (aValue == "automaticas") {
       var motoData = [{name:"BWS Blanco Rojo", price:199.00, url:"/images/Fotos Motos/automaticas/bws_blanco_rojo/bws1.jpeg", class:"first"},
                       {name:"EF Rojo Negro", price:199.00, url:"/images/Fotos Motos/automaticas/EF/EF1.jpeg"},
                       {name:"Nmax", price:199.00, url:"/images/Fotos Motos/automaticas/nMax/NM1.jpeg"},
                       {name:"Nmax Blanco", price:199.00, url:"/images/Fotos Motos/automaticas/nMaxBlanco/NMB1.jpg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"AUTOMÁTICAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "urbanas"){
       var motoData = [{name:"YBR Roja", price:199.00, url:"/images/Fotos Motos/urbanas-trabajo/YBR/YBR1.jpg", class:"first"},
                       {name:"Libero Azul", price:199.00, url:"/images/Fotos Motos/urbanas-trabajo/Libero azul/Libero Azul.jpg"},
                       {name:"SZ-RR Negro Verde", price:199.00, url:"/images/Fotos Motos/urbanas-trabajo/SZ-RR negro-verde/SZRR NEGRA VERDE11968.jpg"},
                       {name:"FAZER FL Gris Rojo", price:199.00, url:"/images/Fotos Motos/urbanas-trabajo/FAZER FI gris-rojo/FAZER ROJA Y GRIS-010.jpg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"URBANAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "todo_terreno"){
       var motoData = [{name:"XTZ 125 Negro", price:199.00, url:"/images/Fotos Motos/todo-terreno/XTZ125 negro/galeria9.png", class:"first"},
                       {name:"XT 660R Blanco", price:199.00, url:"/images/Fotos Motos/todo-terreno/XT660R blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.jpg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"TODO TERRENO"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "deportivas"){
       var motoData = [{name:"MT 10 Azul", price:199.00, url:"/images/Fotos Motos/deportivas/MT 10 azul/sstbmt10_galeria_azul_0387470.png", class:"first"},
                       {name:"MT 09 Azul", price:199.00, url:"/images/Fotos Motos/deportivas/MT09 azul/mt09 azul3.png"},
                       {name:"MT 09 Tracer Verde", price:199.00, url:"/images/Fotos Motos/deportivas/MT 09 Tracer verde/2017_YAM_MT09TR_EU_DNMGMG_STU_002_03.jpg"},
                       {name:"MT 07 Blanco", price:199.00, url:"/images/Fotos Motos/deportivas/MT 07 blanco/2017_YAM_MT07_EU_BWP1_STU_005_03.jpg"},
                       {name:"MT 03 Gris", price:199.00, url:"/images/Fotos Motos/deportivas/MT03/9C2A0290.jpeg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"DEPORTIVAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "super"){
       var motoData = [{name:"R1 Rojo", price:199.00, url:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", class:"first"},
                       {name:"R1M Gris Azul", price:199.00, url:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_01072745.png"},
                       {name:"R3 Azul", price:199.00, url:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
                       {name:"R15 Negro Gris Verde", price:199.00, url:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"SÚPER DEPORTIVAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "sport"){
       var motoData = [{name:"XSR 900 Azul", price:199.00, url:"/images/Fotos Motos/Sport Heritage/XSR900 azul/2017_YAM_XS850_EU_NBM4_STU_005_03.jpg", class:"first"},
                       {name:"SCR 950 Rojo Gris", price:199.00, url:"/images/Fotos Motos/Sport Heritage/SCR950/sstbgaleriaroja.png"},
                       {name:"Bolt Negro", price:199.00, url:"/images/Fotos Motos/Sport Heritage/Bolt/sstbboltnegra0214703.png"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"SPORT HERITAGE"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(aValue == "cuatri"){
       var motoData = [{name:"Grizzly 350 Verde", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg", class:"first"},
                       {name:"Grizzly 700 Rojo", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg", class:"two"},
                       {name:"Raptor 90", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg", class:"two"},
                       {name:"Raptor 700", price:199.00, url:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg", class:"two"},
                       {name:"Viking Azul", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg", class:"two"},
                       {name:"Viking VI Camuflado", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg", class:"two"},
                       {name:"YFZ 450R", price:199.00, url:"/images/Fotos Motos/cuatrimotos/YFZ450R/2017_YAM_YFZ450R_EU_DPBSE_STU_007.jpg", class:"two"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"CUATRIMOTOS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     $(".add-to-cart").click(function() {
       var urlDetalle = $(this).attr('data-url');
       localStorage.setItem("data-detalle", urlDetalle);
      });
});
