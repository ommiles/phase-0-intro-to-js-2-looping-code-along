const gifts = [`teddy bear`, `drone`, `doll`]

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${[gifts[i]]} and added a bow!`)
        debugger
    }
    return gifts
}

wrapGifts(gifts)

const names = [`Ada`, `Brendan`, `Ali`]
const typeOfGift = `birthday`

function writeCards(names, typeOfGift) {
    for ( let i=0; i < names.length; i++) {
        console.log(`Thank you, ${[names[i]]} for the wonderful ${typeOfGift} gift!`)
    }
}

writeCards(names, typeOfGift)

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    } 
}

countDown()