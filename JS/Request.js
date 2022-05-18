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
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaGV4bWV0LnNoYXJlcG9pbnQuY29tQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJpYXQiOjE2NTI4OTkyNzcsIm5iZiI6MTY1Mjg5OTI3NywiZXhwIjoxNjUyOTg1OTc3LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsIm5hbWVpZCI6ImQzOTQ5N2M3LWUzMzItNGEyNi1hZTEwLWYwYmMwZWJlOTA2ZEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJvaWQiOiI0NTg1ZGY4OC1lNWM4LTRlYzYtOTEwOS0wYzIyMjg3YjM2ZjkiLCJzdWIiOiI0NTg1ZGY4OC1lNWM4LTRlYzYtOTEwOS0wYzIyMjg3YjM2ZjkiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.DVkcGgI68V6xhhJSoZf1pFHGdNj4iTR6XdxxKO5-PYXZLNXpKg9kOw1eL9olGmcrQmJLqCGdM_-sMrOdatkI1AcrHBxz9fv-x-u4JGEg6gLkr2nVRu9c-wv_hkHHPsSQLdRhwM6rOsvN4BHT7sC7DpegolealiA-V724wYRz8gOoDe7_3lIRatEuT3IARZ4ADShJiQcVe4InAoueIUGrBrajkgi5iYX2Gz8toP-I9YKLXaMkAoqv8d7xrvFZYpS-lmz8Bc8ROWNFlrjwo14WNR1jLVTtYYssX9AeFj-r1xZtmmzsX4t5PLpDwvteRiYbUjBYbL0P4ydf0W0JDkQ2iw"
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

