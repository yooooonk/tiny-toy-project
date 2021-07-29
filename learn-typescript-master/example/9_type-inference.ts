var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}



interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}

<div id="app">hi</div>



var div = document.querySelector('div') 

if(div){
  div.innerText;
}




