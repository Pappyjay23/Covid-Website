document.addEventListener("DOMContentLoaded", ()=>{
    //---SIDE-NAV---

    var sideNav = document.getElementById("mySideNav")
    var openLink = document.querySelector(".open_nav")
    var closeLink = document.querySelector(".closebtn")
    var body = document.querySelector("#main")
    // var width;

    function openNav(event){
        event.stopPropagation();
        sideNav.style.width = "250px";
    }
    function closeNav(){
        sideNav.style.width = "0";
    }

    openLink.addEventListener("click", openNav)
    closeLink.addEventListener("click", closeNav)
    body.addEventListener("click", closeNav)
})

// Adding Fixed Navbar

$(".js--about").waypoint(function (direction) {
    if (direction == "down") {
        $(".js--nav").toggleClass("fixed")
    } else {
        $(".js--nav").toggleClass("fixed")
    }
    
},{
    offset:"60px"
})

// Smooth Scroll to pages on click
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'linear'
    )
  })