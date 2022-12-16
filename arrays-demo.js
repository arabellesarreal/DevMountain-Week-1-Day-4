let backpack = []

backpack.push('sword', 'shield','food')

let exteriorItems = [];
//remove from backpack
exteriorItems.push(backpack.shift())

backpack.push('furCoat')
// put coat on
exteriorItems.push(backpack.pop())

console.log(backpack.length, exteriorItems.length)

let backpackItems = backpack.length
let exteriorCount = exteriorItems.length

backpack.push("flint", "knife", "toothbrush", "sleepingbag")

let saddlebag = []

saddlebag.push(backpack.splice(0,1)[0])
saddlebag.unshift(backpack.splice(4,1)[0])

for(let i=0; i<backpack.length; i++){
    if(backpack[i] === 'knife'){
        console.log('skin a rabbit')
    }else{
        console.log(backpack[i])
    }
}

console.log(backpack, exteriorItems, saddlebag)