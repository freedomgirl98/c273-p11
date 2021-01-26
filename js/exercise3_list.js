            $(document).ready(function () {
                var persons = JSON.parse(localStorage.getItem("persons"));
                if (persons == null) {
                    persons = [];
                }
                var message = "";
                for (var i = 0; i < persons.length; i++) {
                    var person = persons[i];
                    var message = "";
                    message += "Name: " + person.name + "<br/>";
                    message += "Email: " + person.email + "<br/>";
                    message += "Postal Code: " + person.postalCode + "<br/><br/>";
                }
                $("#results").html(message);

                $("#btnSubmit").click(function () {
                    var person = {};
                    person.name = $("[name=name]").val();
                    person.email = $("[name=email]").val();
                    person.postalCode = $("[name=postalCode]").val();

                    persons[persons.length] = person;
                    localStorage.setItem("persons", JSON.stringify(persons));

                });
            });