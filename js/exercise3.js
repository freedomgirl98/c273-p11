//            $(document).ready(function () {
//$("#btnSubmit").click(function(){
//    var person = {};
//    person.name = $("[name=name]").val();
//    person.email = $("[name=email]").val();
//    person.postalCode = $("[name=postalCode]").val();
//    
//    localStorage.setItem("person", person);
//    var item = localStorage.getItem('person');
//    expect(item).toBe('[object Object]');
////    
////        var person = localStorage.getItem("person");
////        var message = "";
////        message += "Name: " + person.name + "<br/>";
////        message += "Email: " + person.email + "<br/>";
////        message += "Email: " + person.postalCode;
////        $("#results").html(message);
//});
//
//            });

$(document).ready(function () {

    var person = JSON.parse(localStorage.getItem("person"));
//        alert("a");
    if (person != null) {
        var message = "";
        message += "Name: " + person.name + "<br/>";
        message += "Email: " + person.email + "<br/>";
        message += "Postal Code: " + person.postalCode;
        $("#results").html(message);
    }

    $("#btnSubmit").click(function () {
        var person = {};
        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();

        localStorage.setItem("person", JSON.stringify(person));
    });
});