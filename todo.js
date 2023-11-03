let btn=document.querySelector("button");
let ul=document.querySelector("#to-do-box");
let inp=document.querySelector("#item");
let d=document.querySelector(".d");

btn.addEventListener("click",()=>{
    //console.log("click");
    if(inp.value != ""){
        item=document.createElement("li");
    item.innerText=inp.value;
    delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    item.appendChild(delbtn);

    div=document.createElement("div");
    div.classList.add("d");
    div.appendChild(delbtn);
    //console.log(div);

    item.appendChild(div);

    ul.appendChild(item);
    inp.value="";
    }
    
})


ul.addEventListener("click",(event)=>{
    //console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
       let list1=event.target.parentElement;
       let list=list1.parentElement;
       list.remove();
    }
})

// delbtn=document.querySelectorAll(".del");

// for(db of delbtn){
//     db.addEventListener("click",()=>{
//         let par=db.parentElement;
//         let parent=par.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }