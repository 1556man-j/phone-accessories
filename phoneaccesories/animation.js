//animation for images
document.addEventListener('DOMContentLoaded', function(){
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        })
    },{
        threshold: 0.5
    });
    const images = document.querySelectorAll('.picture');
    images.forEach(element => {
        observer.observe(element);
});
});

//for add-to-cart buttons
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => { 
        button.addEventListener('click', function(){
            button.classList.add('bounce');
            button.addEventListener('animationend', function(){
                button.classList.remove('bounce');
            },{once: true});
    } );
 });
})

//for more buttons
document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('.more');
    links.forEach((link, index) => { 
        let animationClass;
        if(index ===0){
            animationClass = 'slide-in';
        }else if(index ===1){
            animationClass = 'fade-in';
        }else if(index ===2){
            animationClass = 'zoom-in';
        }
        link.addEventListener('click', function(event){
            event.preventDefault();
            link.classList.add(animationClass);
            link.addEventListener('animationend', function(){
                window.location.href = link.getAttribute('href');
            },{once: true});
    });
 });
})

//for the slide-in-left footer
document.addEventListener('DOMContentLoaded', function(){
    const animatedElement = document.querySelectorAll('.con-left');
    const observerOptions = {
        threshold: 0
    };
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        })
    }, observerOptions);
    animatedElement.forEach(item => observer.observe(item));
});

//for the slide-in-right footer
document.addEventListener('DOMContentLoaded', function(){
    const animatedElement = document.querySelectorAll('.con-right');
    const observerOptions = {
        threshold: 0
    };
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        })
    }, observerOptions);
    animatedElement.forEach(item => observer.observe(item));
});