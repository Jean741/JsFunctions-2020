//exemple

createScrollField("k", quizzArray, "fa fa-times fa-2x", function() {
    console.log($(this).parent().find("input").val());
    $(this).parent().remove();

});

//exemple
data = [{
        id: "1",
        titre: "Exemple un"
    },
    {
        id: "2",
        titre: "Exemple 2"
    }
]

//


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