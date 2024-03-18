function Hobbies(...hobbies: string[]){
  for(let hobby of hobbies) {
    console.log(`I enjoy ${hobby}.`)
  }
}

Hobbies("reading", "coding", "playing");