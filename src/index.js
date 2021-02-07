console.log("hello from there");

const fs = require('fs');
const path = require('path');
const inputFolder = 'input-bills';

fs.readdirSync(inputFolder).filter(f => path.extname(f) === ".json").forEach(file => {
    console.log(path.extname(file))
    const json = JSON.parse(fs.readFileSync(path.join(inputFolder, file), 'utf8'));
    console.log(json.length);
})