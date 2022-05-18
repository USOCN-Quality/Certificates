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
  //clear data table in case of reselection
  
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
      results = Object.assign({"Serial Number": `<a href="./Cert.html?sn=${item.Title}">${item.Title}</a>`}, results)
      resultsArray.push(results)
  })
  
// if list data exists as table destroy and reinitialize, else just initialize
 if ( $.fn.dataTable.isDataTable( '#listData' ) ) {
  table = $('#listData').DataTable()
  table.destroy();
  $("#listData").empty()
}
  table = $('#listData').DataTable({
    data : resultsArray,
    columns : resultHeaderObject,
 })
}


