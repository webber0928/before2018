//index
$(document).ready(function() {
        //全局
        
        //~ $.get("test.txt",function(data){
            //~ alert(data);
            //~ });
        audio = document.getElementById('audio');
        function muted(){
            if(audio.muted){
                audio.muted = false;
                $(this).find('span').text("SOUND ON");
            }else{
                audio.muted = true;
                $(this).find('span').text("SOUND OFF");
            }
        }
        
        $('.background_music').on('click', muted).css("cursor","pointer");
        setTimeout(function(){//首頁開頭的動畫
                $("#StartIndexImg").fadeIn(1000,function(){
                    $('.indexblack').fadeOut(1500,function(){
                        $('#indexfooter').slideDown(1000,function(){
                            $('#indexmenubar').fadeIn(1000,function(){
                                $("logo_action").fadeIn(1000);
                                $("#welcome_img1").animate({//以圖片作移動
                                  marginRight: "30px",
                                  opacity:'0.9',
                                }, 3500,"swing",function(){
                                        $("#welcome_img2").fadeIn(1500);
                                    });
                            });
                        });
                        
                    });
                });
                }, 1000);
          
        function aboutusstart(){//aboutus的開頭動畫function
            
            $("#aboutus_img2").hide();
            $("#aboutus_img1").css({"opacity":"0.05","margin-right":"80px","margin-bottom":"10px"});
            $("#page1_div").fadeIn(1000);
            $("#aboutus_img1").animate({//以圖片作移動
                  marginRight: "30px",
                  opacity:'0.9',
                }, 1200,"swing",function(){
                     $("#aboutus_img2").fadeIn(2000);
            });
            }
        setTimeout(function(){//aboutus的開頭動畫
            // $('.black').fadeOut(500);
            aboutusstart();
            //~ $('footer').slideDown(1000,function(){
                //~ $('#menubar').fadeIn(1000,function(){
                    //~ $("logo_action").fadeIn(1000);
                //~ });
            //~ });
        }, 500);

            
            
//aboutus
        function theArrow( arrow, LorR ){
            arrow.css({
                "position": "absolute",
                "bottom": "24%",
                "font-size": "100px",
                "font-family": "inherit",
                "cursor": "pointer"
            }).hover(function(){
                $(this).css("opacity",'1')
            },function(){
                $(this).css("opacity",'0.5');
            });

            if ( LorR === 'right' ){
                arrow.css('right','0px');
            }else if( LorR === 'left' ){
                arrow.css('left','0px');
            }
        }
        theArrow( $('.l2'), 'left' );
        theArrow( $('.r2'), 'right' );
        $('.logo').css("cursor", "pointer").on('click',function(){
            window.location.href = 'index.html';
        })

      /* wait for images to load */
      $(window).load( function() {
            $(document).smoothSlides({
            duration: 18000,
            navigation: false,
            pagination: false,
            order: 'random',
            effect: 'random',
            // 'random', 'zoomIn', 'zoomOut', 'panLeft', 'panRight', 'panUp', 'panDown', 'crossFade','none'
            /* options seperated by commas */
            
            });


        
    //aboutus
        $(window).load( function() {
            $(document).smoothSlides({
            duration: 18000,
            navigation: false,
            pagination: false,
            order: 'random',
            effect: 'random',
            // 'random', 'zoomIn', 'zoomOut', 'panLeft', 'panRight', 'panUp', 'panDown', 'crossFade','none'
            /* options seperated by commas */
            });
        });

        $('.logo').css("cursor", "pointer").on('click',function(){
            window.location.href = 'index.html';
        });
        $('.close').click(function(){
            $('#page2_div').fadeOut(1000,function(){
                //~ window.location.href = 'test.html';
                aboutusstart();
                
                
                });
           //~ $(window).location.href = 'page1.html';
        });

        $("#summary").click(function(){
            $("#page2_div").show();
            $("#page1_div").hide();
            //
            $(".business_philosophy").stop(true).hide();
            $(".map_location").stop(true).hide();
            //
            $(".summary").stop(true).hide();
            
            $('#aboutus_child').fadeIn(500,function(){
                $("#summary_img").fadeIn(500,function(){
                    $("#summary_text").fadeIn(500);
                });
            });
            $("#summary_heading").fadeIn(1000);
        
        });
        $("#business_philosophy").click(function(){
            $("#page2_div").show();
            $("#page1_div").hide();
            //
            $(".summary").stop(true).hide();
            $(".map_location").stop(true).hide();
            //
            $(".business_philosophy").stop(true).hide();
            
            $('#aboutus_child').fadeIn(500,function(){
                $("#business_philosophy_img").fadeIn(500,function(){
                    
                    $("#business_philosophy_text").fadeIn(500);
                });
            });
            $("#business_philosophy_heading").fadeIn(1000);
        
        });
        $("#map_location").click(function(){
            $("#page2_div").show();
            $("#page1_div").hide();
            //
            $(".summary").stop(true).hide();
            $(".business_philosophy").stop(true).hide();
            //
            $(".map_location").stop(true).hide();
            
            $('#aboutus_child').fadeIn(500,function(){
                $("#map_location_img").fadeIn(500,function(){
                    
                    $("#map_location_text").fadeIn(500);
                });
            });
            $("#map_location_heading").fadeIn(1000);
            
        });
        //~ $("#summary").click();
            //~ setTimeout(function(){$('.black').fadeOut(500)}, 500);
            
        });
    //page2-3&2-2 bus&map

    $(".map_div").fadeIn(1100,function(){
        $(".g0").fadeIn(1100,function(){
            $(".g1").fadeIn(1100);
            });
            $(".map_sidebutton").fadeIn(1100);
        });
        
    $(".map").click(function(){
        $("#busimg").hide();
        $("#mapimg").fadeIn(1500);
        });
    $(".bus").click(function(){
        $("#mapimg").hide();
        $("#busimg").fadeIn(1500);
        });
    $(".close_bus_map").click(function(){
        alert("test");
        });
});


var imgList = []
var count = 3
ajaxCall( 'images/fp_bg.jpg' );
ajaxCall( 'images/bg1.jpg' );
ajaxCall( 'images/bg2.jpg' );
ajaxCall( 'images/bg3.jpg' );
//ajax function
function ajaxCall( imgFile ){
  // $(".black").show();
    $.ajax({
    type:'HEAD',
    url: imgFile,
    // cache : false,
    crossDomain: "true",
    success: function(response) {
      imgList.push( imgFile );
      if(imgList.length > count)
        $(".black").hide();
        // setTimeout(function(){$(".black").hide();},500);
      // alert("Success");
    },
    error: function (xhr, status) {
      // $("#LoadingImage").hide();
      console.log('Unknown error ' + status);
      // alert('Unknown error ' + status);
    }
 });
}