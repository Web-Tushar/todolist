let inputbox = document.querySelector(".inputbox");
let addbtn = document.querySelector(".addbtn");
let error = document.querySelector(".error");
let main = document.querySelector(".main");

let libtn1 =document.querySelector(".libtn1")
let libtn3 =document.querySelector(".libtn3")

let libtn4 =document.querySelector(".libtn4")
let libtn5 =document.querySelector(".libtn5")
let libtn6 =document.querySelector(".libtn6")
let libtn7 =document.querySelector(".libtn7")
let libtn8 =document.querySelector(".libtn8")
let libtn9 =document.querySelector(".libtn9")
let libtn10 =document.querySelector(".libtn10")
let libtn12 =document.querySelector(".libtn12")
let libtn13 =document.querySelector(".libtn13")
let libtn14 =document.querySelector(".libtn14")
let libtn15 =document.querySelector(".libtn15")
let libtn16 =document.querySelector(".libtn16")
let libtn17 =document.querySelector(".libtn17")
let libtn18 =document.querySelector(".libtn18")
let libtn19 =document.querySelector(".libtn19")


let storetodo = []
let todoindex 


addbtn.addEventListener("click",function(){
     if(inputbox.value !== "" && addbtn.innerHTML == "Add") {
          storetodo.push(inputbox.value)
          error.innerHTML = ""
          inputbox.value = ""
          todo()  

     }
     else if(inputbox.value !== "" && addbtn.innerHTML == "Update") {
          storetodo[todoindex] = inputbox.value
          addbtn.innerHTML = "Add"
          inputbox.value = ""
          error.innerHTML = ""
          todo() 


     }

     else{
          error.innerHTML = "please enter a todo"
     }
})

function todo(){
     main.innerHTML = ""
     storetodo.map((item)=>{
          
          main.innerHTML += `<li>${item}  <button class="deletebtn">delete</button> <button class="editbtn">Edit</button></li>`

     })
     let editbtn = document.querySelectorAll(".editbtn");
     let editbtnarry = Array.from(editbtn);
     editbtnarry.map((edititem,editindex)=>{
          edititem.addEventListener("click",function(){
               addbtn.innerHTML = "Update"
          inputbox.value = storetodo[editindex]
          todoindex = editindex
          error.innerHTML = ""

               // console.log(edititem,editindex);
          })
     })
     let deletebtn = document.querySelectorAll(".deletebtn")
     let deletebtnArr = Array.from(deletebtn)
     deletebtnArr.map((deleteitem,deleteindex)=>{
          deleteitem.addEventListener("click",function() {
               storetodo.splice(deleteindex,1)
               todo()
          })
     })

}

libtn1.addEventListener("click",function(){
     inputbox.value = "wake up early"
})

libtn3.addEventListener("click",function(){
     inputbox.value = "drink water"
})

libtn4.addEventListener("click",function(){
     inputbox.value = "set daily goals"
})

libtn5.addEventListener("click",function(){
     inputbox.value = "exercise"
})

libtn6.addEventListener("click",function(){
     inputbox.value = "eat breakfast"
})

libtn7.addEventListener("click",function(){
     inputbox.value = "lern something new"
})

libtn8.addEventListener("click",function(){
     inputbox.value = "meditate"
})

libtn9.addEventListener("click",function(){
     inputbox.value = "Practice gratitude"
})

libtn10.addEventListener("click",function(){
     inputbox.value = "Clean the house"
})

libtn12.addEventListener("click",function(){
     inputbox.value = "Sleep"
})

libtn13.addEventListener("click",function(){
     inputbox.value = "stretch"
})

libtn14.addEventListener("click",function(){
     inputbox.value = "meal plan"
})

libtn15.addEventListener("click",function(){
     inputbox.value = "smile"
})

libtn16.addEventListener("click",function(){
     inputbox.value = "upgrade your morning routine"
})

libtn17.addEventListener("click",function(){
     inputbox.value = "avoid coffee"
})

libtn18.addEventListener("click",function(){
     inputbox.value = "avoid coffee"
})
libtn19.addEventListener("click",function(){
     inputbox.value = "avoid coffee"
})
