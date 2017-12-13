"use strict";
$(function() {

  var reqs = window.location.href;
  console.log(reqs);

  // $(".cat1").click(function() {
  //   var url = $('#cat1').data('url');
  //   localStorage.setItem("catalog_site", url);
  //  });
  //
  // $(".cat2").click(function() {
  //   var url = $('#cat2').data('url');
  //   localStorage.setItem("catalog_site", url);
  // });
  //
  // $(".cat3").click(function() {
  //   var url = $('#cat3').data('url');
  //   localStorage.setItem("catalog_site", url);
  //  });
  //
  // $(".cat4").click(function() {
  //   var url = $('#cat4').attr('data-url');
  //   localStorage.setItem("catalog_site", url);
  // });
  //
  // $(".cat5").click(function() {
  //   var url = $('#cat5').attr('data-url');
  //   localStorage.setItem("catalog_site", url);
  //  });
  //
  // $(".cat6").click(function() {
  //   var url = $('#cat6').attr('data-url');
  //   localStorage.setItem("catalog_site", url);
  // });
  //
  // $(".cat7").click(function() {
  //   var url = $('#cat7').attr('data-url');
  //   localStorage.setItem("catalog_site", url);
  //  });


     // var aValue = localStorage.getItem("catalog_site");

     if (reqs == "http://localhost:3000/catal1?auto") {
       var motoData = [{name:"BWS-FL", price:199.00, url:"/images/Fotos Motos/automaticas/BWS_FL/bws_verde/EF8A2240.png", class:"first"},
                       {name:"BWS-X", price:199.00, url:"/images/Fotos Motos/automaticas/BWS_X/BWS_blanca/EF8A2266.png"},
                       {name:"CRYPTON-FL", price:199.00, url:"/images/Fotos Motos/automaticas/Crypton_FL /rojo/EF8A4645.png"},
                       {name:"N-MAX", price:199.00, url:"/images/Fotos Motos/automaticas/N_MAX/azul/9C2A1926.png"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"AUTOMÁTICAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(reqs == "http://localhost:3000/catal1?urbanas"){
       var motoData = [{name:"YBR-125", price:199.00, url:"/images/Fotos Motos/urbanas/YBR-125/negra/YBR NEGRA26200.png", class:"first"},
                       {name:"LIBERO", price:199.00, url:"/images/Fotos Motos/urbanas/LIBERO/azul/Libero Azul 2.png"},
                       {name:"SZ-RR", price:199.00, url:"/images/Fotos Motos/urbanas/SZ-RR/verde/SZRR NEGRA VERDE11968.png"},
                       {name:"FAZER 2.0", price:199.00, url:"/images/Fotos Motos/urbanas/FAZER 2.0 FI/blanco/FAZER BLANCA Y AZUL 360-065.png"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"URBANAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(reqs == "http://localhost:3000/catal1?todo-terreno"){
       var motoData = [{name:"XTZ 125", price:199.00, url:"/images/Fotos Motos/todo-terreno/XTZ 125/blanco/galeria1.png", class:"first"},
                       {name:"XT 660R", price:199.00, url:"/images/Fotos Motos/todo-terreno/XT 660R/blanco/yamaha_356249_2014_yam_xt660r_eu_pws1_stu_007.png"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"TODO TERRENO"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(reqs == "http://localhost:3000/catal1?deportivas"){
       var motoData = [{name:"MT 03", price:199.00, url:"/images/Fotos Motos/deportivas/MT 03/azul/9C2A0263.png", class:"first"},
                       {name:"YZ 125", price:199.00, url:"/images/Fotos Motos/deportivas/YZ125/2016_YAM_YZ125LC_EU_DPBSE_STU_007_03.jpeg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"DEPORTIVAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(reqs == "http://localhost:3000/catal1?super"){
       var motoData = [{name:"R1", price:199.00, url:"/images/Fotos Motos/super-deportivas/R1 rojo/sstbr108gallery39534.png", class:"first"},
                       {name:"R1M", price:199.00, url:"/images/Fotos Motos/super-deportivas/R1M/sstbproduct_yzfr1m_01072745.png"},
                       {name:"R3", price:199.00, url:"/images/Fotos Motos/super-deportivas/R3 azul/sstbazul004.png"},
                       {name:"R15", price:199.00, url:"/images/Fotos Motos/super-deportivas/R15/R15 gris-verde/R15_negro-gris-verde.jpg"}];

       var theTemplateScript = $("#shoe-template").html();
       var theTemplate = Handlebars.compile (theTemplateScript);
       $(".cont-templeate").append (theTemplate(motoData));

       var title=[{title:"SÚPER DEPORTIVAS"}];
       var theTitleTemplate = $("#title-template").html();
       var theTitle = Handlebars.compile(theTitleTemplate);
       $(".addTitle").append(theTitle(title));
     }

     else if(reqs == "http://localhost:3000/catal1?sport"){
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

     else if(reqs == "http://localhost:3000/catal1?cuatri"){
       var motoData = [{name:"Grizzly 350 Verde", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Grizzly 350 verde/2015_YAM_YFM350FA_EU_PDG_STU_002.jpg", class:"first"},
                       {name:"Grizzly 700 Rojo", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Grizzly 700 rojo/2015_YAM_YFM700FWAN_EU_RTR_STU_002.jpg", class:"two"},
                       {name:"Raptor 90", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Raptor 90/2016_YAM_YFM90_EU_DPBSE_STU_002.jpg", class:"two"},
                       {name:"Raptor 700", price:199.00, url:"/images/Fotos Motos/cuatrimotos/raptor700/4.jpg", class:"two"},
                       {name:"Viking VI", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Viking azul/VikingSE4.jpg", class:"two"},
                       {name:"Viking", price:199.00, url:"/images/Fotos Motos/cuatrimotos/Viking VI camo/Viking VI camuflado 2016 (4).jpg", class:"two"},
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
       localStorage.setItem("data-color", "blanco");
      });
});
