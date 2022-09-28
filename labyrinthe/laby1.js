let caseWidth = 50


$("#getData").click(function() {
    let labyrinthe_taille = $("#labyrinthe-taille").val()
    let labyrinthe_niveau = $("#labyrinthe-niveau").val()
    if(labyrinthe_taille != "" && labyrinthe_niveau != ""){
        if(labyrinthe_taille >= 3 && labyrinthe_taille <= 25 && labyrinthe_niveau >= 0 && labyrinthe_niveau < 3){
            //vide le labyrinthe
            $("#labyrinthe").empty();
            //crée un nouveau labyrinthe
            createLabyrinthe(labyrinthe_taille, labyrinthe_niveau)
        }

    }
})




function changeEntranceColor(labyrintheArray){
    labyrintheArray.forEach(function(elt){
        if(elt.hasOwnProperty("entrance")){
            $(`#case${elt["posX"]}-${elt["posY"]}`).css("background-color", "red")
        }
    })
}



function getExit(labyrintheArray){
    labyrintheArray.forEach(function(elt){
        if(elt.hasOwnProperty("exit")){
            $(`#case${elt["posX"]}-${elt["posY"]}`).css("background-color", "blue")
        }
    })
}



function getBorders(walls, posX, posY){
    let border_px = walls.map(elt => elt === true ? "5px" : "0px").join(" ")
    $(`#case${posX}-${posY}`).css("border-width", border_px)
}


function createCase(labyrinthe_taille, labyrinthe_niveau, numberOfCase){
    let posX = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['posX']
    let posY = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['posY']
    $("#labyrinthe").append(`<div class='case' id="case${posX}-${posY}">${posX}-${posY}</div>`)
    $(".case").css("width", `${caseWidth}px`)
    $(".case").css("height", `${caseWidth}px`)


    let walls = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`][numberOfCase]['walls']

    getBorders(walls, posX, posY)
}

 

function createLabyrinthe(labyrinthe_taille, labyrinthe_niveau){
    $("#labyrinthe").css("width", `${caseWidth*(labyrinthe_taille)}px`)
    for (var i = 0; i < Math.pow(labyrinthe_taille, 2); i++){
        createCase(labyrinthe_taille, labyrinthe_niveau, i)
    }

    changeEntranceColor(labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`])
    getExit(labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`])

    //console.log(getEntrance(labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`]))
    

  //  $('#case0-1').css("background-color", "red")
    
   
}

