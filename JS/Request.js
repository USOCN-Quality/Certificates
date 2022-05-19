//get API token if needs a new one 
// var getToken = function(sendData){
//     $.ajax({
//         async:false,
//         method:"POST",
//         url: "https://accounts.accesscontrol.windows.net/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a/tokens/OAuth/2",
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         data: {
//             grant_type: "client_credentials",
//             client_id: "56537564-2c71-4d71-ba27-e246b7add428@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a",
//             client_secret: "b9+uRFSjBrqvPqwAJlHUBT1qz/ZI+i5IKgk9kOrVdBE=",
//             resource: "00000003-0000-0ff1-ce00-000000000000/hexmet.sharepoint.com@1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a",
//             Authorization:"Bearer"
//         },
//         success : function(data) {
//             if (data) {
//               return sendData(data.d.results)
//             } 
//         }
//     })
// }
// var test;
// getToken(function(data){
// test=data
// })
// console.log(test)
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaGV4bWV0LnNoYXJlcG9pbnQuY29tQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJpYXQiOjE2NTI5NzE2NDMsIm5iZiI6MTY1Mjk3MTY0MywiZXhwIjoxNjUzMDU4MzQzLCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsIm5hbWVpZCI6ImQzOTQ5N2M3LWUzMzItNGEyNi1hZTEwLWYwYmMwZWJlOTA2ZEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJvaWQiOiI0NTg1ZGY4OC1lNWM4LTRlYzYtOTEwOS0wYzIyMjg3YjM2ZjkiLCJzdWIiOiI0NTg1ZGY4OC1lNWM4LTRlYzYtOTEwOS0wYzIyMjg3YjM2ZjkiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.ppf8fc3ASt7mS9pdM1oKI81G9b8deCQZPQcgrL8DiZJaXiGJJ07pmP2DAUTwHmnMNsqbSoiM_eRh2_JmPQ3O_5M_33B-PcqjyPY7svQZxcW06xqXUOJjkCh5kRHW5RO3tLFqEwrLm5OZVj1Kbtoqz7etM0kMpfvnBOM1G37Y1ubHmf2K71vH6GnkZW2L7LBZd3fIwcfyOw3QFLhV_X_L6uFWCPdsGaL1zmBPGGyr18W0PxE8hkmIMhguq3wyS7KtDH33lUIpFw9JH-5L1_tp7I8qH8EuTofB1DKaUrgO2BSgFqoOlgDYcmavbN0mPiIOJJHYLRhhBeEyojDKLMZ-lA"
var getInfo = function(stringParams,sendData){
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

