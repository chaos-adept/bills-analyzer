console.log("hello from there");

const fs = require('fs');
const path = require('path');
const inputFolder = 'input-bills';

const billsParitions = fs.readdirSync(inputFolder).filter(f => path.extname(f) === ".json").map(file => {
    const json = JSON.parse(fs.readFileSync(path.join(inputFolder, file), 'utf8'));
    const bills = json.map(i => i.ticket.document.receipt);
    return bills;
});

console.log(billsParitions);