module.exports = function make(...args) {
    
    const convertToSimpleArray = (array) => {
        let res = [];
        for (let i = 0; i < array.length; i += 1) {
            if (!Array.isArray(array[i])) {
                res.push(array[i]);
            } else {
                res = res.concat(convertToSimpleArray(array[i]));
            }
        }
        return res;
    };

    let store = convertToSimpleArray(args);
    function f(...arg) {
        if (typeof arg[0] === "function") {
            return store.length === 0 ? '' : store.slice(1).reduce((res, el) => arg[0](res, el), store[0]);
        }
        store = store.concat(convertToSimpleArray([...arg]));
        return f;
    }
    return f;
};
