$(document).ready(function () {
    let responses = document.getElementsByClassName('btnShowResponses');
    for(let response of responses){
        //console.log(response.id.split('-')[1]);
        $(response).click(function () {
            console.log(response.id.split('-')[1]);
            $('#responses-'+response.id.split('-')[1]).toggleClass("responses-after-click");
            //$('#responses-'+response.id.split('-')[1]).slideToggle("slow");
        })
    }
});