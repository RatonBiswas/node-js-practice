const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {

    const notes = loadNotes();

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title===title;
    // });
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note)=> note.title===title)

    debugger

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Notes added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

const removeNote = (title) => {
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold('Removing Data......'));
    } else {
        console.log(chalk.red.inverse('No title found in this title. Please try valid title!'));
    }
}

const listNotes = () => {

    const notes = loadNotes();

    console.log(chalk.inverse('your Notes List'));
    var i =0;
    notes.forEach((note)=>{
        console.log(1+i++ +':'+note.title);
    })
}

const readNotes = (title) => {
    
    const notes = loadNotes();
    
    // console.log(chalk.green.inverse('Read all notes'))

    const note = notes.find((note)=>note.title === title)

    if(note){
        console.log(chalk.bold.inverse('Title : '+note.title))
        console.log('Body : '+note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
};