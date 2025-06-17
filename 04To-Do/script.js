let AddWork=document.getElementById("Add")
let TaskList=document.getElementById("TaskList")

AddWork.addEventListener("click",function(){
console.log(TaskList);
        
        let taskInput=document.getElementById("Input");
        if(taskInput.value.trim()==""){ 
            alert("Add some task")
            return;
        }
        
       
        let NewList=document.createElement("li")
        
        let List=TaskList.appendChild(NewList)

         
         let NewDiv=document.createElement("div")
         NewDiv.classList.add("description")
        
        let Div=List.appendChild(NewDiv)
        
        
        let NewImg=document.createElement("img")
        NewImg.classList.add("Checkbox")
        NewImg.src="circle.png"

        
        Div.appendChild(NewImg)
        
        let para=document.createElement("p")
        para.classList.add("Task")
        
        para.textContent=taskInput.value
        
         Div.appendChild(para)

         
         let deleteButton=document.createElement("button")
         deleteButton.classList.add("delete")
         deleteButton.textContent="X"



        List.appendChild(deleteButton)
        
        taskInput.value="";


        
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
        
        deleteButton.addEventListener("click",function(){
            deleteButton.parentElement.remove()
        })
})

