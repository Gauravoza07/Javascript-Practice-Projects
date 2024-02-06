//for Loop Statement
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 1; i < 10;i++) {
    console.log(`Outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop values ${j}`)
        console.log(`${i} * ${j}  = ${i*j}`)        
    }
}

//Array in loop
const arr = ["Superman","Spiderman","Batman"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
    
//keywords in loop (break,continue)

for (let i = 1; i < 20; i++) {
    if(i==5)
    {
        console.log("5 number is detected")
        break
    }
    console.log(`Values are : ${i}`)
}

for (let i = 1; i < 20; i++) {
    if(i==5)
    {
        console.log("5 number is detected")
        continue
    }
    console.log(`Values are : ${i}`)
}