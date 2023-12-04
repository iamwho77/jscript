//             node index.js
// let newpara = document.createElement("p") ; 
// let newdiv  = document.createElement("div")
// let divtext = document.createTextNode("I am from div") ;
// newdiv.appendChild(divtext) ; 

// let doc = document.querySelector(".a") ;


// let text = document.createTextNode("I am the text node") ; 
// newpara.appendChild(text) ; 

// doc.appendChild(newpara ) ; 
// doc.appendChild(newdiv) ; 
let doc = document.querySelector(".a") ; 
let newpara= document.createElement("p") ; 
newpara.textContent= `One to Numb the heart.....
               Two to Ease the Pain..... 
              Three to clear your mind .....
             Forget all the pain` ; 


let div1 = document.createElement("div")
div1.textContent= " i m  divContent" ; 
doc.appendChild(div1)
doc.appendChild(newpara); 
doc.appendChild(div1) ; 

 








 
 

