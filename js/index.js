const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let topImg = document.getElementById("cta-img");
topImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navBar = document.querySelectorAll('nav a');
navBar[0].innerHTML = siteContent.nav['nav-item-1'];
navBar[1].innerHTML = siteContent.nav['nav-item-2'];
navBar[2].innerHTML = siteContent.nav['nav-item-3'];
navBar[3].innerHTML = siteContent.nav['nav-item-4'];
navBar[4].innerHTML = siteContent.nav['nav-item-5'];
navBar[5].innerHTML = siteContent.nav['nav-item-6'];
navBar.forEach(function(item){
  item.style.color = 'green'
})
let navI = document.querySelector('nav')
//sets variable to the nav
let newNav = document.createElement('a')
//makes new anchor element to use .prepend on
let newLastNav = document.createElement('a')
//makes new anchor element to use .appendChild on

navI.prepend(newNav);
navI.appendChild(newLastNav);




let bigStuff = document.querySelector('.cta-text h1');
bigStuff.innerHTML = siteContent.cta['h1']

let bigButton = document.querySelector('.cta-text button');
bigButton.innerHTML = siteContent.cta['button']

let textTitle = document.querySelectorAll('.text-content h4');
textTitle[0].innerHTML = siteContent['main-content']["features-h4"]
textTitle[1].innerHTML = siteContent['main-content']["about-h4"]
textTitle[2].innerHTML = siteContent['main-content']["services-h4"]
textTitle[3].innerHTML = siteContent['main-content']["product-h4"]
textTitle[4].innerHTML = siteContent['main-content']["vision-h4"]

let textWord = document.querySelectorAll('.text-content p');
textWord[0].innerHTML = siteContent['main-content']["features-content"]
textWord[1].innerHTML = siteContent['main-content']["about-content"]
textWord[2].innerHTML = siteContent['main-content']["services-content"]
textWord[3].innerHTML = siteContent['main-content']["product-content"]
textWord[4].innerHTML = siteContent['main-content']["vision-content"]

let contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = siteContent['contact']['contact-h4']

let contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = siteContent['contact']['address']
contactText[1].innerHTML = siteContent['contact']['phone']
contactText[2].innerHTML = siteContent['contact']['email']

let foot = document.querySelector('footer');
foot.innerHTML = siteContent['footer']['copyright']