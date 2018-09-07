jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-2\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("http://flockthemes.com/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-2").amazingcarousel({
        jsfolder:jsFolder,
        width:240,
        height:180,
        skinsfoldername:"",
        interval:500,
        itembottomshadowimagetop:100,
        random:false,
        direction:"horizontal",
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Stylish",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-100-5.png",
        navstyle:"none",
        enabletouchswipe:false,
        backgroundimagetop:-40,
        arrowstyle:"none",
        bottomshadowimagetop:100,
        transitionduration:2500,
        hoveroverlayimage:"hoveroverlay-64-64-4.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        showitembottomshadow:false,
        transitioneasing:"easeOutSine",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-0.png",
        showbottomshadow:false,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navimage:"bullet-24-24-0.png",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        showplayvideo:true,
        spacing:8,
        scrollitems:1,
        showhoveroverlay:false,
        scrollmode:"item",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        arrowwidth:32,
        pauseonmouseover:true,
        navmode:"page",
        arrowhideonmouseleave:1000,
        navwidth:24,
        navspacing:4,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:4,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:true,
        backgroundimagewidth:110,
        loop:0,
        navheight:24
    });
});