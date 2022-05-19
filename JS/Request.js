//get API token if needs a new one, then sets the token before getting any requests
var token ="";
var getToken =  function(){
    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("resource", "00000003-0000-0ff1-ce00-000000000000/hexmet.sharepoint.com@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a");
    form.append("client_id", "d39497c7-e332-4a26-ae10-f0bc0ebe906d@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a");
    form.append("client_secret", "l9dAl/DZWb7JE+a7yW+plnDRaeHuNSTtymFWfRl7X2Q=");
    
    var settings = {
        "async":false,
      "url": "https://accounts.accesscontrol.windows.net/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a/tokens/OAuth/2",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    
    $.ajax(settings).done(function (response) {
      var tempToken = JSON.parse(response).access_token
      token = tempToken
    }); 
}
var getInfo = function(stringParams,sendData){
    $.ajax({
        async:false,
        url: "https://hexmet.sharepoint.com/sites/PortableLaboratories/_api/web/lists/getbytitle('Artefact Calibration')/items?&$filter="+stringParams,
        headers: {
            Authorization:"Bearer "+ token,
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
        url: "https://hexmet.sharepoint.com/sites/PortableLaboratories/_api/web/lists/getbytitle('Artefact Calibration')/items?&$filter="+stringParams,
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

