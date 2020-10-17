const dataArray = require('./rawData/dataArray.js').dataSet1;
const csvArray = require('./conversions/convertCSV.js').converted
const arrayMethods = require('./arrayMethods.js');

let users = {}
let sources = [dataArray, csvArray]

sources.map((source) => {
    source.forEach(record => {
        let isExistingUser = users[`${record.user}`] ? true : false

        if (!isExistingUser) {
            arrayMethods.addRecord(users, record)
        }
        else if (record.id == users[`${record.user}`].id ) {
            // do nothing
        }
        else if (!Object.keys(users[`${record.user}`].categories).includes(record.category)) {
            arrayMethods.addCategoryToRecord(users, record)
        }
        else if (Object.keys(users[`${record.user}`].categories).includes(record.category)) {
            arrayMethods.updateCategoryTotal(users, record)
        }
    });
})

// Output
let userTotals = Object.keys(users)

userTotals.forEach(user => {
    let name = user.charAt(0).toUpperCase() + user.slice(1)
    let categories = Object.keys(users[user].categories)
    let res = []
    for (let i=0; i<categories.length; i++) {
        res.push('£' + (users[user].categories[categories[i]]).toFixed(2) + ' on ' + categories[i])
    }
    console.log(res.length == 1 ? `${name} spent ${res[0]}` : `${name} spent ${res[0]} and ${res[1]}`)
})