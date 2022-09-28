function numberOfCases(key){
    return parseInt(key) * parseInt(key);
}

// for(var i = 0; i < Object.keys(labyrinthes)[0]; i++){
//     $('#labyrinthe').append("<div class='row' id="+`row${i}`+"></div>");
//     for (var j= 0; j < numberOfCases("3"); j++){
//         if(j >= 0 && j < 3){
//             $(`#row${i}`).append("<div class='case' id="+`case${j}`+"></div>");
//         }
//         if(j >= 3 && j < 6){
//             $(`#row${i}`).append("<div class='case' id="+`case${j}`+"></div>");
//         }
//     }
// }






$("#getData").click(function() {
    let labyrinthe_taille = $("#labyrinthe-taille").val()
    let labyrinthe_niveau = $("#labyrinthe-niveau").val()
    if(labyrinthe_taille != "" && labyrinthe_niveau != ""){
        if(labyrinthe_taille >= 3 && labyrinthe_taille <= 25 && labyrinthe_niveau >= 0 && labyrinthe_niveau < 3){

            createLabyrinthe(labyrinthe_taille, labyrinthe_niveau)
            
        }

    }
})


// //let labyrinthe = labyrinthes["3"]["ex-0"][numberOfCase]










function getBorders(walls, posX, posY){

    // recupere le tableau des mures
    // let walls = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['walls']
    let border_px = walls.map(elt => elt === true ? "2px" : "0px").join(" ")
    $(`#case ${posX} - ${posY}`).css("border-width", border_px)
}


function createCase(labyrinthe_taille, labyrinthe_niveau, numberOfCase){
    let posX = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['posX']
    let posY = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['posY']
  //  $("#labyrinthe").append("<div class='case' id="+`case${index}`+"></div>")
    $("#labyrinthe").append(`<div class='case' id="case ${posX} - ${posY}"></div>`)

    let walls = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['walls']
    getBorders(walls, posX, posY)
}

 

function createLabyrinthe(labyrinthe_taille, labyrinthe_niveau){
    for (var i = 0; i < numberOfCases(Object.keys(labyrinthes)[labyrinthe_niveau]); i++){
        createCase(labyrinthe_taille, labyrinthe_niveau, i)
    }
}

