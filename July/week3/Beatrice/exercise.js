//for loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//while loop
let count = 2;
while (count <= 10) {
    console.log(count);
    count += 2;
}

// do...while loop
x = 1;
do {
    console.log(x);
    x += 2;
} while(x <= 10);

// break & continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}

// nested loops
for (let i = 1; i <= 3; i++) {
    let line = "";
    for(let j = 1; j <= 3; j++) {
        line += i;
    }
    console.log(line);
}