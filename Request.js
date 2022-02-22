
var filterString = "(Batch eq '20220221110515')"
var getInfo = function(stringParams,sendData){
    $.ajax({
        async:false,
        url: "https://hexmet.sharepoint.com/sites/USOCN/_api/web/lists/getbytitle('Artefact%20Calibration%20Log')/items?&$filter="+stringParams,
        headers: {
            Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaGV4bWV0LnNoYXJlcG9pbnQuY29tQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJpYXQiOjE2NDU0NzMxNjcsIm5iZiI6MTY0NTQ3MzE2NywiZXhwIjoxNjQ1NTU5ODY3LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsIm5hbWVpZCI6IjU2NTM3NTY0LTJjNzEtNGQ3MS1iYTI3LWUyNDZiN2FkZDQyOEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJvaWQiOiIyYWJiYzQ1ZC0yMjg3LTQ5M2QtODdkMy1iMDkyN2QyODlhOGUiLCJzdWIiOiIyYWJiYzQ1ZC0yMjg3LTQ5M2QtODdkMy1iMDkyN2QyODlhOGUiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.FBTvjCr1w5Mm4OB-6Z_qCY83REeXI2cPxNYvZXb9CXu2u2-PL259ScuNsiqC3QIkEPC9wRAee4ePLxF7WrUhukK6XX84QwLAmxWvyPwSzJs3Q5t4_Y0kWvWulKWrnq9uJ2SOAe-og22qB0K9zHOgKhtaZ3xqWBjnDwPSQaqhSxn5UsJ-LcOBce2DvhsxnaYtr7YtrPz6ca7MnnhuZt9x5FRAzaWThyT_8HZ610iKLKSFTySLs0QICKOJGkGGjM5-KR5yUJG4iRHOUFrdaQekCmH-YAMzo0s4G25IbDYOsQTd3uICSWju7MTRgsrcZGiMp73ARFdF6qZqCWL_5aq8rA",
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
            Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaGV4bWV0LnNoYXJlcG9pbnQuY29tQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJpYXQiOjE2NDU0NzMxNjcsIm5iZiI6MTY0NTQ3MzE2NywiZXhwIjoxNjQ1NTU5ODY3LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDFiMTZhYjNlLWI4ZjYtNGZlMy05ZjNlLTJkYjdmZTU0OWY2YSIsIm5hbWVpZCI6IjU2NTM3NTY0LTJjNzEtNGQ3MS1iYTI3LWUyNDZiN2FkZDQyOEAxYjE2YWIzZS1iOGY2LTRmZTMtOWYzZS0yZGI3ZmU1NDlmNmEiLCJvaWQiOiIyYWJiYzQ1ZC0yMjg3LTQ5M2QtODdkMy1iMDkyN2QyODlhOGUiLCJzdWIiOiIyYWJiYzQ1ZC0yMjg3LTQ5M2QtODdkMy1iMDkyN2QyODlhOGUiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.FBTvjCr1w5Mm4OB-6Z_qCY83REeXI2cPxNYvZXb9CXu2u2-PL259ScuNsiqC3QIkEPC9wRAee4ePLxF7WrUhukK6XX84QwLAmxWvyPwSzJs3Q5t4_Y0kWvWulKWrnq9uJ2SOAe-og22qB0K9zHOgKhtaZ3xqWBjnDwPSQaqhSxn5UsJ-LcOBce2DvhsxnaYtr7YtrPz6ca7MnnhuZt9x5FRAzaWThyT_8HZ610iKLKSFTySLs0QICKOJGkGGjM5-KR5yUJG4iRHOUFrdaQekCmH-YAMzo0s4G25IbDYOsQTd3uICSWju7MTRgsrcZGiMp73ARFdF6qZqCWL_5aq8rA",
            Accept:"application/json;odata=verbose"
        },
        success : function(data) {
            if (data) {
              return sendData(data.d.results)
            } 
        }
    })
}
