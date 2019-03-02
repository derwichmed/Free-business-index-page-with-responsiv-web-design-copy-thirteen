$(function (){
    isNavBarHidden = true;
   $('.nav_bar_menu_mobile img').click(function (){
       if(isNavBarHidden){
            $('body > header .nav_two .nav_bar').show(); 
            isNavBarHidden = false;
       }
        else{
            $('body > header .nav_two .nav_bar').hide(); 
            isNavBarHidden = true;
       }
   });
});