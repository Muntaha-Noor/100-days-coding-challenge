function make_sandwich(...items: string[]) {
    console.log(`Makin a sandwich with: ${items.join(", ")}`)
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "mayo");
make_sandwich("Peanut Butter", "Jelly", "Banana");