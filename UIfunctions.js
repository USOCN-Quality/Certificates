//function to initialize dropdowns
$('.ui.dropdown')
  .dropdown();

// populate initial batch numbers with get request
var populateBatchList = function(){
    var items;
  getBatches("", function(data){
      items = removeDuplicates("Batch",data)
  })
  items.forEach(item=>{
    var batchItem = `<div class="item batchSelectItem" data-value="${item}">${item}</div>`
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
  getInfo(`(Batch eq '${batchID}')`, function(data){
      items = data
  })
  items.forEach(item =>{
      var results = JSON.parse(item.Result)
      results.SN= item.Title
      console.log(results)
  })
}


