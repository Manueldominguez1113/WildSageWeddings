function parallaxDiv(){
    const fade1= document.getElementById("fade"),div1= document.getElementById("blank"), div1S= document.getElementById("blankS"), div1L= document.getElementById("blankL"), div2= document.getElementById("blank2"), div2L= document.getElementById("blank2L"), div3= document.getElementById("blank3"), div4= document.getElementById("blank4");

    var yPos= 0-window.scrollY/13;
    fade.style.top = 80+ yPos/2+"%";    
    div1S.style.top = -5+ yPos*0.8+"%";
    div1.style.top = -5+ yPos/2+"%";
    div1L.style.top = -5+ yPos*0.5+"%";
    div2.style.top = 170+ yPos*1.2+"%";
    div2L.style.top = 180+ yPos*0.8+"%";
    div3.style.top = 170+ yPos/3+"%";
    div4.style.top = 174+ yPos*1.2+"%";

}

// window.addEventListener("scroll",function(){
//     parallaxDiv();
// });
function importText(textFile) {
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("Get", textFile, false);
    rawFile.onreadystatechange = function()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function scrollDown(){
    document.getElementById("MoC").scrollIntoView({behavior: "smooth"});
}

function openNav(){
    var navmenu = document.getElementById("mNavMenu")
    const navToggle = 
    document.getElementById("mNav").querySelectorAll(".nav-burger").forEach(function(i){
        i.classList.toggle("nav-close")
    });

    if(navmenu.classList.contains("d-none")){
        navToggle;
        navmenu.classList.toggle("d-none");       
        setTimeout(()=>{
            navmenu.classList.toggle("closed-menu");
        },100);
    } else{
        navToggle;
        navmenu.classList.toggle("closed-menu");
        setTimeout(()=>{
            navmenu.classList.toggle("d-none");
        },100);
    }
    document.getElementById("mNav").querySelectorAll(".nav-burger").forEach(function(i){
        i.classList.toggle("nav-close")
    });
}

function popupImg(element){
    var src= element.src, modal=document.getElementById("modal"), modalImg= document.getElementById("modal-img");
    modal.style.display="flex";
    modalImg.src=src;
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}


function toTop(){
   window.scrollTo(0,0);
}

(function navFill(){
    var html="";
    html+='<div class="container-fluid px-md-3 py-0 position-relative secondary-ft">';
    html+='<div id="mNav" class="col-2 d-md-none main-color">';
    html+='    <div class="d-sm-none">';
    html+='        <img src="assets/webassets/icons8-nav.png" alt="navbar" class="nav-burger p-2" onclick="openNav()">';
    html+='        <img src="assets/webassets/icons8-circled-x-50.png" alt="close navbar" class="nav-burger nav-close p-2" onclick="openNav()">';
    html+='    </div>';
    html+='    <div class="d-none d-sm-inline-block">';
    html+='        <img src="assets/webassets/icons8-nav-75.png" alt="navbar" class="nav-burger p-2" onclick="openNav()">';
    html+='        <img src="assets/webassets/icons8-circled-x-75.png" alt="close navbar" class="nav-burger nav-close p-2" onclick="openNav()">';
    html+='    </div>';
    html+='</div>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./index.html">HOME</a>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./about.html">ABOUT</a>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./details.html">DETAILS</a>';
    html+='<a class="navbar-brand px-md-2 col-md-2 flex-md-fill d-none m-auto d-md-flex" href="./index.html"><img src="assets/webassets/mNavMenu-logo.png" alt="WildSageWeddingsLogo.png" class="py-4 logo m-auto" /></a>';
    html+='<a class="navbar-brand m-auto col-10 offset-1 d-md-none" href="./index.html"><img src="assets/webassets/mNavMenu-logo.png" alt="WildSageWeddingsLogo.png" class="mNav-Logo" /></a>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./portfolio.html" id="portfolio">PORT<span class="d-md-inline-block">FOLIO</span></a>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./journal.html">JOURNAL</a>';
    html+='<a class="navlink px-md-2 py-md-5 col text-reset d-md-inline-block d-none " href="./contact.html">CONNECT</a>';
    html+='<div id="mNavMenu" class="container-fluid main-color h-100 closed-menu d-none">';
    html+='    <div class=" row row-cols-1 text-center align-items-center d-md-none w-100 m-0">';
    html+='        <a onclick="openNav()" class="navlink py-3 col-12 text-reset " href="./index.html">HOME</a>';
    html+='        <a onclick="openNav()" class="navlink py-3 col-12 text-reset " href="./about.html">ABOUT</a>';
    html+='        <a onclick="openNav()" class="navlink py-3 col-12 text-reset " href="./details.html">DETAILS</a>';
    html+='        <a onclick="openNav()" class="navbar-brand mt-3 pt-5 pt-sm-3 pb-3 order-first"href="./index.html" ><img src="assets/webassets/mNavMenu-logo.png" alt="WildSageWeddingsLogo.png" class="mNav-Logo" /></a>';
    html+='        <a onclick="openNav()" class="navlink py-3 col-12 text-reset " href="./portfolio.html" id="portfolio">PORT<span class="d-md-inline-block">FOLIO</span></a>';
    html+='        <a onclick="openNav()" class="navlink py-3 col-12 text-reset " href="./journal.html">JOURNAL</a>';
    html+='        <a onclick="openNav()" class="navlink pt-3 pb-5 col-12 text-reset after-bar" href="./contact.html">CONNECT</a>';
    html+='        <div id="social-media" class="social-media navlink py-5 py-sm-4 mt-sm-1 col-12">';
    html+='            <a class="p-3 py-sm-4 px-sm-5 me-1 me-sm-0" href="https://www.facebook.com/profile.php?id=100076736864461" target="_blank"><img src="assets/webassets/icons8-facebook.png" alt="facebook"></a>';
    html+='            <a class="p-3 py-sm-4 px-sm-5 ms-1 ms-sm-0" href="https://www.instagram.com/wildsage_weddings/?fbclid=IwAR1fjMeeVuYH8a0QWqKTycbuHPPsziO9-oVBhXkNJlyv_3xZxroVF0e_hmo" target="_blank"><img src="assets/webassets/icons8-instagram.png" alt="instagram"></a>';
    html+='        </div>';
    html+='    </div>';
    html+='</div>';
    
    document.getElementById("nav").innerHTML = html;
    })();
    
(function footerFill(){
    var html = '<div class="row px-5 pt-5 mt-5 mx-auto">';
    html+= '    <a class="col-md-6 mb-5 mb-md-0" target="_blank" href="https://www.theknot.com/marketplace/redirect-2078614?utm_source=vendor_website&utm_medium=banner&utm_term=5a1459bb-cc50-4a6d-8f01-310509adfe69&utm_campaign=vendor_badge_assets">';
    html+= '        <img class="img-fluid col-sm-4 col-10" alt="As Seen on The Knot" src="https://d13ns7kbjmbjip.cloudfront.net/For_Your_Website/TK-badge_AsSeen.png">';
    html+= '    </a>';
    html+= '    <div class="col-md-6 my-5 my-md-0"><img src="assets/webassets/certf/CWPBadge.png" alt="certificate" class="img-fluid col-10 col-sm-4"></div>';
    html+= '</div>';
    html+= "<div class='col-md-4 col-12 order-2 order-md-1'>";
    html+= "<div id='social-media' class='social-media row justify-content-md-center justify-content-center mt-md-0 mt-3'>";
    html+= "    <a class='col-3 p-3' href='https://www.facebook.com/profile.php?id=100076736864461'  target='_blank'><img src='assets/webassets/icons8-facebook.png' alt='facebook'></a>";
    html+= "    <a class='col-3 p-3' href='https://www.instagram.com/wildsage_weddings/?fbclid=IwAR1fjMeeVuYH8a0QWqKTycbuHPPsziO9-oVBhXkNJlyv_3xZxroVF0e_hmo'  target='_blank'><img src='assets/webassets/icons8-instagram.png' alt='instagram'></a>";
    html+= "    <a class='col-3 p-3' onclick='toTop()'><img src='assets/webassets/icons8-up-arrow.png' alt='back to top'></a>            </div>";
    html+= "</div>    ";
    html+= "<img src='assets/webassets/logo(2).png' alt='logo' class='img-fluid col-md-3 col-12 p-md-3 px-5 order-1 order-md-2'>" ;
    html+= "<div id='email' class='col-md-4 col-12 text-break order-3 my-5 p1'><span class='d-inline-block'>INFO</span><span class='d-inline-block'>@WILDSAGE</span><span class='d-inline-block'>WEDDINGS</span><span class='d-inline-block'>.COM</span></div>";
    var copyright= "<div id='copyright' class='col-12 order-last second-color text-center p2'><span class='d-inline-block d-md-none'>&#8226</span> Site designed by <a href='https://manueldominguez1113.github.io/' class='text-reset'> Manuel Dominguez</a> <br class='d-inline-block d-md-none'>&#8226 Images courtesy/copyright of <a href='https://alyssaspiveyphoto.com/' class='text-reset'>Alyssa Spivey Photography</a> <br class='d-inline-block d-md-none'> &#8226 Icons by <a target='_blank' href='https://icons8.com' class='text-reset'>Icons8</a></div>";

    var footer = document.getElementById("footer");
    footer.innerHTML=html;
    footer.insertAdjacentHTML('afterend',copyright);

})();

function openTextModal(fileName){
    var modal=document.getElementById("modal");
    var modalContainer= document.getElementById("modal-content");
    var title= document.getElementById("modal-title");
    var date= document.getElementById("modal-date");
    var content= document.getElementById("modal-text");
    var card= document.getElementById(fileName);

    card.classList.toggle("open-card");
    setTimeout(()=>{
        modal.style.display="flex";
    }, 250);
    setTimeout(()=>{
        modalContainer.classList.add("card-fade-in");
    }, 300);


    $.get('/assets/blog/list.json').done((data) => {
        
        data.forEach((entry)=>{
            if(entry.fileName==fileName){        
                var folder = "/assets/blog/";
                var text = importText(folder+entry.fileName);
                text = text.replace(/\n/g, "<br>");
                title.innerHTML=entry.title;
                date.innerHTML=entry.date;
                content.innerHTML=text;

            }
        })
    })
} 
function closeTextModal(bool){
    var modal=document.getElementById("modal");
    var modalContainer= document.getElementById("modal-content");
    var title= document.getElementById("modal-title");
    var date= document.getElementById("modal-date");
    var content= document.getElementById("modal-text");
    var spinner='<div id="load" class="spinner-border" role="status"><span class="visually-hidden">Content is Loading...</span></div>';
    
    if(bool){
    modalContainer.classList.remove("card-fade-in");
    setTimeout(()=>{
        modal.style.display="none";
        document.querySelector(".open-card").classList.remove("open-card");
        title.innerHTML="Title "+spinner;
        date.innerHTML="Date: "+spinner;
        content.innerHTML="Content: "+spinner;    
    },250);
    }   


}


function contact(){

    var load = document.getElementById("load");
    var honeyBook = document.getElementById("honeybook-widget");

    (function(h,b,s,n,i,p,e,t) {
    h._HB_ = h._HB_ || {};h._HB_.pid = i;
    t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
    e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
    }
    )(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","654adf35e04dc4068e2c249e");

    function backup(){
    if(!load.classList.contains("d-none")){
    load.classList.toggle("d-none");
    }
    if(honeyBook.innerHTML.trim()==""){
        let html="<div id='formFail' class='mb-md-5 mb-0 mx-auto secondary-ft col-10 text-center px-5 pb-5 pt-3 p-md-0 p1 main-color rounded'>" +
        "form is taking a while to load.. please refresh the page, or click here!" +
        "</div>" +
        "<button id='contact' class='contactbtn my-5 col-8 p1 secondary-ft' onclick='alternate()'>Contact Us</button>";

        document.getElementById("paragraph2").innerHTML = html;
        document.getElementById("extra").classList.toggle("d-none");
        document.body.classList.toggle("second-color");
        document.body.classList.toggle("main-color"); 
    }
    }
    function halfCheck(){
    if(honeyBook.innerHTML.trim()==""){
        setTimeout(backup, 3000)
    } else{
        load.classList.toggle("d-none");
    }

    }

    function alternate(){
        window.open("https://www.honeybook.com/widget/wild_sage_weddings_265867/cf_id/654adf35e04dc4068e2c24a0?fbclid=IwAR1hRgi25YGbnq6XWM0v_DIgxbj9lejqa4K-rqNjxkjnY-yAz5P5i_NQelM","_blank")
    }

    window.setTimeout(halfCheck, 1500);
}

function portfolio(){
    var html="";
    var container = document.getElementById("portfolio-section");

    $.get('/assets/portfolio/list.json').done((data) => {
            data.reverse().forEach((image)=>{
                html+='<div class="item">';
                html+='<img src="assets/portfolio/'+image.fileName+'" alt="'+image.fileName+'" class="img-fluid" onclick="popupImg(this)">';
                html+='</div>';
            })
            container.innerHTML+= html + '<div class="item item--sizer" style="left: 0; z-index:-1;"></div>'; 
            var $items = html;
            imagesLoaded(container, ()=>{
                var msnry= new Masonry(container,{
                    itemSelector: '.item',
                    columnWidth: '.item--sizer',
                    percentPosition: true
                });
            })
        })
}

function journal(){
    closeTextModal(false);
    var journal= document.getElementById('journal');

    $.get('/assets/blog/list.json').done((data) => {
        var html=""
        var number=0;
        if(data.length==0){
            html="COMING SOON!"
            journal.innerHTML= html;
            return;
        }                
        data.reverse().forEach((entry)=>{
            var folder = "/assets/blog/";
            var text = importText(folder+entry.fileName);
            var smalltext= text.substring(0,50);
            var smallTitle= entry.title.substring(0,25);

            if(number==0){
                html+='<div class="container-fluid row mx-auto p-0 position-relative mb-5">';
                html+='<div class="card border-warning text-center p-0 transitionable" id="'+entry.fileName+'">';
                html+='  <div class="card-header main-ft fw-bold p1">';
                html+='    Featured';
                html+='  </div>';
                html+='  <div class="card-body">';
                html+='    <h5 class="card-title heading fancy">'+smallTitle;
                if(entry.title.length>25){
                    html+='...';
                }
                html+='</h5>';
                html+='    <p class="card-text main-ft p1">'+smalltext;
                if(text.length>50){
                    html+='...';
                }
                html+='</p>';
                html+='    <button onclick="openTextModal(\''+entry.fileName+'\')" class="contactbtn rounded">Read More</button>';
                html+='  </div>';
                html+='  <div class="card-footer main-ft p1">';
                html+='    '+entry.date+'';
                html+='  </div>';
                html+='</div>';
                html+='</div>';
            } else{
                if(number==1){
                    html+='<div class="row row-cols-md-3 row-cols-1 mx-auto px-2 pb-5 g-2 pt-3 justify-content-center">';
                }

                html+='<div class="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">';
                html+='<div class="card border-warning text-center p-0 transitionable" id="'+entry.fileName+'">';
                html+='  <div class="card-body">';
                html+='    <h5 class="card-title heading fancy">'+smallTitle;
                if(entry.title.length>25){
                    html+='...';
                }
                html+='</h5>';
                html+='    <h6 class="card-subtitle mb-2 main-ft p1">'+entry.date+'</h6>';
                html+='    <p class="card-text main-ft p1">'+smalltext;
                if(text.length>50){
                    html+='...';
                }
                html+='</p>';
                html+='    <button onclick="openTextModal(\''+entry.fileName+'\')" class="contactbtn rounded">Read More</button>';
                html+='  </div>';
                html+='</div>';
                html+='</div>';
            }
            number++;
        })
        journal.innerHTML= html; 
        if(number>1){
            journal.innerHTML+='</div>';
        }        
    })

}

function error404(){

    $.get('/assets/portfolio/list.json').done((data) => {
        const names = Object.keys(data);
        const randIndex = Math.floor(Math.random() * names.length)
        const randKey = names[randIndex]
        const image = data[randKey]

        html='<div class="col-10 mx-auto">';
        html+='<img src="assets/portfolio/'+image.fileName+'" alt="'+image.fileName+'" class="img-fluid" onclick="popupImg(this)">';
        html+='</div>';

        document.getElementById("error").innerHTML+= html; 
    })

}