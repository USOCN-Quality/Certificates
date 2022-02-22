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
//remove batch duplicates
var removeBatchDuplicates = function(array){
    var cleanArray = []
    array.forEach(item=>{
        if (!JSON.stringify(cleanArray).includes(item.Batch)){
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

//return headers of JSON for dataTables formatting
var returnHeaders = jsonObj => {
    var headerArray = []
    for(var key in jsonObj){
        headerArray.push({ data : key.toString()})
    }
    return (headerArray)
}