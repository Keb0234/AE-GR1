const arr = [1,2,3,4,5]

console.log(arr)

// arr.push(6);

// arr.pop();
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// arr.forEach(e1 => {
//     console.log(e1);

// })

const mappedValues = arr.map((e1, index) => {

    return e1 * 2;
});

console.log(mappedValues);