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
var generateTableFromBatch = function(batchID){
    var items;
    var tableData ={

    }
  getInfo(`(Batch eq '${batchID}')`, function(data){
      items = data
  })
  items.forEach(item =>{
      var results = JSON.parse(item.Result)
      results = Object.assign({SN: item.Title}, results)
      console.log(returnHeaders(results))
  })
}


