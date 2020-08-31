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

// change html title to add "DOM"
const title = document.querySelector('title')
title.textContent = ('Great Idea! DOM')

// add verbiage to links
const nav = document.querySelectorAll('a')
console.log(nav)

nav[0].textContent = ('Services')
nav[1].textContent = ('Product')
nav[2].textContent = ('Vision')
nav[3].textContent = ('Features')
nav[4].textContent = ('About')
nav[5].textContent = ('Contact')

// contents of h1
const h1 = document.querySelector('h1')
h1.textContent = ('DOM ${<br>} Is<br> Awesome')

// adding src to cta img
// need to get top section
const topSection = document.querySelector ('.cta')
console.log(topSection)

const topImg = topSection.querySelector('#cta-img')

topImg.src = 'img/header-img.png'

// add verbiage to button in cta class
const topButton = topSection.querySelector('button')
topButton.textContent = ('Get Started')

// access to main-content
const mainContent = document.querySelector ('.main-content')
console.log(mainContent)


// access to top in main
const topInMain = mainContent.querySelector ('.top-content')
console.log(topInMain)

// add verbiage to h4
const topH4s = topInMain.querySelectorAll ('h4')
console.log(topH4s)

topH4s[0].textContent = ('Features')
topH4s[1].textContent = ('About')

// add verbiage to p tags
const topPs = topInMain.querySelectorAll ('p')
console.log(topPs)

topPs[0].textContent = ('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
topPs[1].textContent = ('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')

//add image in middle of main content
const midImg = mainContent.querySelector ('.middle-img')
midImg.src = 'img/mid-page-accent.jpg'

//access to bottom content
const bottInMain = mainContent.querySelector('.bottom-content')

//add verbiage to bottom h4s
const bottH4s = bottInMain.querySelectorAll ('h4')
console.log(bottH4s)

bottH4s[0].textContent = ('Services')
bottH4s[1].textContent = ('Product')
bottH4s[2].textContent = ('Vision')


//add verbiage to bottom p tags
const bottPs = bottInMain.querySelectorAll ('p')
console.log(bottPs)

bottPs[0].textContent = ('Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
bottPs[1].textContent = ('Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
bottPs[2].textContent = ('Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')

//access to contact section

const contact = document.querySelector('.contact')

//add verbiage to h4

const contH4 = contact.querySelector ('h4')
console.log(contH4)

contH4.textContent = ('Contact')

//add verbiage to p tags in contact section
const contPs = contact.querySelectorAll ('p')
console.log(contPs)

contPs[0].textContent = ('123 Way 456 Steet <br> Somewhere USA')
contPs[1].textContent = ('1 (888) 888-8888')
contPs[2].textContent = ('sales@greatidea.io')

//access to footer

const footer = document.querySelector('footer')
footer.textContent = ('Copyright Great Idea! 2018')



// //#### Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = 'green'
}

