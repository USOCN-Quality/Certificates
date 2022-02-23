//get API token if needs a new one 
var getToken = function(sendData){
    $.ajax({
        async:false,
        method:"POST",
        url: "https://accounts.accesscontrol.windows.net/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a/tokens/OAuth/2",
        data: {
            grant_type: "client_credentials",
            client_id: "56537564-2c71-4d71-ba27-e246b7add428@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a",
            client_secret: "b9+uRFSjBrqvPqwAJlHUBT1qz/ZI+i5IKgk9kOrVdBE=",
            resource: "00000003-0000-0ff1-ce00-000000000000/hexmet.sharepoint.com@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a",
            Authorization:"Bearer"
        },
        success : function(data) {
            if (data) {
              return sendData(data.d.results)
            } 
        }
    })
}
var test;
getToken(function(data){
test=data
})
console.log(test)

var filterString = "(Batch eq '20220221110515')"
var getInfo = function(stringParams,sendData){
    $.ajax({
        async:false,
        url: "https://hexmet.sharepoint.com/sites/USOCN/_api/web/lists/getbytitle('Artefact%20Calibration%20Log')/items?&$filter="+stringParams,
        headers: {
            Authorization:"Bearer "+token,
            Accept:"application/json;odata=verbose"
        },
        success : function(data) {
            if (data) {
              return sendData(data.d.results)
            } 
        }
    })
}
var getBatches = function(stringParams,sendData){
    $.ajax({
        async:false,
        url: "https://hexmet.sharepoint.com/sites/USOCN/_api/web/lists/getbytitle('Artefact%20Calibration%20Log')/items?&$filter="+stringParams,
        headers: {
            Authorization:"Bearer "+token,
            Accept:"application/json;odata=verbose"
        },
        success : function(data) {
            if (data) {
              return sendData(data.d.results)
            } 
        }
    })
}

