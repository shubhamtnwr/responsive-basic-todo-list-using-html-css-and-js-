let addBtn=document.querySelector('.add');
let input=document.querySelector('input');
let left=document.querySelector('.left');
let complete=document.querySelector('.complete');
let taskDiv=document.querySelector('.task-div')
let totalTaskPara=document.querySelector('.totaltasks');

let leftcnt=0;
let totaltask=0;
let h2Div=document.querySelector('.left');
addBtn.addEventListener('click',()=>{
    if(input.value.trim()===""){
        alert('huh , checking edge cases');
        return;
    }
    taskDiv.innerHTML+=` <div class="tasks">
                <div id="tasks-information">
                <div class="circle"></div>
                <p class="my-task">${input.value}</p>
                </div>
                <button class="delete">delete</button>
                <button class="edit">edit</button>
            </div>`
    input.value="";
    leftcnt++;
    left.innerHTML=leftcnt;
    totaltask++;
    totalTaskPara.innerHTML=totaltask;
});
let completecnt=0;
taskDiv.addEventListener('click',(event)=>{
    if(event.target.classList.contains('circle')){
        if(event.target.classList.toggle('completed')){
            if(leftcnt!=0){
                leftcnt--;
            }
            completecnt++;
            left.innerHTML=leftcnt;
            complete.innerHTML=completecnt;
            event.target.style.backgroundColor = 'green';
        }
        else{
            leftcnt++;
            if(completecnt!=0){
                completecnt--;
            }
            left.innerHTML=leftcnt;
            complete.innerHTML=completecnt;
            event.target.style.backgroundColor = 'gray';
        }
    }
})
taskDiv.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete')){
        let parent=event.target.parentElement;
        let circleclasscheck=parent.querySelector('.circle');
        if(circleclasscheck.classList.contains('completed')){
            completecnt--;
            complete.innerHTML=completecnt;
        }
        else{
            leftcnt--;
            left.innerHTML=leftcnt;
        }
        parent.innerHTML=""
        parent.remove();
        totaltask--;
        totalTaskPara.innerHTML=totaltask;
    }
})
taskDiv.addEventListener('click',(event)=>{
   if(event.target.classList.contains('edit')){
        let parent = event.target.parentElement;
        let para = parent.querySelector('p');
        let input = document.createElement('input');
        input.value = para.innerText;
        para.replaceWith(input);
        let saveBtn = document.createElement('button');
        saveBtn.textContent = "save";
        saveBtn.classList.add('save');
        event.target.replaceWith(saveBtn);
    }
    if(event.target.classList.contains('save')){
        let parent = event.target.parentElement;
        let para=document.createElement('p');
        let input=parent.querySelector('input');
        para.textContent=input.value;
        input.replaceWith(para);
        let editbtn=document.createElement('button');
        editbtn.textContent='edit';
        editbtn.classList.add('edit');
        event.target.replaceWith(editbtn);
    }
})