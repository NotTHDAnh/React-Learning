// 3 Funtions of a .js file for processing array
// // 1 only function have permission to export default
// other function can only have export
// export: public for other location, and in these place,  we'll have to import
// there's 2 ways to export, export default
// export right in the function
// export at the very bottom of file
function print(arr, fCallBack) {
    arr.forEach(fCallBack);
}

function map(arr, fCallback) {
    const res = [];
    arr.forEach(x => res.push(fCallback(x)));
    return res;
}

function filter(map, fCallback) {
    const res = []
    for (let i = 0; i < arr.length; ++i) {
        if (fCallback(arr[i]) === true) {
            res.push(arr[i]);
        }
    }
    return res;
}

print(map([2, 3, 4, 5, 6, 3], x => x + 1), x => console.log(x));

export default print;
