/*start nav*/
function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });
  /*end nav*/

/*Start flip cards*/
  $('.card').click(function(){
    $(this).toggleClass('flipped');
  });
/* End flip card*/

/* drag people into houses*/
const covid = $('#covid');
const covidBody = document.getElementById('body');
const covidHeart = document.getElementById('gas');
const sun = document.getElementById('gas2_1_');
const people = document.getElementById('people');
const houses = document.querySelectorAll('#house > g');
const grayScaleIntensity = document.getElementById('grayScaleIntensity');
const apartment = document.getElementById('apartment');
const treesF = document.querySelector('#treesF');
const treesB = document.querySelector('#treesB');
const grass = document.querySelector('#grass');
const sky = document.querySelector('#sky');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

safetyCount = 0;

SetGrayScale();


function SetGrayScale() {
  for (i = 0; i < houses.length; i++) {
          houses[i].style.filter = "url('#grayscale')";
  }
  treesF.style.filter = "url('#grayscale')";
    treesB.style.filter = "url('#grayscale')";
   sky.style.filter = "url('#grayscale')";
 apartment.style.filter = "url('#grayscale')";
  grass.style.filter = "url('#grayscale')";
}


function UnSetGrayScale() {
  for (i = 0; i < houses.length; i++) {
          houses[i].style.filter = "";
  }
  treesF.style.filter = "";
    treesB.style.filter = "";
   sky.style.filter = "";
 apartment.style.filter = "";
  grass.style.filter = "";
}

covidMvmnt = new TimelineMax();

gsap.to(covid, { rotate: 360, repeat: -1, transformOrigin: "50% 50%", duration: 10, ease: "none"});
gsap.to(covid, {x: 100, y: 50, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 5}, 0);

Draggable.create("#people > g", {
    type:"x,y",
    bounds: "svg",
    onRelease: function() {
      for (i = 0; i < houses.length; i++) {
        if (this.hitTest(houses[i])) {
          gsap.to(this.target, {opacity: 0});
          houses[i].style.filter = "";
          gsap.to(covid, { scale: "-=0.05" });
          safetyCount++;
          break;
        } else if (this.hitTest(apartment)) {
          gsap.to(this.target, {opacity: 0});
          apartment.style.filter = "";
          safetyCount++;
          break;
        }
      }
        if (safetyCount >= 12) {
          gsap.to(covidHeart, { scale: 40, transformOrigin: "50% 50%", fill: 'yellow', duration: 3, opacity: 0.1 });
          UnSetGrayScale();
          gsap.to(body, { scale: 0, transformOrigin: "50% 50%"});
          gsap.to(sun, { fill: 'yellow', opacity: "0.5"});
          
          cloudTimeline = new TimelineMax({ repeat: -1, yoyo: true, ease: "none"});
          
          cloudTimeline.to(c1, { x: 2000, duration: 80});
          cloudTimeline.to(c2, { x: -2000, duration: 40}, 0);
          cloudTimeline.to(c3, { x: -2000, duration: 60}, 0);
        }
      
    }
});
/* end drag people */

/* steps of covid-19*/
$(".step").click( function() {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
  $(".line-progress").css("width", "3%");
  $(".step1").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
  $(".line-progress").css("width", "25%");
  $(".step2").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
  $(".line-progress").css("width", "50%");
  $(".step3").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
  $(".line-progress").css("width", "75%");
  $(".step4").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
  $(".line-progress").css("width", "100%");
  $(".step5").addClass("active").siblings().removeClass("active");
});
/* end covid-19 */

/* insert back to top button dynamicly*/
$( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
var $window = $(window);
var distance = 80;
  // scroll
$window.scroll(function() {
  // header
  if($window.scrollTop() >= distance) {
    $(".backToTop").fadeIn();
  }else{
    $(".backToTop").fadeOut();
  }
});

$('.backToTop').click(function() {
  $('html, body').animate({
          scrollTop: 0
      }, 10);
});
/*End button to top*/








