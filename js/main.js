/* main.js */

$(document).ready(function(){

    /* 주메뉴 */ 
    $(".gnb > ul > li > a").bind("mouseover focus",function(){

        if( $(".sns > dl > dd").eq(2).hasClass("on") ){ 
            $(".sns > dl > dd").eq(2).removeClass("on");
        }
       
        $(".header_wrap").animate({"height":"331px"},200,"linear");
        $(".gnb > ul > li > ul").css("display","block");
        $(".gnb_bg").css("display","block");
        $(".gnb_inner").css("display","block");
    });

    $(".gnb").bind("mouseleave blur",function(){
        
        $(".header_wrap").stop().animate({"height":"140px"},200,"linear");
        $(".gnb > ul > li > ul").css("display","none");
        $(".gnb_bg").css("display","none");
        $(".gnb_inner").css("display","none");
    });
    
    /* 언어 선택 */
    $(".sns > dl > dd").eq(2).click(function(){
        $(this).toggleClass("on")

    });


    /* content1 */
  
    var $bnnNum  = 0;
    var $color_arr01 = ["#248dd5","#ffec48","#f64e5a","#c8e746","#ff5e49","#ffec48"]
    var $color_arr02 = ["#ffec48","#248dd5","#ffec48","#f64e5a","#c8e746","#ff5e49"]
    
    function autocontent01(){
        $bnnNum++;
        if($bnnNum > 5) $bnnNum=0;
        var cont01 = $(".content1 > ul > li").eq($bnnNum).find("ul > li > a");
        var cont02 = $(".content1 > ul > li").eq($bnnNum).find("ul > li");
        var conteq2 = $(".content1 > ul > li > ul > li > a");
        var contli2 = $(".content1 > ul > li > ul > li");

            // 배경색상 변경
            $(".content1").css("background",$color_arr02[$bnnNum]);

            // 왼쪽
            $(".content1 > .bing_txt > span").css("background",$color_arr01[$bnnNum]);
            $(".content1 > .bing_txt").css("display","none");
            $(".content1 > .bing_txt").eq($bnnNum).css("display","block");
            $(".content1 > .bing_txt > .cur_page").eq($bnnNum).css("border-bottom","1px solid "+ $color_arr01[$bnnNum]); 

            // 오른쪽
            $(conteq2).css("color","#dbbf17");
            $(contli2).css("background","#dbbf17");
            $(cont01).css("color",$color_arr01[$bnnNum]);
            $(cont02).css("background",$color_arr01[$bnnNum]);
            $(".content1 > ul > li > a").hide();
            $(".content1 > ul > li > a").eq($bnnNum).css("display","block");
            $(".content1 > .circle_bg").css("background",$color_arr01[$bnnNum]);
            $(".content1 > ul").css("background",$color_arr02[$bnnNum]);

            // 이미지
            $(".circle_bg > img").css("display","block");
            $(".circle_bg > img").removeClass("on");
            $(".circle_bg > img").eq($bnnNum).addClass("on");
    };

    var $auto = setInterval(autocontent01,5000);

    /* content2 */

    var $globalClassName = "banana"; //공통으로 쓸 클래스 네임


    // 제품 변경
    $(".year_btn > ul > li > a").click(function(e){
        e.preventDefault();
        var $className = $(this).parent().attr("class");
        $globalClassName = $className;

        $(".year_btn > ul > li").removeClass("on");
        $(".year_btn > ul").find('.'+$className).addClass("on");

        switch($className){
            case "banana" :
                $(".year_graph").hide();
                $(".content2_inner > div.banana").show();
                break;
            case "togater" :
                $(".year_graph").hide();
                $(".content2_inner > div.togater").show();
                break;
            case "melona" :
                $(".year_graph").hide();
                $(".content2_inner > div.melona").show();
                break;
            case "yoplait" :
                $(".year_graph").hide();
                $(".content2_inner > div.yoplait").show();
                break;
            case "snack" :
                $(".year_graph").hide();
                $(".content2_inner > div.snack").show();
                break;
            default :
                break;
        };
    });

    // 연도별 이미지 변경
    var $yearImgNum = 0;
    var $top_w = 0; // 기본 탑위치 초기화작업
    var $cnt_w = 0; // 추가 크기
    var $basic_w = $("body").width(); // 기본크기
    if($basic_w > 767 && $basic_w < 1023){
        $top_w = 143;
        $cnt_w = 57;
    }else{
        $top_w = 61;
        $cnt_w = 86;
    }

    $("."+$globalClassName + " > ul > span").css("top",$top_w);
    function yearImg(){
        $yearImgNum++;
        if($yearImgNum> 4) $yearImgNum=0;
        
        var $yearCount = $("."+$globalClassName).find("ul:eq(0) > li > a").eq($yearImgNum).text();
        $("."+$globalClassName).find("ul:eq(0) > li").eq($yearImgNum).addClass("on");

        $("."+$globalClassName + " > ul > span").stop().animate({"top":$top_w+$yearImgNum*$cnt_w},600,"linear");

        // 이미지 숨김/보이기
        $("."+$globalClassName).find("ul:eq(1) > li").hide();
        $("."+$globalClassName).find("ul:eq(1) > li").eq($yearImgNum).show();
        
        // count 숫자
        var $nameA = $("."+$globalClassName).find("ul:eq(0) > li").eq($yearImgNum).find("a").text();

        $("."+$globalClassName+" .year_count > ul").each(function(idx){
            var $liCnt = $(this).find("li").length;
            
            for(var i = 0; i<$liCnt;i++){
                var $liCntVal = $(this).find("li").eq(i).text();
            
                if( $liCntVal == $nameA.substr(idx,1)){
                    $(this).find("li").eq(i).show();
                }else{
                    $(this).find("li").eq(i).hide();
                }
            }
        });
    };

    var $auto2 = setInterval(yearImg,5000);

    /* content3 */

    var $banner_w= $(".slide_card > ul > li").width();
    var $bannerNum = 0;
    var $lastNum = $(".slide_card > ul > li").size()-3;

    // 리사이즈
    $(window).resize(function(){
        $banner_w=$(".slide_card > ul > li").width();
    });

    function newsBanner(){
        $bannerNum++;
        if($bannerNum>$lastNum) $bannerNum=0;
        $(".slide_card > ul").stop().animate({"left":$bannerNum*-$banner_w},600,"linear",function(){
            $(".slide_card > ul > li").removeClass("on");
            $(".slide_card > ul > li").eq($bannerNum).addClass("on");
            var $idxNum = Math.ceil(($bannerNum+1)/3);

            $(".slide_roll > ul > li").removeClass("on");
            $(".slide_roll > ul > li").eq($idxNum-1).addClass("on");
        });
    };
    var $auto1 = setInterval(newsBanner,4000);

    /* 재생멈춤 */
    var flag = true;
    $(".btn_play").click(function(e){
        e.preventDefault();
        if(flag){
            //멈춰라
            clearInterval($auto1);
            $(this).addClass("on");
            flag = false;
        }else{
            //재생
            $auto1 = setInterval(newsBanner,4000);
            $(this).removeClass("on");
            flag = true;
        }
    });

    /* 롤링 클릭 */
    var $rollingNum = 0;

    var $banner = $(".slide_roll > ul > li > a").click(function(e){
        e.preventDefault();
        $rollingNum = $banner.index(this);
        $(".slide_card > ul").stop().animate({"left":$rollingNum*-$banner_w},600,"linear",function(){
            var $idxNum = Math.ceil($rollingNum/3);

            $(".slide_roll > ul > li").removeClass("on");
            $(".slide_roll > ul > li").eq($rollingNum).addClass("on");
        });
    });

    /* 패밀리사이트 */
    $(".family_site").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on")
    });

    /* top버튼 */
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        console.log(scroll);

        if(scroll < 100){
            $(".btn_top").removeClass("on ab");
        }

        if(scroll >= 100 && scroll <2800){
            $(".btn_top").removeClass("ab");
            $(".btn_top").addClass("on");
        }

        if(scroll >= 2800){
            $(".btn_top").addClass("ab");
        }
    });

    //모바일

    /* 햄버거 버튼 클릭 */
    $("div.mobBtn").click(function(){
        $("div.mob").addClass("on");
        $("div.mobBtn_close").addClass("on");
        $("body").addClass("on");
        $("div.bg").addClass("on");
        $(this).hide();
    });

    /* 모바일 닫기 버튼 클릭 */
    $("div.mobBtn_close").click(function(){
        $("div.mob").removeClass("on");
        $("div.mobBtn_close").removeClass("on");
        $("body").removeClass("on");
        $("div.bg").removeClass("on");
        $("div.mobBtn").show();
    });

    /* 모바일 주메뉴 2단 */
    $(".mob_gnb > ul > li").click(function(){
		$(this).siblings().removeClass("on");
		$(this).toggleClass("on");
	});

    $(".mob_topMenu02 > li").click(function(){
		$(this).siblings().removeClass("on");
		$(this).toggleClass("on");
	});

    /* 모바일 content1 */
    var $conNum  = 0;
    var $lastConNum = $(".content1_frame > section").size()-1;
    var $con_w= $("section>div>section").width();
    
    // 리사이즈
    $(window).resize(function(){
        $con_w=$("section>div>section").width();
    });

    //다음
    $(".next").click(function(){
        $conNum++;
        console.log($con_w)
        if($conNum>$lastConNum) $conNum=0;
        $(".content1_frame > section").stop().animate({"left":$conNum*-$con_w},600,"linear");
    });
    
    //이전
    $(".prev").click(function(){
        $conNum--;
        if($conNum<0) $conNum=$lastConNum;
        $(".content1_frame > section").stop().animate({"left":$conNum*-$con_w},600,"linear");
    });

    /* 오토배너 */
    function autoContent(){
        $conNum++;
        if($conNum>$lastConNum) $conNum=0;
        $(".content1_frame > section").stop().animate({"left":$conNum*-$con_w},600,"linear");
    };

    // var $autocon = setInterval(autoContent,5000); 

    // 모바일기기 방향전환
    $("section>div>section").bind("orientationchange",function(){
        $con_w = $("section>div>section").width();
        $(".content1_frame > section").animate({"left":$conNum*-$con_w},600,"linear");
    });

    // 모바일 넘기기
    $("section>div>section").bind("swipeleft",function(){
        $(".next").trigger("click");
    });
    $("section>div>section").bind("swiperight",function(){
        $(".prev").trigger("click");
    });

});