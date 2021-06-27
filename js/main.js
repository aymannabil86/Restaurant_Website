

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
        return n.replace(/,/g, '.');
        }
    });
    $(function(){
        // 'user strict';
        var upperBarHeight = $(".upper-bar").innerHeight(),
        navbarHeight   = $('.navbar').innerHeight(),
        windowHeigh    = $(window).height();
        
    
        $(".slider,.carousel-item").height(windowHeigh - upperBarHeight - navbarHeight);
    });
    
    $(".featured-work li").on("click",function(){
        $(this).addClass("active").siblings().removeClass('active');
        if ($(this).data('class')==='all'){
            $(".shuffle-image .row .col-md img").css("opacity","1");
        }
        else{
            $(".shuffle-image .row .col-md img").css("opacity",".09")
            $($(this).data('class')).css('opacity','1')
        }
    });
    
    const toggleMenu = document.querySelector(".toggle-menu");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    
    toggleMenu.addEventListener('click', ()=>{
       //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        toggleMenu.classList.toggle("toggle");
    });
}
    
)