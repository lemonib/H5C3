$(function(){
	var nowViewWidth = $(window).height()
     
     $(".next").click(function(event) {
            /* Act on the event */
            $.fn.fullpage.moveSectionDown()
        });

    $('#fullpage').fullpage({
    	navigation:true,
    	scrollingSpeed:1200,

       
    	//回掉函数
    	afterLoad:function(anchorlink,index){
          
    		if(index==2){  
                $(".next").fadeOut()
    			$(".search").show().animate({right:370}, 1500
    				,function(){
    				$(".search-wrods").animate({"opacity":1}, 500,function(){
    					$(".search").hide();
    					$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452}, 500)
    					$(".goods-02").show().animate({height:218}, 1000)
    					$(".words-02").animate({opacity:1}, 500,function(){
                            $(".next").fadeIn()
                        })
    				})
    			})
    		}
    	},

    	onLeave:function(index,nextIndex,direction){
    		if(index==2 && nextIndex==3){
    			$(".shirt-02").show().animate({bottom:-(nowViewWidth-250),width:207,left:260}, 2000
    				,function(){
    					$(".img-01-a").animate({opacity:1}, 500,function(){
    						$(".btn-01-a").animate({opacity:1}, 500)
    					})
    				})
    			$(".cover").show()

    		}
    		if(index==3 && nextIndex==4){
    			$(".shirt-02").hide()
                // 沙发距离bottom:250px
    			$(".shirt-04").show().animate({bottom:-(nowViewWidth-250+50),left:260}, 2000
                    ,function(){
                        $(".shirt-04").hide()
                        $(".car-shirt").show()
                        $(".car").animate({left:"125%"},2000
                            ,function(){
                                $(".note").show();
                                $(".noteImg").animate({opacity:1}, 2000)
                                $(".words-04-a").animate({opacity:1}, 2000)
                            })
                    })
    		}

            if(index==4 && nextIndex==5){
                $(".hand-05").animate({bottom:0}, 1500,
                    function(){
                        $(".mouse-a").animate({opacity:1}, 1000)
                        $(".t1f-05").show().animate({bottom:70}, 1000,function(){
                            $('.order-05').animate({bottom:390}, 1000,
                                function(){
                                    $(".words-05").addClass("words-05-a")
                                })
                        })
                    })
            }

            if(index==5 && nextIndex==6){
                $(".t1f-05").animate({bottom:-(nowViewWidth-500),left:"40%",width:65}, 1000,
                    function(){
                        $(".t1f-05").hide()
                    })
                $(".box-06").animate({left:"38%"}, 1000
                    ,function(){
                        $(".box-06").animate({bottom:35}, 500,
                            function(){
                                $("box-06").hide()

                                $(".section6").animate({backgroundPositionX:"100%"},4000,function(){
                                    $(".man").animate({height:305,bottom:116,right:500},1000,function(){
                                        $(".door").animate({opacity:1}, 200,function(){
                                            $(".women").show().animate({right:350,height:306}, 500,
                                                function(){
                                                    $(".pop-07").animate({opacity:1}, 500)
                                                })
                                        })
                                    })
                                })
                                $(".words-06-a").animate({opacity:1,left:"30%"}, 2000)
                                $(".pop-06").show()
                            })
                    })
            }

            if(index==6 && nextIndex==7){	
    	       
                setTimeout(function(){
                    $(".star").animate({width:120}, 500)
                },2000)
            }  
        
        //第八屏
        $(".begin").hover(function() {
            $(".btn-08-a").toggle()
        })
        $(document).mousemove(function(event) {
            /* Act on the event */
            var x = event.pageX-$(".hand-08").width()/2
            var y = event.pageY +10
            var miny = nowViewWidth-500

            if(y<miny){
                y=miny
            }else{
                $(".hand-08").css({left:x,top:y})
            }
            
        });


        $(".again").click(function(event) {
            /* Act on the event */

            $.fn.fullpage.moveTo(1)
            $("img,.move").attr({style:''})
        });

    }
    });
});