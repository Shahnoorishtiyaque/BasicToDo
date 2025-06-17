let AddWork=document.getElementById("Add")
let TaskList=document.getElementById("TaskList")

AddWork.addEventListener("click",function(){
console.log(TaskList);
        
        let taskInput=document.getElementById("Input");
        if(taskInput.value.trim()==""){  //trim() is use to remove extra space from starting and end
            alert("Add some task")
            return;
        }
        
        //create a list
        let NewList=document.createElement("li")
        //add in ul
        let List=TaskList.appendChild(NewList)

         //create a div
         let NewDiv=document.createElement("div")
         NewDiv.classList.add("description")
        //  add in li
        let Div=List.appendChild(NewDiv)
        
        //create a img
        let NewImg=document.createElement("img")
        NewImg.classList.add("Checkbox")
        NewImg.src="circle.png"

        //add it to div
        Div.appendChild(NewImg)
        //create a p
        let para=document.createElement("p")
        para.classList.add("Task")
        //add TaskInput to para
        para.textContent=taskInput.value
         //add it to Div
         Div.appendChild(para)

         //create a delete button
         let deleteButton=document.createElement("button")
         deleteButton.classList.add("delete")
         deleteButton.textContent="DELETE"

         //add it to List

        List.appendChild(deleteButton)
        
        taskInput.value="";


        //give click functionality to checkbox
        NewImg.addEventListener("click",function(){
           if (NewImg.src.includes("circle.png")) {
             console.log("Clicked");
            NewImg.src="checked.png"
            para.classList.add("cut")
           }else{
            NewImg.src="circle.png"
            para.classList.remove("cut")
           }
        })
        //give  click function to detele button
        deleteButton.addEventListener("click",function(){
            deleteButton.parentElement.remove()
        })
})

