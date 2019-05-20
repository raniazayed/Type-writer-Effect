

let txt = '';
let startindex = 0;
let deleted = false;
function typewriter(element,data){
  //index of data-show
  var txtindex = data[startindex];
  if(deleted){
  // remove char by char
    txt = txtindex.substring(0,txt.length-1)
   
  }else{
  // add char by char
  txt = txtindex.substring(0,txt.length + 1); 

  }
  // show element on browser
  element.innerHTML = `<span class="cursor">${txt}</span>`;
 
  //pause element
  if(!deleted&&txt===txtindex){
    deleted = true;
  }else if(deleted&&txt ==''){
    startindex++;
    if(startindex>=data.length){
      startindex=0
    }
    deleted = false
  }

  setTimeout(function(){
    typewriter(element,data)
  },400)
}
  document.addEventListener('DOMContentLoaded',getdata);
  // GET DATA 
  function getdata(){
    const header2 = document.getElementById('header2')
    const datashow =JSON.parse(header2.getAttribute('data-show'))
    console.log(datashow)
    // type writer
    typewriter(header2,datashow)

  }
