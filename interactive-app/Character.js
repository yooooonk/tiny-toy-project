function Character(){
    this.character = document.createElement('div')
    this.character.classList.add('character');
    this.character.innerHTML=`
        <div class="character-face-con">
                <div class="character-face face-front"></div>
                <div class="character-face face-back"></div>
        </div>`

    document.querySelector('.stage').appendChild(this.character);
}
