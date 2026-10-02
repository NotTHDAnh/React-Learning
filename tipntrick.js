const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]


function map(arr, fCallBack) {
    const res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(fCallBack(arr[i]));
    }
    return res;
}

const fXX = (x) => x * x;
// console.log(map(arr, fXX));
const arrX2 = arr.map(x => x * 2);
// console.log(arrX2);

// print array not using for (let i) or consolelog(arr)
arr.filter(x => x % 3 === 0).forEach(x => console.log(x));
