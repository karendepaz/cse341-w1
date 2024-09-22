const awesomeFunction = (req, res, next) => {
    res.json('Christian De Paz');
};

const anotherPerson = (req, res, next) => {
    res.json('Another person')
}

module.exports = { awesomeFunction, anotherPerson };