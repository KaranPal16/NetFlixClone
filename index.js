const subBoxList = document.querySelectorAll('.subBox');

subBoxList.forEach( item =>{
  const ques =item.querySelector('.que')
  const ans = item.querySelector('.para')
  ques.addEventListener('click', ()=>{
    for( var i=0;i< subBoxList.length;i++){
      if(subBoxList[i]!= item){
        subBoxList[i].classList.remove('active')
      }
      else{
        item.classList.toggle('active')
      }
    }
   
  });
});