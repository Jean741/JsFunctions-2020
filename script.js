/*

$.ajax({

    url: "http://localhost:8083/quizz",
    method: "get",
    dataType: "json",
    success: function(data) {
        console.log(data);
        createScrollField("ok", data, "fa fa-plus-square-o fa-2x");
    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});
*/

loadQuizzs(34)

function removeQuiz(numeroCandidature, idQuizz) {

    /*
        var json = {
            "idQuizz":idQuizz,
            "idCandidature":connectedNumCorrespondance
        }
    */
    var json = {
        "idQuizz": idQuizz,
        "idCandidature": numeroCandidature
    }

    console.log(json);

    $.ajax({

        url: "http://localhost:8083/quizz/removeFromCandidature",
        method: "DELETE",
        contentType: "application/json",
        data: JSON.stringify(json),
        success: function(data) {
            loadQuizzs(numeroCandidature);

            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

}

function addQuiz(numeroCandidature, idQuizz) {

    /*
        var json = {
            "idQuizz":idQuizz,
            "idCandidature":connectedNumCorrespondance
        }
    */
    var json = {
        "idQuizz": idQuizz,
        "idCandidature": numeroCandidature
    }

    console.log(json);

    $.ajax({

        url: "http://localhost:8083/quizz/addToCandidature",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(json),
        success: function(data) {
            loadQuizzs(numeroCandidature)
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

}

function loadQuizzs(numCandidature) {
    $.ajax({
        url: "http://localhost:8083/candidatures/id?id=" + numCandidature,
        method: "get",
        dataType: "json",
        success: function(data) {
            var idCandidature = data.id;
            var quizzArray = Array();
            console.log(data);
            data.quizzs.forEach(quiz => {
                var json = {
                    "id": quiz.quizz.id,
                    "titre": quiz.quizz.titre
                }

                quizzArray.push(json);
            });
            console.log(quizzArray);
            createScrollField("k", quizzArray, "fa fa-times fa-2x", function() {
                console.log($(this).parent().find("input").val());
                var idQuizz = $(this).parent().find("input").val();
                removeQuiz(idCandidature, idQuizz)
                $(this).parent().remove();

            });

            initial = []
            $.ajax({

                url: "http://localhost:8083/quizz",
                method: "get",
                dataType: "json",
                success: function(data) {

                    for (let index = 0; index < data.length; index++) {
                        var i = 0;
                        quizzArray.every(function(element) {

                            if (element.id == data[index].id) {
                                i = 1;
                                return false;
                            } else return true
                        })

                        if (i == 0) {
                            initial.push(data[index])
                        }


                    }
                    console.log(initial);
                    createScrollField("ok", initial, "fa fa-plus-square-o fa-2x", function() {
                        console.log($(this).parent().find("input").val());
                        var idQuizz = $(this).parent().find("input").val();
                        addQuiz(idCandidature, idQuizz)
                        $(this).parent().remove();

                    });
                },
                error: function(errMsg) {
                    console.log(errMsg);
                }
            });
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

function createScrollField(classname, data, fontawesomIconClass, buttonFunction) {
    var list = document.createElement("ul")
    list.classList.add("list-group");
    for (let index = 0; index < data.length; index++) {
        var listElement = createListElementli(data[index].titre, data[index].id, fontawesomIconClass, buttonFunction);
        list.appendChild(listElement)
    }

    $("." + classname).html(list)

}

function createSpanButton(fontawesomIconClass) {
    var span = document.createElement("span");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.classList.add("button");

    var icon = document.createElement("i");
    var list_des_classes = fontawesomIconClass.split(" ");
    for (let index = 0; index < list_des_classes.length; index++) {
        icon.classList.add(list_des_classes[index]);
    }
    icon.setAttribute("aria-hidden", "aria-hidden")
    link.appendChild(icon);
    span.appendChild(link);
    span.onclick = arguments[1];
    return span;
}

function createListElementli(textValue, inputValue, fontawesomIconClass, buttonFunction) {
    var listElement = document.createElement("li")
    listElement.classList.add("list-group-item");
    listElement.classList.add("d-flex");
    listElement.classList.add("align-items-center");
    listElement.classList.add("justify-content-between");
    var inputfield = document.createElement("input");
    inputfield.setAttribute("type", "hidden");

    inputfield.setAttribute("value", inputValue);
    listElement.appendChild(inputfield);
    var texte = createH3Test(textValue);
    listElement.appendChild(texte)
    var span = createSpanButton(fontawesomIconClass, buttonFunction);
    listElement.appendChild(span)
    return listElement;
}

function createH3Test(value) {
    var text = document.createElement("h6");
    text.append(value);
    return text;
}

function createAlert(value) {
    var text = document.createElement("div");
    text.classList.add("alert");
    text.classList.add("alert-danger");
    text.setAttribute("role", "alert");
    text.append(value);
    return text;
}



/*var jsondata = {

"username": data['var-email'],
"email": data['var-email'],

"firstName": data['var-firstName'],
"lastName": data['var-lastName'],
"password": data['var-password']
"role": "GUEST",
"recaptchaToken": data['var-recaptchaToken']

};
var jsondata = {

    "username": data['email'],
    "email": data['email'],
    "numCorrespondance": data['email'],
    "firstName": data['nom'],
    "lastName": data['prenom'],
    "password": data['password'],
    "role": "GUEST"
};
console.log(jsondata);

*/
function send(jsondata) {
    $.ajax({

        url: "http://localhost/extranet-portal/register-client/activate-account",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsondata),
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}
$('.btn.btn-outline-default.lunch-process-btn').unbind("click").click(function() {
    send(jsondata);
});



//changement de role

/*
ok = "1001"
$.ajax({

    url: "/alfresco/s/iptech/genericService?name=requetteChoixDossierCandidature&numeroCorespondance=" + ok,
    method: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(jsondata),
    success: function(data) {
        console.log(data);
    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});

*/