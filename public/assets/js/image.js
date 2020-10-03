const images = [$("#speechbubbleleft1"), $("#speechbubbleleft2"), $("#speechbubbleleft3"), $("#speechbubbleright1"), $("#speechbubbleright2"), $("#speechbubbleright3"), $("#speechbubbleright4")];

//create li from name, id, eaten status of a burger
function makeLi(name, id, eaten){
    return new Promise(function(resolve, reject){
        //change state of eaten
        if (eaten){
            eaten = false;
        } else {
            eaten = true;
        }
        let html = `<div>
            <p><strong>${name}</strong></p>
            <p>
            <button class="change-eaten" data-name="${name}" data-id="${id}" data-neweat="${eaten}">`;
        if (!(eaten)){
            html += "MORE!";
        } else {
            html += "YUM!";
        }
        html += `</button>
            <button class="deleter" data-id="${id}" onClick=updateBehavior()>`
        if (!(eaten)){
            html += "Gross."
        } else {
            html += "Yuck."
        }
        html += `</button>
            </p>
        </div>`;
        let newLi = $("<li>");
        newLi.html(html);
        resolve(newLi);

    })
}






//speech bubble control
function showAnImage(){
    const imageIndex = Math.floor(Math.random()*images.length);
    images[imageIndex].show(1000, function(){
        setTimeout(function(){
            images[imageIndex].hide(1000)
        }, 500);
    });
}