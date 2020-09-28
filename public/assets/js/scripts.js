//wait until DOM is loaded
$(function() {
    //eat button behavior
    $(".change-eaten").on("click", function(event) {
        const id = $(this).data("id");
        const newEat = $(this).data("newEat");
        const newEatState = {
            eaten: newEat,
        };

        //send PUT
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newEatState,
        }).then(function(){
            console.log(`Changed eaten to: ${newEat}`);
            location.reload();
        });
    });

    //new burger button behavior
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#bu").val().trim(),
        };

        //send POST
        $.ajax(`api/cats`, {
            type: "POST",
            data: newBurger,
        }).then(function() {
            console.log(`Created new burger: ${newBurger.name}`);
            location.reload();
        });
    });

    //delete burger button behavior
    $(".deleter").on("click", function(event) {
        const id = $(this).data("id");

        //Send DELETE
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE",
        }).then(function() {
            console.log(`Deleted burger id: ${id}`);
            location.reload();
        });
    });
});