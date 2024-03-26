let idx=0;

function clearTask(id) {
    const getSecondDiv= document.querySelector('#show-tasks');
    getSecondDiv.removeChild(document.querySelector(`#task-${id}`));
}
function addToViewDiv(metaData) {
    const getSecondDiv= document.querySelector('#show-tasks');
       
    let name= document.createElement('p');
    let description= document.createElement('p');
    name.textContent= metaData.name;
    description.textContent= metaData.description;
    
    let markasDone=document.createElement('input');
    markasDone.setAttribute('type','button');
    markasDone.setAttribute('onclick', `clearTask(${idx})`);
    markasDone.setAttribute('value', 'Completed');

    let child= document.createElement('div');
    child.setAttribute('id',`task-${idx}`);
    child.appendChild(name);
    child.appendChild(description);
    child.appendChild(markasDone);
    
    getSecondDiv.appendChild(child);
    idx++;
}
function addTaskToView() {
    const getName= document.querySelector('#task-name');
    const getDescription= document.querySelector('#task-description');
    addToViewDiv({name: getName.value, description: getDescription.value});
}