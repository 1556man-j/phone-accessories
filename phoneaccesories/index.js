var mainHide = document.getElementById('main-hid');
var mainHide1 = document.getElementById('main-hid1');
var mainHide2 = document.getElementById('main-hid2');
var hide1 = document.getElementById('hide1');
var hide2 = document.getElementById('hide2');
var hide3 = document.getElementById('hide3');

// for FAQ part
// mainHide.addEventListener('click', function(){
//     if (mainHide.src === 'down.png'){
//         document.getElementById('main-hid').src = 'up.png'
//         hide1.style.display = 'block';
//     }else{
//         mainHide.src = 'down.png'
//         hide1.style.display = 'none';
//     }
// })

// mainHide1.addEventListener('click', function(){
//     if (mainHide1.src === 'down.png'){
//         mainHide1.src = 'up.png'
//         hide2.style.display = 'block';
//     }else{
//         mainHide1.src = 'down.png'
//         hide2.style.display = 'none';
//     }
// })

// mainHide2.addEventListener('click', function(){
//     if (mainHide2.src === 'down.png'){
//         mainHide2.src = 'up.png'
//         hide3.style.display = 'block';
//     }else{
//         mainHide2.src = 'down.png'
//         hide3.style.display = 'none';
//         console.log(mainHide2.src)
//     }
// })

// for the filter and main body part
var clickFilter = document.getElementById("firs");
var mainBody = document.getElementById("fir");
var showBody = document.getElementById("second");
var navbar = document.getElementsByClassName("navbar")[0];
var footer = document.getElementsByClassName("footer")[0];

clickFilter.addEventListener("click", function(){
        mainBody.style.display = "none";
        showBody.style.display = "block";
        navbar.style.display = "none";
        footer.style.display = "none";
    
})

// close inside the filter
var close = document.getElementById("close");
close.addEventListener("click", function(){
    mainBody.style.display = "block";
    showBody.style.display = "none"
    navbar.style.display = "block";
    footer.style.display = "block";
})

// inside the filter
var hideMe = document.getElementById("filter-hide1");
var show = document.getElementById("show1");
var hideMe2 = document.getElementById("filter-hide2");
var show2 = document.getElementById("show2");
var hideMe3 = document.getElementById("filter-hide3");
var show3 = document.getElementById("show3");
var hideMe4 = document.getElementById("filter-hide4");
var show4 = document.getElementById("show4");
var hideMe5 = document.getElementById("filter-hide5");
var show5 = document.getElementById("show5");


show2.addEventListener("click", function(){
    if (hideMe2.style.display == "none") {
        hideMe2.style.display = "block"
        show2.classList.remove('fa-plus');
        show2.classList.add('fa-minus');
    } else {
        hideMe2.style.display = "none"
        show2.classList.add('fa-plus');
        show2.classList.remove('fa-minus');
    }
})
show3.addEventListener("click", function(){
    if (hideMe3.style.display == "none") {
        hideMe3.style.display = "block"
        show3.classList.remove('fa-plus');
        show3.classList.add('fa-minus');
    } else {
        hideMe3.style.display = "none"
        show3.classList.add('fa-plus');
        show3.classList.remove('fa-minus');
    }
})
show4.addEventListener("click", function(){
    if (hideMe4.style.display == "none") {
        hideMe4.style.display = "block"
        show4.classList.remove('fa-plus');
        show4.classList.add('fa-minus');
    } else {
        hideMe4.style.display = "none"
        show4.classList.add('fa-plus');
        show4.classList.remove('fa-minus');
    }
})
show5.addEventListener("click", function(){
    if (hideMe5.style.display == "none") {
        hideMe5.style.display = "block"
        show5.classList.remove('fa-plus');
        show5.classList.add('fa-minus');
    } 
    else {
        hideMe5.style.display = "none"
        show5.classList.add('fa-plus');
        show5.classList.remove('fa-minus');
    }
})
show.addEventListener("click", function(){
    if (hideMe.style.display == "none") {
        hideMe.style.display = "block"
        show.classList.remove('fa-plus');
        show.classList.add('fa-minus');
    } 
    else {
        hideMe.style.display = "none"
        show.classList.add('fa-plus');
        show.classList.remove('fa-minus');
    }
})

// clicking on the collection to ge highlighted
var all = document.getElementById('all');
var newPhones = document.getElementById('new-phones');
var preOwnedPhones = document.getElementById('pre-owned-phones');
var tabletsAll = document.getElementById('tablets-all');
var accessoriesAll = document.getElementById('accessories-all');

all.addEventListener('click', function(){
    all.classList.toggle('highlighted')
})
newPhones.addEventListener('click', function(){
    newPhones.classList.toggle('highlighted')
})
preOwnedPhones.addEventListener('click', function(){
    preOwnedPhones.classList.toggle('highlighted')
})
tabletsAll.addEventListener('click', function(){
    tabletsAll.classList.toggle('highlighted')
})
accessoriesAll.addEventListener('click', function(){
    accessoriesAll.classList.toggle('highlighted')
})

// for updating the price
function updatePrice(){
    var range = document.getElementById("price-range").value;
    var price = range * 10;
    document.getElementById("price").innerHTML = `${price} and  Above `;
    document.getElementById("price-update").innerHTML =` (\$${price} and  Above)`;
}
updatePrice()

// for choosing color
var white = document.querySelector(".white");
var black = document.getElementsByClassName("black")[0];

white.addEventListener("click", function(){
    white.classList.toggle("border-white");
})
black.addEventListener("click", function(){
    black.classList.toggle("border-black");
})
