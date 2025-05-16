

let aboutTop = $("#about").offset().top;

$(window).scroll(()=>{
    let windowScroll = $(window).scrollTop();
    if(windowScroll > aboutTop - 40)
    {
        $("#main_nav").css("backgroundColor","rgba(0,0,0,0.5)");
        $("#btn-up").fadeIn(500);
    }
    else
    {
        $("#main_nav").css("backgroundColor","transparent");
        $("#btn-up").fadeOut(500);
    }
});

$("#btn-up").click(()=>{

    $("html,body").animate({scrollTop:'0'} , 3000);
});

$("a[href^='#']").click(function(){

    let aHref = $(this).attr("href");
    console.log(aHref);
    
    let aHrefTop = $(aHref).offset().top;

    $("html,body").animate({scrollTop:aHrefTop} , 2000);
});

//..............change color

let colorItem = $(".colorItem");

colorItem.click(function(){

    let myColor = $(this).css("backgroundColor");
    $("h2,.change_clr,a").css("color",myColor);
});

colorItem.eq(0).css("backgroundColor","#09c");
colorItem.eq(1).css("backgroundColor","tomato");
colorItem.eq(2).css("backgroundColor","#e65f78");
colorItem.eq(3).css("backgroundColor","teal");
colorItem.eq(4).css("backgroundColor","orange");
// console.log( $(".sideBar").css("left") );



let boxWidth = $(".colorBox").outerWidth(true);

$(".sideBar").css({left:-`${boxWidth}`});

$(".settings").click(function(){

    if($(".sideBar").css("left") == "0px")
    {
        $(".sideBar").animate({left:-`${boxWidth}`},1000);
    }else
    {
        $(".sideBar").animate({left:`0px`},1000);
    }
});


// .................loading

$(document).ready(function(){

    $(".spinner").fadeOut(1000, function(){

        $("#loading").fadeOut(1000, function(){

            $("body").css("overflow", "auto");

            $("#loading").remove();
        });
    });
    
});



