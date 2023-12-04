//             node index.js
// let newpara = document.createElement("p") ; 
// let newdiv  = document.createElement("div")
// let divtext = document.createTextNode("I am from div") ;
// newdiv.appendChild(divtext) ; 

// let doc = document.querySelector(".a") ;
let t= `One to Numb the heart.....
Two to Ease the Pain..... 
Three to clear your mind .....
Forget all the pain
Take as I advise 
Not more than I prescribed ` ; 
console.log(t);



 let doc = document.querySelector(".a") ; 
//  let newpara= document.createElement("p") ; 

// newpara.textContent = t ;
// doc.appendChild(newpara ) ;
// let childele= document.querySelector("p")  ;
// doc.removeChild(childele)

// let doc = document.querySelector(".a") ; 
// doc.style.backgroundColor = "red" 



//  doc.setAttribute("id" , "my");

// let div = document.createElement("div") ; 
// div.classList.add("loop")
// doc.appendChild(div)


// function allert(){
//     alert("hello");
// }
doc.style.backgroundColor = "gray" ;
// doc.addEventListener('click' ,allert)
// doc.removeEventListener('click',allert) ; 


// let links  = document.querySelector(".like") ; 
// links.addEventListener('click', function(event) {
//     event.preventDefault() ; 
//     console.log("its prevented");
// })


//  
// function para (event) {
//     console.log("para : " + event.target.textContent);
// }
// doc.addEventListener('click', para) 
// for(let  i= 0 ; i< 40 ; i++ ) {
//      let newele = document.createElement("p") ; 
//      newele.textContent = " i am para no. " + i ; 
//      doc.appendChild(newele)

// }
//  document.body.appendChild(doc) ; 
doc.addEventListener('click' , function(event) {
     if(event.target.nodeName === 'para' ) 
      { 
        console.log("cliked on para" + event.target.texContent) ; 
      }
})
  
  





 


 








 
 

