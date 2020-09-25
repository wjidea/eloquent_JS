

for (let counter=0; counter <= 7; counter++){
    console.log('#'.repeat(counter))
}

// FizzBuZZ
for (let num=0; num<=100; num++){
    if (num%3==0 && num%5==0){
        console.log('FizzBuzz')
    } else if (num%3==0 && num%5!=0){
        console.log('Fizz')
    } else if (num%3!=0 && num%5==0){
        console.log('Buzz')
    }
}

chessSize = 16

for (let row=1; row <= chessSize; row++) {
    let rowStr = ''
    for (let col=1; col <= chessSize; col++) {
        if (row%2 != 0 && col%2 != 0){
            rowStr += ' '
        } else if (row%2 != 0 && col%2 == 0) {
            rowStr += '#'
        } else if (row%2 == 0 && col%2 != 0) {
            rowStr += '#'
        } else {
            rowStr += ' '
        }
    }
    console.log(rowStr)
}

