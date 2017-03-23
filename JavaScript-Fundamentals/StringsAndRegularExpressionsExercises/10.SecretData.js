function main(inputArr) {
    let regexName = /\*[A-Z][A-Za-z]*(?=\s|$)/g
    let regexPhone = /\+[0-9-]{10}(?=\s|$)/g
    let regexId = /![a-zA-Z0-9]+(?=\s|\t|$)/g
    let regexBase = /_[0-9A-Za-z]+(?=\s|$)/g

    for (let line of inputArr) {
        console.log(line
            .replace(regexName, m => '|'.repeat(m.length))
            .replace(regexPhone, m => '|'.repeat(m.length))
            .replace(regexId, m => '|'.repeat(m.length))
            .replace(regexBase, m => '|'.repeat(m.length))
        )
    }
}
