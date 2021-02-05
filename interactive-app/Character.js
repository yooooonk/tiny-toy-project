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
    this.lastScrollTop = 0;
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
            
            const key = {"ArrowLeft":'left', "ArrowRight":'right'}
            
            self.character.setAttribute('data-direction',key[e.key]);
        })

        
    }
}