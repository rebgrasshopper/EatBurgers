//wait until DOM is loaded
$(function() {
    //eat button behavior
    $(".change-eaten").on("click", function(event) {
        const id = $(this).data("id");
        let newEat = $(this).data("neweat");
        if (newEat === true) {
            newEat = 1;
        } else {
            newEat = 0;
        }
        const newEatState = {
            eaten: newEat,
        };
        console.log(newEatState);

        //send PUT
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState,
        }).then(function(){
            console.log(`Changed eaten to: ${newEat}`);
            setTimeout(location.reload(), 200);
        });
    });

    //new burger button behavior
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#bu").val().trim(),
        };
        //don't make new burger unless it has a name
        if (!(newBurger.name == "")) {
            console.log("NEW BURGER: ");
            console.log(newBurger);
            //send POST
            $.ajax("api/burgers", {
                type: "POST",
                data: newBurger,
            }).then(function() {
                console.log(`Created new burger: ${newBurger.name}`);
                location.reload();
            });
        }
    });

    //delete burger button behavior
    $(".deleter").on("click", function(event) {
        const id = $(this).data("id");

        //Send DELETE
        $.ajax("/api/burgers/" +id, {
            type: "DELETE",
        }).then(function() {
            console.log(`Deleted burger id: ${id}`);
            location.reload();
        });
    });
});