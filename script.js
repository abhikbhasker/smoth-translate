window.requestAnimationFrame = window.requestAnimationFrame
							||window.mozRequestAnimationFrame
							||window.webkitRequestAnimationFrame
							||window.msRequestAnimationFrame
							||function(f){setTimeout(f,1000/60)}

function crossBtransform(selector,value){
	selector.style.transform=value;
			selector.style.webkitTransform=value;
			selector.style.mozTransform=value;
			selector.style.msTransform=value;
			selector.style.oTransform=value;

}
var bck=document.getElementById("bckgr");

var startpoint=7000,scrollcount=1,scrolling=false,scrolled=false;
var currentpoint=0,reqdiff=0,endpos=0;
var totalscrolled=0,instantscroll=0,directionchange=0,windowWidth=window.innerWidth;

window,scrollTo(0,500);
function setscroll(){
	scrolling=true;
	theta=0;
	reqdiff=instantscroll/scrollcount;
	if(difference>0)
		scrolldirection=1;
	else
		scrolldirection=-1;
}
requestAnimationFrame(getdelay);
windowWidth=window.innerWidth;
var getdelaydata=0,gddcount=1,diffdelaydata=0;
var lastpoint=7000,difference=0;
function getdelay(){
	scrollcount+=1;
	directionchange+=.2;
	currentpoint=window.pageYOffset;
	if(gddcount==1){
		getdelaydata+=1;
		startpoint=currentpoint;
	}
	diffdelaydata+=1;
	if(diffdelaydata==3)
	{
		diffdelaydata=0;
		difference=currentpoint-lastpoint;
		if(instantscroll*difference<0){
			scrollcount=1;
			instantscroll=0;
		}
		if(difference>0&&difference>=reqdiff*2){
			reqdiff=difference/2;
			instantscroll=reqdiff*scrollcount;
			}
		if(difference<0&&difference<=reqdiff*2){
			reqdiff=difference/2;
			instantscroll=reqdiff*scrollcount;
		}
		instantscroll+=difference;
		totalscrolled+=difference;
		lastpoint=currentpoint;
	}
	requestAnimationFrame(getdelay);
}
var scrolldirection=0;
requestAnimationFrame(setmove);
var movedata=0,divider=48*60/1000,theta=0;
var backgroundWidth=window.innerHeight*10000/804;
var angle=0,halfpisquare=Math.pow(Math.PI/2,2);
function setmove(){
	backgroundWidth=window.innerHeight*10000/804;
	bck.style.width=backgroundWidth+'px';
	//document.getElementById("block").innerHTML=currentpoint;
	angle+=.2;
	//block.style.transform="rotate("+Math.cos(angle)+"deg)";
	if(scrolldirection-100){
		if(movedata<currentpoint){
			//movedata=totalscrolled;
			var a=0;
			
		}
		
			theta+=.03;//document.getElementById("block1").innerHTML=movedata;
			if(theta<=Math.PI/2){
				
				
				movedata=movedata+ reqdiff*Math.pow(Math.PI/2-theta,2)/halfpisquare;
			}
			else{
				gddcount=0;
			}
			if(theta>=.5){
					scrollcount=1;
					startpoint=currentpoint;
					instantscroll=0;
				}
		
	}
	else{
		if(movedata>totalscrolled){
			//movedata=totalscrolled;
			a=0;
		}
		
			theta+=.03;
			if(theta<=Math.PI/2){
				
				//document.getElementById("block1").innerHTML=movedata;
				//movedata+=(reqdiff)*Math.sin(Math.PI/2-theta);
			}
			else{
				gddcount=0;
			}
		if(theta>=.5){
					scrollcount=1;
					startpoint=currentpoint;
					instantscroll=0;
				}
	}
	if(movedata<0){
		lastpoint=7000;
		movedata=1;
		window.scrollTo(0,7001);
	}
	if(movedata>=0&&movedata<=(backgroundWidth- windowWidth)*2){
		endpos=window.pageYOffset;
		crossBtransform(bck,"translate3d("+(-movedata/2)+"px,0,0)");

		//translated=movedata/5+xcord- scrollerPosition;
	//if(currentpoint>=7000)
	//scroller.style.left=(currentpoint-7000)/5+'px';
	}
	if(movedata>(backgroundWidth- windowWidth)*2){
		window.scrollTo(0,endpos-1);
		movedata=(backgroundWidth- windowWidth)*2;
		lastpoint=endpos;
	}
	requestAnimationFrame(setmove);
}
var starty,startx,currenty,currentx;
var scroller=document.getElementById("scroller");
var scrollerPosition=0,translated=0,xcord=0;
function getentrycord(event){
	scrollerPosition=event.clientX-translated;
}
////hover////

var hovering=false;
function sethover(event){
	hovering=true;
}
function scrollit(event){
	xcord=event.clientX;
	translated=xcord- scrollerPosition;
	window.scrollTo(0,(7000+translated))

	//if(translated>=0&&translated<=windowWidth-400)
	//	scroller.style.transform="translate3d("+0+"px,0,0)";
	if(movedata<=1){
		translated=0;
		scrollerPosition=xcord;
	}

}
window.addEventListener('scroll',function(){
	requestAnimationFrame(setscroll);
},false);
