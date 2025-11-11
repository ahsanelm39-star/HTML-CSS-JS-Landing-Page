document.addEventListener("DOMContentLoaded", function() {
    let set;
    let boult = document.querySelectorAll(".landing .main-span span");
    let landing = document.querySelector(".landing");
    let images = ["url(images/l-18.jpg)", "url(images/l-3.jpg)", "url(images/l-1.jpg)", "url(images/l-4.jpg)", "url(images/l-2.jpg)"];
    boult.forEach((span, ind) => {
        span.addEventListener("click", () => {
            boult.forEach((spa) => {
                spa.classList.remove("on");
            });
            span.classList.add("on");
            images.forEach((im, i) => {
                if (ind == i) {
                    landing.style.backgroundImage = images[i];
                }
            });
        });
    });
    function randomBack() {
        set = setInterval(() => {
            let random = Math.floor(Math.random() * images.length);
            landing.style.backgroundImage = images[random];
            boult.forEach((spa, i) => {
                if (i == random) {
                    boult.forEach((s) => {
                        s.classList.remove("on");
                    });
                    spa.classList.add("on");
                }
            });
        }, 5000);
    }

    randomBack();

    let links = document.querySelector(".landing .header .links");
    let i = document.querySelector(".header i");
    i.onclick = () => {
        links.classList.toggle("show");
    };
    window.addEventListener("click", (e) => {
        if (e.target !== i) {
            links.classList.remove("show");
        }
    });
    let a = document.querySelectorAll(".landing .continer .links li a");
    a.forEach((e) => {
        e.addEventListener("click", () => {
            a.forEach(l => {
                l.classList.remove("on");
            });
            e.classList.add("on");
        });
    });
    ///////
    let settingBox = document.querySelector(".setting-box");
    let settingBoxI = document.querySelector(".setting-box .setting");
    let settingI = document.querySelector(".setting-box .setting i");
    settingBoxI.onclick = () => {
        settingBox.classList.toggle("open");
        settingI.classList.toggle("turn");
    }
    let li = document.querySelectorAll(".setting-box ul li");
    li.forEach((l) => {
        l.addEventListener("click", () => {
            li.forEach((i) => {
                i.classList.remove("on");
            });
            l.classList.add("on");
            document.documentElement.style.setProperty("--main-color", l.dataset.color);
            localStorage.color = l.dataset.color;
        });
    });
    if (localStorage.color) {
        document.documentElement.style.setProperty("--main-color", localStorage.color);
        li.forEach((l) => {
            if (l.dataset.color === localStorage.color) {
                li.forEach(i => {
                    i.classList.remove("on");
                });
                l.classList.add("on");
            }
        });
    }
    let back = document.querySelectorAll(".setting-box .collect span");
    back.forEach((span) => {
        span.onclick = () => {
            back.forEach(spa => {
                spa.classList.remove("active");
            });
            span.classList.add("active");
            if (span.innerHTML === "No") {
                localStorage.background = false;
                clearInterval(set);
            } else if (span.innerHTML === "Yes") {
                localStorage.background = true;
                randomBack();
            }
        }
    });
    if (localStorage.background === "true") {
        randomBack();
    }
    if (localStorage.background === "false") {
        clearInterval(set);
    }
    let bullets = document.querySelectorAll(".setting-box .collect:nth-child(3) span");
    bullets.forEach((bullet) => {
        bullet.addEventListener("click", () => {
            console.log(bullet)
        })
    })
    let collect2 = document.querySelectorAll(".collect-2 span");
    let bulleets = document.querySelector(".bulleets");
    collect2.forEach((span) => {
        span.addEventListener("click", () => {
            collect2.forEach((s) => {
                s.classList.remove("on");
            });
            span.classList.add("on");
            if (span.innerHTML == "No") {
                bulleets.classList.add("behiend");
                localStorage.setItem("bullets", false);
            } else if (span.innerHTML == "Yes") {
                bulleets.classList.remove("behiend");
                localStorage.setItem("bullets", true);
            }
        });
    });
    if (localStorage.getItem("bullets") == "false") {
        document.querySelector(".collect-2 .no").classList.add("on");
        document.querySelector(".collect-2 .yes").classList.remove("on");
        bulleets.classList.add("behiend");
    }
    if (localStorage.getItem("bullets") == "true") {
        bulleets.classList.remove("behiend");
        document.querySelector(".collect-2 .no").classList.remove("on");
        document.querySelector(".collect-2 .yes").classList.add("on");
    }
    ///////
    let skelis = document.querySelector(".skelis");
    let widthSpan = document.querySelectorAll(".skelis .width");
    let q = false;
    window.addEventListener("scroll", () => {
            if (window.scrollY > skelis.offsetTop - 600) {
                widthSpan.forEach((span) => {
                    span.style.width = span.dataset.wedth;
                });
            }
        })
        //////
    let boxS = document.querySelectorAll(".gallary .continer .box span");
    boxS.forEach((span, ind) => {
        span.addEventListener("click", () => {
            let overLay = document.createElement("div");
            overLay.classList.add("overlay-img");
            let div = document.createElement("div");
            div.classList.add("image-continer");
            let img = document.createElement("img");
            img.classList.add("image-createn");
            document.querySelectorAll(".gallary .continer .box img").forEach((i, indx) => {
                if (ind == indx) {
                    img.src = i.src;
                }
            });
            div.appendChild(img);
            overLay.appendChild(div);
            document.body.appendChild(overLay);
            let close = document.createElement("span");
            close.classList.add("close");
            close.append(document.createTextNode("X"));
            overLay.appendChild(close);
        });
    });
    document.addEventListener("click", (e) => {
            if (e.target.className == "close") {
                e.target.parentElement.remove();
            }
        })
        //////
    document.querySelector(".reset").onclick = () => {
            localStorage.removeItem("background");
            localStorage.removeItem("bullets");
            localStorage.removeItem("color");
            window.location.reload();
        }
        /////
        ////
    let projects = document.querySelector(".projects");
    let t = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY > projects.offsetTop - 500) {
            if (t === false) {
                time();
            }
            t = true;
        }
    });
    let projectN = document.querySelectorAll(".projects span:last-of-type");

    function time() {
        projectN.forEach((span) => {
            let set = setInterval(() => {
                span.innerHTML++
                    if (span.innerHTML == span.dataset.time) {
                        clearInterval(set);
                    }
            }, 100 / span.dataset.time);
        });
    }
    /////
    let up = document.querySelector(".up");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            up.style.display = "block";
        } else {
            up.style.display = "none";
        }
    });
    up.addEventListener("click", () => {
            window.scrollTo(0, 0);
        })
        ////
    let login = document.querySelector(".login");
    login.addEventListener("click", () => {
        let over = document.createElement("div");
        over.classList.add("over-login");
        document.body.appendChild(over);
        over.innerHTML =
            `
       <div class="box">
           <h3>Login</h3>
           <form action="">
               <div>User Name</div>
           <input type="text" name="name" placeholder="Your Name">
               <div>Password</div>
               <input type="password" name="password" placeholder="password">
               <span>Need Help ?</span>
           </form>
           <div class="login">Login <i class="fa-solid fa-arrow-right"></i></div>
       </div>
    `
        let span = document.createElement("span");
        span.classList.add("close");
        span.append(document.createTextNode("X"));
        over.appendChild(span);
    });
});




const feture = document.querySelector(".feture")
const skelis = document.querySelector(".skelis")
const timeLine = document.querySelector(".time-line")
const gallary = document.querySelector(".gallary")
const testimonials = document.querySelector(".testimonials")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")

window.addEventListener("scroll",()=>{
    if(window.scrollY > feture.offsetTop -700){
        feture.classList.add("section-up")
    }else{
        feture.classList.remove("section-up")
    }
    if(window.scrollY > skelis.offsetTop -700){
        skelis.classList.add("section-up")
    }else{
        skelis.classList.remove("section-up")
    }
    if(window.scrollY > timeLine.offsetTop -700){
        timeLine.classList.add("section-up")
    }else{
        timeLine.classList.remove("section-up")
    }
    if(window.scrollY > gallary.offsetTop -700){
        gallary.classList.add("section-up")
    }else{
        gallary.classList.remove("section-up")
    }
    if(window.scrollY > testimonials.offsetTop -700){
        testimonials.classList.add("section-up")
    }else{
        testimonials.classList.remove("section-up")
    }
    if(window.scrollY > about.offsetTop -700){
        about.classList.add("section-up")
    }else{
        about.classList.remove("section-up")
    }
    if(window.scrollY > contact.offsetTop -700){
        contact.classList.add("section-up")
    }else{
        contact.classList.remove("section-up")
    }
})