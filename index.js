const gifts = [`teddy bear`, `drone`, `doll`]

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${[gifts[i]]} and added a bow!`)
        debugger
    }
    return gifts
}

wrapGifts(gifts)

const writeCards = (arr, eventName) => {
    return arr.map(name => name = `Thank you, ${name}, for the wonderful ${eventName} gift!`)
}

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    } 
}

countDown()