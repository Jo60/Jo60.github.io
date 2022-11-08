$(document).ready(function () {
    
var preview = function(){

$('#firstSite').hover(function(){
	
 $("#preview").attr("src","images/victoria.jpg");
    });
    
$('#imran').hover(function(){
	
 $("#preview").attr("src","images/yogaFigma.png");
    });
    
$('#vicrit').hover(function(){
	
 $("#preview").attr("src","images/weatherShot.png");
    });
    
$('#tax').hover(function(){
	
 $("#preview").attr("src","images/taxShot.png");
 
});
    
};

preview();    
    
var mq = window.matchMedia( "(min-width: 576px)" );
    
if (mq.matches) {    
    
    function changeNav(ev){
    if(window.pageYOffset>100){
    $("nav").addClass("grayNav");
}
    else{
     $("nav").removeClass("grayNav");
    }
};
    $(".navbar-toggler-icon").click(function(){
        $("nav").addClass("bg-light");
    });
}

window.onscroll=changeNav;
    
lightbox.option({
      'maxWidth': 600,
      'maxHeight': 600
    })
    
});