//  let btn =document.querySelectorAll('.btn1');
// console.log(btn)
let tab=Array.from(document.querySelectorAll('.btn1'));


// let btn3 =document.querySelectorAll('.btn2');
// console.log(btn3)
 let tab2=Array.from(document.querySelectorAll('.btn2'));

// tab2.ForEach (el=>(el)
for (let i=0;i<tab2.length;i++){
tab2[i].addEventListener('click',function(){
    var v= tab2[i].previousElementSibling
      v.innerHTML-=1;

    let child2=tab2[i].parentElement.nextElementSibling.firstElementChild;
    console.log(child2);
      let k1=Number(child2.innerHTML);
        // child2.innerHTML-=20;

        let par=tab[i].parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
        console.log(par);
        
        let p=Number(par.innerHTML);
       
        if(p>0) {
          p-=k1;
          par.innerHTML=p;

        }            
})

}

// tab.forEach(el => el)
for (let i=0;i<tab.length;i++){
    tab[i].addEventListener('click',function(){
        var va=tab[i].nextElementSibling;
        let s=Number(va.innerHTML);
        s+=1;
        va.innerHTML=s;
        

       let child=tab[i].parentElement.nextElementSibling.firstElementChild;
        // console.log(child);

         let k=Number(child.innerHTML);
        //  k+=30;
        //  child.innerHTML=k;

         let par=tab[i].parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
        console.log(par);
        let p=Number(par.innerHTML);
            p+=k;
            par.innerHTML=p;
        
     }) 

    }   
       let tabbb=Array.from(document.querySelectorAll('.fa-heart'));
       console.log(tabbb)   
       for (let i=0;i<tabbb.length;i++){
        tabbb[i].addEventListener('click',function(){    
         tabbb[i].classList.toggle('fab');
                             
        });
  
       }

       let tabs=Array.from(document.querySelectorAll('.fa-times'));
     for(let i=0;i<tabs.length;i++){
      tabs[i].addEventListener('click',function(){
        console.log(i);
        let supp=document.querySelector('.row');
        supp.remove();

       })
     

     }
      
       



    