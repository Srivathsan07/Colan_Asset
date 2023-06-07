$(document).ready(function(){
    // sidebar open/close
    $(".hamburger-menu").click(function(){
        $(".left-part").addClass("open");
        $(".close").addClass("close1");
        $(".dashboard,.right-part").addClass("overflow");
    });
    $(".close").click(function(){
        $(".left-part").removeClass("open");
        $(".close").removeClass("close1");
        $(".dashboard,.right-part").removeClass("overflow");
    });
    // sidebar-dropdown
    $(".menu-item").click(function(e){
       console.log(e.currentTarget.id ,e.target );
       sessionStorage.setItem("currentTab",e.currentTarget.id)
        $(this).find(".sub-menu").toggleClass("dropdown-open");
        $(this).find(".sub-btn").toggleClass("dropdown-head");
        $(this).find('svg path').toggleClass("dropdown-head-svg");
        $(this).find(".dropdown").toggleClass("rotate");
        if(!$(this).find(".sub-menu").hasClass("dropdown-open")){
          sessionStorage.clear()
        }
    });
    if(sessionStorage.getItem('currentTab') != null && sessionStorage.getItem('currentTab') != undefined && sessionStorage.getItem('currentTab') !="")
    {
       var id = sessionStorage.getItem('currentTab');
        // $('#'+id).addClass("active")
        $('#'+id).find(".sub-menu").toggleClass("dropdown-open");
        $('#'+id).find(".sub-btn").toggleClass("dropdown-head");
        $('#'+id).find('svg path').toggleClass("dropdown-head-svg");
        $('#'+id).find(".dropdown").toggleClass("rotate");
 
    }

// $("#menu-1").addClass("active")
// $("#menu-1").find(".sub-menu").toggleClass("dropdown-open");
// $("#menu-1").find(".sub-btn").toggleClass("dropdown-head");
// $("#menu-1").find('svg path').toggleClass("dropdown-head-svg");
// $("#menu-1").find(".dropdown").toggleClass("rotate");
 
    // active state


    // $(".menu-item a").click(function(){
    //     $(".menu-item a").removeClass("active");
    //     $(this).addClass("active").siblings().removeClass("active");
    // });
    //    if($('.sub-menu-item a').hasClass("active")){    
    //     $("#sub-menu-1").removeClass("dropdown-open");
    //     $(this).find('#sub-menu-1').addClass('dropdown-open');
    // }

   
    // $(this).find(".sub-menu").toggleClass("dropdown-open");
    // $(this).find(".sub-btn").toggleClass("dropdown-head");
    // $(this).find('svg path').toggleClass("dropdown-head-svg");
    // $(this).find(".dropdown").toggleClass("rotate");
  
   
    // if ($('.sub-menu-item > a').hasClass("active")) {
    //     $(".submenu").removeClass("dropdown-open");
    //     $(this).find('.sub-menu').addClass("dropdown-open");
    // }
    // $(document).ready(function(){
       
    //         $('.sub-menu li').parent(".sub-menu").addClass("dropdown-open");
            
      

    // });
   

    // custom browse field

    $('.upload-field').on('click', function () {
        var file = $(this).parent().parent().parent().find('.input-file');
        file.trigger('click');
    });
    $('.input-file').on('change', function () {
        $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
        $('.browse_input input').addClass('file-picked');
    });

        
});

// sidebar closes when click on document
$(document).click(function () {
    $('.left-part').removeClass('open');
    $(".close").removeClass("close1");
    $(".right-part").removeClass("overflow");
 });
 $('.menu-item,.logo,.hamburger-menu,.sub-menus,.sub-menu-item').click(function (e) {
     e.stopPropagation();
 });

//  custom datepicker

$(function () {
    $(function() {
        $( "#datepicker" ).datepicker();
        });

// custom selectbox
$(function ($) {
    const Target = $('select');
    $(Target).on('change', function () {
      if ($(Target).val() !== "") {
        $(this).addClass('is-empty');
      } else {
        $(this).removeClass('is-empty');
      }
    });
  });

// request-form radio button
// $(".courier-radio input").click(function(){
//   $(".radio-section").removeClass("active");
//   $(this).addClass("active").siblings().removeClass("active");
// });