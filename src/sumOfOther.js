module.exports = function sumOfOther(lal) {
    const result = lal.map((el, index) => lal.filter((el1, index1) => index !== index1).reduce((a,b)=> a + b, 0));
    return result;
}