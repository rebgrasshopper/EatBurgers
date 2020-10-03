function updateBehavior(event){
     // effects();
     const id = $(event.target).data("id");
     const name = $(event.target).data("name");
     const newEat = $(event.target).data("neweat");
     let thisColumn = $(event.target).parents()[3];
     console.log(id);
     console.log(name);
     console.log(newEat);
     
     let newEatState = {};
     $(event.target).parents()[2].remove();

     showAnImage();
     setTimeout(showAnImage, 500);
     //change to numbers because the MySQL was unhappy to receive True/False
     if (newEat === true) {
         newEatState.eaten = 1;
     } else {
         newEatState.eaten = 0;
     }

     //send PUT
     $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newEatState,
     }).then(function(){
         //locate opposite column to append li to
         if (thisColumn.id == "table"){
             thisColumn = $("#stomach");
         } else {
             thisColumn = $("#table");
         }
         
         makeLi(name, id, newEat).then(function(data){
             thisColumn.append(data);
         });
     });
}


function deleteBehavior(event){
    console.log($(event.target));
    const id = $(event.target).data("id");
    $(event.target).parents()[2].remove();
    console.log(id);


    //Send DELETE
    $.ajax("/api/burgers/" +id, {
        type: "DELETE",
    }).then(function() {
        console.log(`Deleted burger id: ${id}`);
    });
}
//wait until DOM is loaded
$(function() {


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

    document.addEventListener('click',function(event){
        console.log(event.target.className);
      if(event.target.className == 'change-eaten'){
            updateBehavior(event);
       } else if (event.target.className == 'deleter'){
           deleteBehavior(event);
       }
   });
});


