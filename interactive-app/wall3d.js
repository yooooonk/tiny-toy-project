(function(){
    const stage = document.querySelector('.stage');
    const house = document.querySelector('.house');
    const progressBar = document.querySelector('.progress-bar')
    const mousePos = {x:0, y:0};
    let maxScrollValue =  0; 

    const moveScreen = (scrollPer)=>{
        const zMove = scrollPer * 970-490
        house.style.transform = `translateZ(${zMove}vw)`        
    }

    const handleProgressBar = (scrollPer)=>{
        progressBar.style.width = `${scrollPer*100}vw`
    }

    const scrollHandler = (e)=>{
       const scrollPer = pageYOffset / maxScrollValue ;
       moveScreen(scrollPer);
       handleProgressBar(scrollPer);
    }

    

    window.addEventListener('scroll',scrollHandler);
    
    const resizeHandler = (e)=>{
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    
    window.addEventListener('resize',resizeHandler);
    resizeHandler();

    const mousemoveHandler = (e)=>{
        mousePos.x = -1 + (e.clientX/window.innerWidth)*2
        mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
        
        stage.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`        
    }
    
    window.addEventListener('mousemove', mousemoveHandler)

    // 캐릭터 생성 이벤트
    stage.addEventListener('click',createCharacter)

    function createCharacter(e){
        
        const xPos = (e.clientX)/window.innerWidth*100
                
        new Character({
            xPos
        });
    }



})()