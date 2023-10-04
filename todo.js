function add(){
    var inputElement = document.getElementById('input')
    var ulElement = document.getElementById('ul')
    var liElement = document.createElement('li')
    liElement.id = 'total-list'

    ulElement.append(liElement)

    
    var delbtn = '<button onclick="del(event)" class="delete-btn">Delete</button>'
    
    var editbtn = '<button onclick="edit(event)" class="edit-btn">Edit</button>'
    liElement.innerHTML = '<span id="list">' + inputElement.value + '</span>' + editbtn + delbtn 


    inputElement.value = ''
}
function del(e){
    var liElement = e.target.parentElement
    liElement.remove()
   
}

function edit(a){
    var inputElement = document.getElementById('input')
    var editElement = a.target.previousSibling

    inputElement.value = editElement.innerHTML 

    var updatebtn = document.getElementById('update')
    var addbtn = document.getElementById('add')
    updatebtn.className = 'add'
    addbtn.className = 'update'

   
}

function update(){
    var inputElement = document.getElementById('input')
    var list = document.getElementById('list')
    list.innerHTML = inputElement.value
    inputElement.value = '' 
   
    var updatebtn = document.getElementById('update')
    var addbtn = document.getElementById('add')
    updatebtn.className = 'update'
    addbtn.className = 'add'
}

function clr(){
    var liElement = document.getElementById('ul')
    liElement.innerHTML = ''
}