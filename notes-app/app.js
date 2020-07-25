const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const notes = require('./notes');

// Customize yargs version

yargs.version('1.1.0');

// Create add Command 
yargs.command({ 
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    body:{
        describe:'Note Body',
        demandOption:true,
        type:'string'
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
});

// Create remove command 
yargs.command({ 
    command : 'remove',
    describe:'remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
     notes.removeNote(argv.title);
    }
});

// List the notes
yargs.command({
    command:'list',
    describe:'list your notes',
    handler(){
        notes.listNotes()
    }
});

//Read the notes
yargs.command({
    command: 'read',
    describe:'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
});

// add , remove , read , list
// console.log(yargs.argv);
yargs.parse();