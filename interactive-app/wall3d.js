(function(){
    
    const house = document.querySelector('.house');
    let maxScrollValue =  0; 

    const scrollHandler = (e)=>{
       const zMove = (pageYOffset / maxScrollValue * 970)-490
       house.style.transform = `translateZ(${zMove}vw)`
        
    }

    window.addEventListener('scroll',scrollHandler);
    
    const resizeHandler = (e)=>{
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    
    window.addEventListener('resize',resizeHandler);
    resizeHandler();
})()