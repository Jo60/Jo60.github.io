$(document).ready(function () {

/*alert('loaded');*/
    
var preview = function(){

$('#firstSite').hover(function(){
	
 $("#preview").attr("src","images/firstSite.jpg");
    });
    
$('#imran').hover(function(){
	
 $("#preview").attr("src","images/jon.jpg");
    });
    
$('#vicrit').hover(function(){
	
 $("#preview").attr("src","images/victoria.jpg");
    });
    
$('#tax').hover(function(){
	
 $("#preview").attr("src","images/taxShot.png");


 
});
   
    
};


preview();    
    
 /*$("nav").window.pageYOffset>400(function(){
        $("nav").animate({background-color: "red"},"slow");
    });*/
    
var mq = window.matchMedia( "(min-width: 576px)" );
    
if (mq.matches) {    
    
var title = document.getElementById('title');
function changeNav(ev){
    if(window.pageYOffset>400){
    $("nav").addClass("grayNav");
}
    else{
     $("nav").removeClass("grayNav");
    };
    
};
    
    $(".navbar-toggler-icon").click(function(){
        $("nav").addClass("bg-light");
    });

}

window.onscroll=changeNav
    
    
lightbox.option({
      'maxWidth': 600,
      'maxHeight': 600
    })
 


});