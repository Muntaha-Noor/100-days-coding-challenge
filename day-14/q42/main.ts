let magicians: string[] = ["Luna", "Mirage","Merlin"];

function show_magicians(magicians:string[]) {
    for( let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    for( let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians);
show_magicians(magicians);

export {}