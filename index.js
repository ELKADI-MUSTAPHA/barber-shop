        // var menuBtn = document.getElementById("menuBtn")
        // var sideNav = document.getElementById("sideNav")
        // var menu = document.getElementById("menu")
        // sideNav.style.right == "-250px";
        // menuBtn.onclick = function() {
        //     if (sideNav.style.right == "-250px") {
        //         sideNav.style.right = "0";
        //         menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
        //     } else {
        //         sideNav.style.right = "-250px";
        //         menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
        //     }
        // }

        // $(document).ready(function() {

        //     $("a").on('click', function(event) {

        //         if (this.hash !== "") {

        //             event.preventDefault();
        //             var hash = this.hash;

        //             $('html, body').animate({
        //                 scrollTop: $(hash).offset().top
        //             }, 800, function() {
        //                 window.location.hash = hash;
        //             });
        //         }
        //     });
        // });
        document.addEventListener('DOMContentLoaded', () => {
            const imgAnimationsDiv = document.getElementById('img-animations');
            const images = imgAnimationsDiv.querySelectorAll('img');
            const animationClasses = ['animate-1', 'animate-2', 'animate-3', 'animate-4'];

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.8
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        images.forEach((img, index) => {
                            img.classList.add(animationClasses[index]);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(imgAnimationsDiv);
        });
        