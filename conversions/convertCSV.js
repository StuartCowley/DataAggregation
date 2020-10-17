const csvArray = require('../rawData/dataCSV.js').dataSet2;

const convert = () => {
    let csvUsers = []
    let convertedCsvRecords = csvArray.split('\r\n').slice(1, -2)
    
    convertedCsvRecords.forEach( el => {
        let info = el.split(',')
        let csvDataTemplate = {
            id: info[1],
            user: info[2].toLowerCase(),
            transactionAmount: Number(info[0]),
            category: info[3] == 'drinks' ? 'drink' : info[3] == 'misc' ? 'other' : info[3],
        }
        csvUsers.push(csvDataTemplate)
    })
    return csvUsers
}

const converted = convert()

module.exports = {
    converted
}