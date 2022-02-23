//function to initialize dropdowns
$('.ui.dropdown')
  .dropdown();

// populate initial batch numbers with get request
var populateBatchList = function(){
    var items;
  getBatches("", function(data){
      items = removeBatchDuplicates(data)
  })
  items.forEach(item=>{
    var batchItem = `<div class="item batchSelectItem" data-value="${item.Batch}">${item.Batch} | ${item.Created.replace("T"," ").replace("Z"," ")}| ${item.Operator} </div>`
    $("#BatchDropdown").append(batchItem)
  })
}

//function to on select log/send the clicked batch ID item 
$('input[name="Batches"]').change(function(){
var selected = $(this).val()
generateTableFromBatch(selected)

});

//function to make table once batch ID is selected
//this function gets the headers and body for the table and sends the info to datatables
var generateTableFromBatch = function(batchID){
    var items;
    var tableData ={

    }
  getInfo(`(Batch eq '${batchID}')`, function(data){
      items = data
  })
  //log headers of results
  var resultHeaderObject = JSON.parse(items[0].Result)
  resultHeaderObject = returnHeaders(resultHeaderObject)
 
  //get json of columns for data tables
  var resultsArray = []
  items.forEach(item =>{
      var results = JSON.parse(item.Result)
      results = Object.assign({"Serial Number": item.Title}, results)
      resultsArray.push(results)
  })
  // console.log(dtObject)
  $('#listData').DataTable({
    data : resultsArray,
    columns : resultHeaderObject,
 })
}


