responsive();
function responsive(){
    $(window).resize(function (){
        if(window.innerWidth<773){
            $(".col-md-6").addClass("col-md-12");
            $(".col-md-6").removeClass("col-md-6");
        }
        else{
            $(".col-md-6").removeClass("col-md-12");
            $(".col-md-6").addClass("col-md-6");
        }
    });
}