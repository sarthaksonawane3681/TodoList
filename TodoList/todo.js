let ToDoList=JSON.parse(localStorage.getItem('Todolist'))||[];
const getlist=document.querySelector('.Rin');
   droplist();


function added(){
    const addtask= document.querySelector('.writetask');
    let name= addtask.value;
    if(name===''){
        return alert(`Please add the Task`);
    };
    ToDoList.push(name);
    addtask.value="";
    localStorage.setItem('Todolist',JSON.stringify(ToDoList));

    setTimeout(function() {
    location.reload();
    },1)

}
function droplist(){
    let viewlist=getlist;
   for(let i=0;i<ToDoList.length;i++){

    viewlist.innerHTML=viewlist.innerHTML+ `<p>${ToDoList[i]}</p>
            <button onclick="deleteTask(${i})">Delete</button>`
   }
}


    function deleteTask(i){
            ToDoList.splice(i,1);
            console.log(ToDoList);
            localStorage.setItem('Todolist',JSON.stringify(ToDoList))
          setTimeout(()=>{
            location.reload();
          },1)
    }

