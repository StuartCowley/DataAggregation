function Record (id, category, transaction) {
    this.id = id
    this.categories = {}
    this.categories[`${category}`] = transaction
}

const formatAmount = rec => {
    return rec.transactionAmount == '-' ? 0 : rec.transactionAmount
}

const addRecord = (repo, record) => {
    let amount = formatAmount(record)
    repo[`${record.user}`] = new Record(record.id, record.category, amount)
}

const addCategoryToRecord = (repo, record) => {
    let amount = formatAmount(record)
    repo[`${record.user}`].categories[`${record.category}`] = amount
}

const updateCategoryTotal = (repo, record) => {
    let amount = formatAmount(record)
    repo[`${record.user}`].categories[`${record.category}`] += amount
}

module.exports = {
    formatAmount,
    addRecord,
    addCategoryToRecord,
    updateCategoryTotal,
}