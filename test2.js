$(document).ready(function() {
    console.log("ready!");
});


function doRedirect() {
    window.parent.location.assign("http://localhost/dashboard");
}

$(window).on("load", function() {

    $.ajax({

        url: "http://localhost:8083/profil/numCorrespondance?numCorrespondance=123",
        method: "get",
        data: 123,
        success: function(data) {
            console.log(data);
            $("[name='ok']").val(data["nom"])
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });


});


var done = 0;
if (done == 0) {

    formContainer.data['var-nom'] = "Mr Lucient"

    done = 1;
}


$.ajax({

    url: "http://localhost:8083/etablissements",
    method: "get",
    success: function(data) {
        console.log(data);
        formContainer.data['var-nom'] = data['numCorrespondance'];
        console.log(formContainer.data['var-nom']);
    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});
formContainer.getComponentById($('.formio-component-var-anne').attr("id")).setItems(data);