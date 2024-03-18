let magicians: string[] = ["Luna", "Mirage","Merlin"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: any[] = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
     return greatMagicians;
}

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);

