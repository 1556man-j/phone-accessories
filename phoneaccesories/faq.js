var mainHide = document.getElementById('main-hid');
var mainHide1 = document.getElementById('main-hid1');
var mainHide2 = document.getElementById('main-hid2');
var hide1 = document.getElementById('hide1');
var hide2 = document.getElementById('hide2');
var hide3 = document.getElementById('hide3');

// for FAQ part
 mainHide.addEventListener('click', function(){
     if (mainHide.classList.contains('fa-chevron-down')){
         mainHide.classList.remove('fa-chevron-down');
         mainHide.classList.add('fa-chevron-up');
         hide1.style.display = 'block';
     }else{
        mainHide.classList.add('fa-chevron-down');
        mainHide.classList.remove('fa-chevron-up');
         hide1.style.display = 'none';
    }
 })

 mainHide1.addEventListener('click', function(){
     if (mainHide1.classList.contains('fa-chevron-down')){
         mainHide1.classList.remove('fa-chevron-down');
         mainHide1.classList.add('fa-chevron-up');
         hide2.style.display = 'block';
     }else{
        mainHide1.classList.add('fa-chevron-down');
        mainHide1.classList.remove('fa-chevron-up');
         hide2.style.display = 'none';
   }
 })

 mainHide2.addEventListener('click', function(){
     if (mainHide2.classList.contains('fa-chevron-down')){
         mainHide2.classList.remove('fa-chevron-down');
         mainHide2.classList.add('fa-chevron-up');
         hide3.style.display = 'block';
     }else{
        mainHide2.classList.add('fa-chevron-down');
        mainHide2.classList.remove('fa-chevron-up');

         hide3.style.display = 'none';
         console.log(mainHide2.src)
    }
 })