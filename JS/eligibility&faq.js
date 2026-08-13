
$(document).ready(function(){
    $("#dropdown-1").click(function(){
        $(".answer-1").slideToggle("slow");
    });

    $("#dropdown-2").click(function(){
        $(".answer-2").slideToggle("slow");
    });

    $("#dropdown-3").click(function(){
        $(".answer-3").slideToggle("slow");
    });

    $("#dropdown-4").click(function(){
        $(".answer-4").slideToggle("slow");
    });

    $("#dropdown-5").click(function(){
        $(".answer-5").slideToggle("slow");
    });

    $("#dropdown-6").click(function(){
        $(".answer-6").slideToggle("slow");
    });

    $("#dropdown-7").click(function(){
        $(".answer-7").slideToggle("slow");
    });

    $("#dropdown-8").click(function(){
        $(".answer-8").slideToggle("slow");
    });

    $("#dropdown-9").click(function(){
        $(".answer-9").slideToggle("slow");
    });

    $("#dropdown-10").click(function(){
        $(".answer-10").slideToggle("slow");
    });

    $("#dropdown-1, #dropdown-2, #dropdown-3, #dropdown-4, #dropdown-5, #dropdown-6, #dropdown-7, #dropdown-8, #dropdown-9, #dropdown-10").hover(function(){
         $(this).css("cursor", "pointer");
    });

    $(".answer-1, .answer-2, .answer-3, .answer-4, .answer-5, .answer-6, .answer-7, .answer-8, .answer-9, .answer-10").click(function(){
       $(this).slideUp("slow");
   });

    $('.answer').mouseenter(function(){
       $(this).css('cursor', 'pointer');
    })
});;


