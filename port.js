$(document).ready(function () {

/*alert('loaded');*/
    
var preview = function(){

$('#firstSite').hover(function(){
	
 $("#preview").attr("src","firstSite.jpg");
    });
    
$('#imran').hover(function(){
	
 $("#preview").attr("src","imran.jpg");
    });
    
$('#vicrit').hover(function(){
	
 $("#preview").attr("src","victoria.jpg");
    });
    
$('#ray').hover(function(){
	
 $("#preview").attr("src","wip.png");
 
});
   
    
};




preview();    
    

    
});