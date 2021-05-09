$(function (){
    for (i=1 ; i<=20 ; i++) {
        $(".imgContainer").append("<img src='images/"+i+".jpg'/>");
    }

    $(".imgContainer img").each(function (imgIndex,imgElement){
        randomZIndex = Math.round(Math.random());
        randomRotation = Math.round(Math.random() * 60);
        randomTop = Math.round(Math.random() * 300);
        randomLeft = Math.round(Math.random() * 700);

        $(imgElement).css("width","300px").css("height","170px").css("position","absolute");
        $(imgElement).css("z-index",randomZIndex);
        $(imgElement).css({"transform" : "rotate("+ randomRotation +"deg)"});
        $(imgElement).css("top",randomTop);
        $(imgElement).css("left",randomLeft);
    });

    //Mouse Over ----------------------------------------------------
    $(".imgContainer img").mouseover(function (){
        zIndex = $(this).css("z-index");
        $(this).css("z-index","99").css("box-shadow","5px 5px 10px #fff");

    });
    $(".imgContainer img").mouseout(function (){
        $(this).css("z-index",zIndex).css("box-shadow","none");
    });



    //Click on Image -------------------------------------------------------
    $(".imgContainer img").attr("data-toggle","modal").attr("data-target","#modalSlider")
    $(".imgContainer img").addClass("img-responsive");
    $(".imgContainer img").click(function () {
        imgSrc = $(this).attr("src");
        $(".bigPic").attr("src",imgSrc);
    });


    //Slider by controls ----------------------------------------------
    $(".carousel-control-next").click(function (){
        var currentImgSrc = Number((($(".bigPic").attr("src").split("/"))[1].split("."))[0]);
        var nextImgSrc = currentImgSrc == 20 ? 1 : (currentImgSrc + 1);
            $(".bigPic").attr("src","images/"+nextImgSrc+".jpg");
    });

    $(".carousel-control-prev").click(function (){
        var currentImgSrc = (($(".bigPic").attr("src").split("/"))[1].split("."))[0];
        var prevImgSrc = currentImgSrc == 1 ? 20 : Number(currentImgSrc) - 1;
            $(".bigPic").attr("src","images/"+prevImgSrc+".jpg");
    });


    //Slider by Click on a button -----------------------------------
   $(".btnSlide").click(function (){
            refreshIntervalId = setInterval(function (){
            var currentImgSrc = (($(".bigPic").attr("src").split("/"))[1].split("."))[0];
            var nextImgSrc = currentImgSrc == 20 ? 1 : Number(currentImgSrc) + 1;
            $(".bigPic").attr("src","images/"+nextImgSrc+".jpg");
        },3000);
    });

   $(".close").click(function (){
       clearInterval(refreshIntervalId);
   });

});