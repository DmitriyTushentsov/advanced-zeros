module.exports = function getZerosCount(number, base) {
    let tempBase = base;
    let tempNumber = number;
    let obj = {};
    let result = 0;
    let dividersSumm = 0;
    for (let i = 2; i <= tempBase; i++) {
        dividersSumm = 0;
        tempNumber = number;
        if (tempBase % i === 0) {
            while (tempNumber > i) {
                dividersSumm += Math.floor(tempNumber /= i);
            }
            obj[dividersSumm] = obj[dividersSumm] ? obj[dividersSumm] = obj[dividersSumm] + 1 : 1;
            tempBase = tempBase / i;
            i--;
        }
    }
    for (let key in obj) {
        result = result ? Math.min(result, Math.floor(key / obj[key])) : Math.floor(key / obj[key]);
    }
    return result;

};