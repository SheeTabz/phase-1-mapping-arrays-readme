
function map(arr, callback){
    const newArr = []

    for(const item of arr){
        newArr.push(callback(item))
    }
    return newArr
}


const num = [1,2,3,4,5,5]

console.log(map(num,function(number){
    return number * number
}))
console.log(num)


const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];


const newA = oldAccounts.map(function(eng){
    return Object.assign({}, eng, {workTool : "Laptops"}) 
})

console.log(newA)
console.log(oldAccounts)
