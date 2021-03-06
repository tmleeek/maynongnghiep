/* ================================================
----------- Mango JS---------- */
/********************* Scroll Function **************************/ 
jQuery.fn.extend({
    scrollToMe: function(){
        if(jQuery(this).length){
            var top = jQuery(this).offset().top - 100;
            jQuery('html,body').animate({scrollTop: top}, 500);
        }
    },
    scrollToJustMe: function(){
        if(jQuery(this).length){
            var top = jQuery(this).offset().top;
            jQuery('html,body').animate({scrollTop: top}, 500);
        }
    }
});
/********************* Product Images ***********************/
function productImages() {
    var $ = jQuery;
    $("a.product-image img.defaultImage").each(function(){
        var default_img = $(this).attr("src");
        if(!default_img)
            default_img = $(this).attr("data-src");
        var thumbnail_img = $(this).parent().children("img.hoverImage").attr("src");
        if(!thumbnail_img)
            thumbnail_img = $(this).parent().children("img.hoverImage").attr("data-src");
        if(default_img){
            if(default_img.replace("/small_image/","/thumbnail/")==thumbnail_img){
                $(this).parent().children("img.hoverImage").remove();
                $(this).removeClass("defaultImage");
            }
        }
    });
}
/********************* Scroll Function end**************************/
jQuery(function ($){
    /********************* Product Review Tab (page type 1 & 2)**************************/ 
    $('div.product-view-type1 p.no-rating a, div.product-view-type1 .rating-links a,div.product-view-type2 p.no-rating a, div.product-view-type2 .rating-links a').click(function(){
        $('.product-tabs ul li').removeClass('active');
        $('#tab_review_tabbed').addClass('active');
        $('.product-tabs .tab-content').hide();
        $('#tab_review_tabbed_contents').show();
        $('#tab_review_tabbed').scrollToMe();
        return false;
    });
    /********************* Product Review Tab (page type 3)**************************/ 
    $('div.product-view-type3 p.no-rating a, div.product-view-type3 .rating-links a').click(function(){        
        if (!$(".product-tap-panel #collapse_review_tabbed").hasClass("in")) {            
            $("#heading_review_tabbed .panel-title > a").trigger("click");
            $('.product-tap-panel #collapse_review_tabbed').on('shown.bs.collapse', function (e) {
                $("#heading_review_tabbed").scrollToMe();        
            })   
        } else {
            $("#heading_review_tabbed").scrollToMe();
        }                                           
        return false;
    });
    /********************* Qty Holder **************************/ 
    $(".table_qty_inc").unbind('click').click(function(){
        if($(this).parent().children(".qty").is(':enabled'))
        $(this).parent().children(".qty").val((+$(this).parent().children(".qty").val()+1) || 0);
    });
    $(".table_qty_dec").unbind('click').click(function(){
        if($(this).parent().children(".qty").is(':enabled'))
        $(this).parent().children(".qty").val(($(this).parent().children(".qty").val()-1 > 0)?($(this).parent().children(".qty").val() - 1) : 0);
    });

    $(".qty_inc").unbind('click').click(function(){
        if($(this).parent().parent().children("input.qty").is(':enabled')){
        $(this).parent().parent().children("input.qty").val((+$(this).parent().parent().children("input.qty").val() + 1) || 0);
        $(this).parent().parent().children("input.qty").focus();
        $(this).focus();
        }
    });
    $(".qty_dec").unbind('click').click(function(){
        if($(this).parent().parent().children("input.qty").is(':enabled')){
            $(this).parent().parent().children("input.qty").val(($(this).parent().parent().children("input.qty").val() - 1 > 0) ? ($(this).parent().parent().children("input.qty").val() - 1) : 0);
            $(this).parent().parent().children("input.qty").focus();
            $(this).focus();
        }
    });
    /************** Header - Search icon, Links icon click event ***************/
    $("a.search-icon").click(function(e){
        if($(this).parent().children("#search_mini_form").hasClass("show")){
            $(this).parent().children("#search_mini_form").removeClass("show");
        }
        else
            $(this).parent().children("#search_mini_form").addClass("show");
        e.stopPropagation();
    });
    $("a.search-icon").parent().click(function(e){
        e.stopPropagation();
    })
    $("html,body").click(function(){
        $("a.search-icon").parent().children("#search_mini_form").removeClass("show");
    });
    /********************* Product Images ***********************/
    productImages();
});

jQuery(function($){
    $(window).scroll(function(){
        var side_header_height = $(".header-container.type10").innerHeight();
        var window_height = $(window).height();
        if(side_header_height-window_height<$(window).scrollTop()){
            if(!$(".header-container.type10").hasClass("fixed-bottom"))
                $(".header-container.type10").addClass("fixed-bottom");
        }
        if(side_header_height-window_height>=$(window).scrollTop()){
            if($(".header-container.type10").hasClass("fixed-bottom"))
                $(".header-container.type10").removeClass("fixed-bottom");
        }
    }); 
    $(".category-products .owl-product-image-gallery").owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        responsiveClass: true,
//        animateOut: "fadeOut",
        nav: true,
        navText:["",""],
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true
    });
	$(".filterproducts-tab > ul > li > a").click(function(){
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false,window,0);
		window.dispatchEvent(evt);
	});
});

jQuery(function($){
   $(window).on('load', function(){
        if (typeof WOW === 'function') {
            new WOW({
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0          // default
            }).init();
        }    
   });
});

jQuery(function($){
    var Mango = {
        mobile: false,
        fullHeight: function() {
        $('.fullheight').each(function () {
            var winHeight = $(window).height();
            $(this).css('height', winHeight);
        });
        },
        checkMobile: function() {
            /* Mobile Detect*/
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        },
        parallax: function () {
            // Parallax - if not mobile  with skrollr js plugin 
            if ( !this.mobile && typeof skrollr === 'object') {
                skrollr.init({
                    forceHeight: false
                });
            } 

            if ( this.mobile ) {
                /* if mobile, delete background attachment fixed from parallax class */
                $('.parallax, .parallax-fixed').css('background-attachment', 'initial')
            }

        },
        init:function() {
            this.fullHeight();
            this.checkMobile();
            this.parallax();
        }  
    };
    $(document).ready(function(){
        Mango.init();
    }); 
    // Resize Event 
    // Smart resize if plugin not found window resize event
    if($.event.special.debouncedresize) {
        $(window).on('debouncedresize', function() {
            /* Full Height recall */
            Mango.fullHeight();
        });
    } else {
        $(window).on('resize', function () {            
            /* Full Height recall */
            Mango.fullHeight();
        });
    }   
});
