jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("http://flockthemes.com/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:240,
        height:180,
        skinsfoldername:"",
        interval:3000,
        itembottomshadowimagetop:99,
        random:false,
        direction:"vertical",
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"List",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navstyle:"none",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        transitionduration:2000,
        hoveroverlayimage:"hoveroverlay-64-64-5.png",
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        showitembottomshadow:false,
        transitioneasing:"swing",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-3.png",
        showbottomshadow:false,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navimage:"bullet-12-12-1.png",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        showplayvideo:false,
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
        navwidth:12,
        navspacing:4,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:3,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:true,
        backgroundimagewidth:110,
        loop:0,
        navheight:12
    });
});