function add(){
    var inputElement = document.getElementById('input')
    var ulElement = document.getElementById('ul')
    var liElement = document.createElement('li')

    ulElement.append(liElement)
    
    var delbtn = '<button>Delete</button>'
    
    var editbtn = '<button>Edit</button>'
    liElement.innerHTML = '<span>' + inputElement.value + '</span>' + delbtn + editbtn

console.log(delbtn)
    inputElement.value = ''
}