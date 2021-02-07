const fs = require('fs');
const path = require('path');
const inputFolder = 'input-bills';

const billsParitions = fs.readdirSync(inputFolder).filter(f => path.extname(f) === ".json").map(file => {
    const json = JSON.parse(fs.readFileSync(path.join(inputFolder, file), 'utf8'));
    const bills = json.map(i => i.ticket.document.receipt);
    return bills;
}).reduce((a, b) => a.concat(b));

const items = billsParitions.map(bills => bills.items).reduce((a, b) => a.concat(b))
console.log(items.map(i => i.name));