formContainer.getComponentById($('.formio-component-var-gridEcole').attr("id")).setValue(dataResult.varArrayListeTarifGarantieParAnnee);

//experienvce svcolaire

function deleteExperienceScolaire(id) {
    $.ajax({
        url: "http://localhost:8083/experienceScolaire/id?id=" + id,
        method: "DELETE",
        contentType: "application/json",
        success: function(data) {
            refrechDataGridEcole();
            successToastr(
                "Opperation reussi",
                "Suppression effectuée. ")
        },
        error: function(errMsg) {
            console.log(errMsg);
            errorToastr(
                "Erreur",
                "Suppression annullée. ")
        }
    });
}
$('.ets table tbody tr td button').unbind("click").click(function() {
    swal({
            title: "Etes vous sûre?",
            text: "Vous allez supprimer definitivement une experience scolaire.",
            icon: "warning",
            buttons: ["Annuler", "Valider"],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                var id = 0;
                console.log($(this).parent().parent().find("td:first-child input").val());
                id = $(this).parent().parent().find("td:first-child input").val();
                deleteExperienceScolaire(id);
            } else {

            }
        });

});



//experienvce professionnelle

function deleteExperienceProfesionnelle(id) {
    $.ajax({
        url: "http://localhost:8083/experienceProfessionnelle/id?id=" + id,
        method: "DELETE",
        contentType: "application/json",
        success: function(data) {
            refrechDataGridExperience();
            console.log(("effevctue"));
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}
$('.exp table tbody tr td button').unbind("click").click(function() {
    var id = 0;
    console.log($(this).parent().parent().find("td:first-child input").val());
    id = $(this).parent().parent().find("td:first-child input").val();
    deleteExperienceProfesionnelle(id);
});