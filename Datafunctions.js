//function to remove duplicates 
var removeDuplicates = function(checkValue, array){
    array = returnSpecifiedKeyArray(checkValue,array)
    var cleanArray = []
    array.forEach(item=>{
        if (!cleanArray.includes(item)){
            cleanArray.push(item)
        }
    })
    return cleanArray
}
//function to get only values of keys that you specify
var returnSpecifiedKeyArray = function(key, array){
    var newArray =[]
    array.forEach(item=>{
        newArray.push(item[key])
    })
    return newArray
}