function Character(info){
    this.character = document.createElement('div')
    this.character.classList.add('character','stop');
    
    this.character.innerHTML=`
        <div class="character-face-con character-head" >
                <div class="character-face character-head-face face-front"></div>
                <div class="character-face character-head-face face-back"></div>
        </div>` 

    

    document.querySelector('.stage').appendChild(this.character);

    this.character.style.left = `${info.xPos-8}%`;
    
    this.scrollState = false;
    this.runningState = false;
    this.lastScrollTop = 0;
    this.xPos = info.xPos;
    this.speed = info.speed;
    
    this.direction ;
    this.frameId ;
    this.init();
}

Character.prototype = {
    construct : Character,
    init : function(){
        const self = this;
        window.addEventListener('scroll',function(){
            clearTimeout(self.scrollState);

            if(!self.scrollState){
                self.character.classList.remove('stop');
                self.character.classList.add('moving');
                
            }

            self.scrollState = setTimeout(()=>{
                self.scrollState = false;
                self.character.classList.remove('moving');
                self.character.classList.add('stop');
            },300)            
            
            if(self.lastScrollTop < pageYOffset){ // forward
                self.character.setAttribute('data-direction','forward');
                
            }else{ //backward
                self.character.setAttribute('data-direction','backward');
                
            }
            
            self.lastScrollTop = pageYOffset;
            
        });
        window.addEventListener('keydown',function(e){
            

            if(self.runningState) return;
            
            const key = {"ArrowLeft":'left',
                                 "ArrowRight":'right'}

            self.direction = key[e.key]

            if(!self.direction) return ;

            
            self.character.setAttribute('data-direction',self.direction);
           
            self.character.classList.remove('stop');
            self.character.classList.add('moving');

            self.run(self);
            self.runningState = true;
        });

        window.addEventListener('keyup',(e)=>{
            if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
                self.character.classList.remove('moving');
                self.character.classList.add('stop');
                cancelAnimationFrame(self.frameId)
                self.runningState = false;
            }
        });        
    },
    run:function(self){

        if(self.direction === 'left'){
            self.xPos += self.speed*-1
        }else{
            self.xPos += self.speed
        }
        
        if(self.xPos <= 2){
            self.xPos = 2;
        }

        if(self.xPos>=80){
            self.xPos = 80;
        }

        self.character.style.left = `${self.xPos}%`;

        self.frameId = requestAnimationFrame(()=>{
            self.run(self)
        }) 
    }
}