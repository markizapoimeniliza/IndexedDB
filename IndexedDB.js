
//it is better to create own server
// the browser DB

// no raltional DB - NOSQL


// 1 = create a inexedDB

// open and defined
//for transaction - variable should be DEFINED AND CLOSED

// var db = null

// let db

//'strict' by DEAFAULT IN MODULES + CLASSES
const btn = document.getElementById('btn')
const btn2 = document.getElementById('note')
const viewNote = document.getElementById('viewNotes')

// a = 5



btn.addEventListener('click', createDB)
btn2.addEventListener('click', addNote)
viewNote.addEventListener('click', viewNotes)

function viewNotes() {

    const tx = dtb.transaction("notes_personal","readonly")
    const pNotes = tx.objectStore("notes_personal")
    const request = pNotes.openCursor()

    request.onsuccess = e => {

        const cursor = e.target.result

        if (cursor) {
            alert(`Title: ${cursor.key} Text: ${cursor.value.text} `)
            //do something with the cursor
            cursor.continue()
        }
    }

}

function addNote(){
    //WE HAVE 'UNIQUE KEY CONSTRAINT!!!
    // let db = null
    // let db = indexedDB.open('notes_personal')
  

    const note = {
        title: 'notes' + Math.random(),
        text:  'my only peace'
    }

    const tx = dtb.transaction('notes_personal','readwrite')
    tx.onerror = e => {
        alert(`${e.target.error}`)
    }
    //add to ObjectStore - objectStore
    const pNotes = tx.objectStore('notes_personal')
    pNotes.add(note)

}



//API async
function createDB(){

const input1 = document.getElementById('db').value 
const input2 = document.getElementById('version').value      

//version starts FROM 1 NAME VERSION
const request = indexedDB.open(input1, input2)

request.onupgradeneeded = e => {
    //open the exisiting db
    //error - we created dtbase as a new variable 
    //be default GLOBAL
    dtb = e.target.result
    const pNotes = dtb.createObjectStore('notes_personal',{keyPath: 'title'})
    const toDo_List = dtb.createObjectStore('toDoList',{keyPath: 'title'})
    pNotes.createIndex('notes', 'notes', {unique: false})
    toDo_List.createIndex('list','list',{unique: false})
    alert(`upgrade version : ${dtb.version} and name of it: ${dtb.name}`)

}

request.onsuccess = e => {
    //by default GLOBAL
    dtb = e.target.result
    //CHECK PROPERTIES IN THE BROWSER
    alert(`success:  version: ${dtb.version} and name: ${dtb.name}`)    
}

request.onerror = e => {
    //e.target.error = default construction
    alert(`error ${e.target.error}`)
    // alert("error" + e.target.error)
}

// db.onblocked = (e) => {
//     alert('blocked')
// }
}


// function anc(){}

//CREATE ONLY IN UPGRADE!



//THE PROBLEM WAS WITH DB!
//TRY WITH CONST DB



  
