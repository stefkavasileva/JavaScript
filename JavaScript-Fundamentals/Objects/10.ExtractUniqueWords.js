function main(input) {
    let wordPattern = /\b[a-zA-Z0-9_]+\b/g;
    let set = new Set();
    for (let sentence of input) {
        let matches = sentence.match(wordPattern);
        matches.forEach(w => set.add(w.toLowerCase()));
    }
    console.log(Array.from(set.values()).join(", "));
