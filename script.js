let addlist=document.querySelector("#update");
let list=document.querySelector("#list");



function rendorTable(){

        if(localStorage.getItem("toDoList")==null){
            jsonArray=[];
            localStorage.setItem("toDoList",JSON.stringify(jsonArray));
        }else{
            jsonlistStr=localStorage.getItem("toDoList");
            jsonArray=JSON.parse(jsonlistStr);
        } 
    let str="";
    jsonArray.forEach((element,index) => {
            str+=`
            <tr>
                <td>${index+1}</td>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><div id="delete" onclick="removed(${index})">Delete</div></td>
            </tr> `      
    });
    list.innerHTML=str;
}


function updatelist(){
    let tit=document.querySelector("#Title").value.trim();
    let desc=document.querySelector("#Disc").value.trim();
    if(tit!="" && desc!=""){
        if(localStorage.getItem("toDoList")==null){
            console.log("...updating list");
            jsonArray=[];
            jsonArray.push([tit,desc]);
            localStorage.setItem("toDoList",JSON.stringify(jsonArray));
        }else{
            jsonlistStr=localStorage.getItem("toDoList");
            jsonArray=JSON.parse(jsonlistStr);
            jsonArray.push([tit,desc]);
            localStorage.setItem("toDoList",JSON.stringify(jsonArray));
        } 
        rendorTable();
    }

    document.querySelector("#Title").value="";
    document.querySelector("#Disc").value="";  
}

function removed(indexitem){
    jsonlistStr=localStorage.getItem("toDoList");
    jsonArray=JSON.parse(jsonlistStr);
    jsonArray.splice(indexitem,1);
    localStorage.setItem("toDoList",JSON.stringify(jsonArray));
    rendorTable();
    console.log("deleted");

}
addlist.addEventListener("click",updatelist);

rendorTable();
