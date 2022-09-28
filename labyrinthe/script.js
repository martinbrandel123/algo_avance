$("#resolve").click(function() {
    let labyrinthe_taille = $("#labyrinthe-taille").val()
    let labyrinthe_niveau = $("#labyrinthe-niveau").val()
    if(labyrinthe_taille != "" && labyrinthe_niveau != ""){
        if(labyrinthe_taille >= 3 && labyrinthe_taille <= 25 && labyrinthe_niveau >= 0 && labyrinthe_niveau < 3){



            let LabyrintheArray = labyrinthes[labyrinthe_taille][`ex-${labyrinthe_niveau}`];
            let entranceCell = getEntranceCell(LabyrintheArray);

            console.log(depthFirstSearch(LabyrintheArray, entranceCell))


            
        }
    }
})
//algo principal
function depthFirstSearch(labyrintheArray, entranceCell){
    console.log(labyrintheArray)
    console.log(entranceCell)
    // initialisation d'une stack et d'un array des elements visité
    let stack = []
    let visited = []
    // Inseré la case de départ dans la stack
    stack.push(entranceCell)
    // Inseré la case de départ dans la liste des elements visité
    visited.push(entranceCell)


    while (stack.length > 0) {
        setInterval(function(){
            // Case courante = derniere element de ma stack
        let currentCell = stack[stack.length - 1]
        let currentId = getCurrentIdPosition(currentCell);
        let directions = directionsPossibleOfCurrentCell(currentCell);
        let exitCell = getExitCell(labyrintheArray);
        // Supprime le dernier element de ma stack
        stack.pop()
       // console.log(getExit(LabyrintheArray))
    
        let neighbour = getNeighboutOfCurrentCell(directions, currentId, labyrintheArray)
        // console.log(LabyrintheArray)



       // console.log("current Id : ",id)


        // verifie si la case actuelle est egale a la case de sortie
        if(currentCell === exitCell){
            return currentCell ; 
        }

       // verifie si la case courante est déjà visité
        neighbour.forEach(function(neighbourCell){
            if(!visited.includes(neighbourCell)){
                stack.push(neighbourCell)
                visited.push(neighbourCell)
            } 
        }) 
        //Affichage des cases parcouru 
        let id = `#case${currentCell.posX}-${currentCell.posY}`
        $(id).css("background", "pink")
        //console.log("current :", currentCell.posX)
        }, 1000)
        
    }

}


function getEntranceCell(labyrintheArray){
    let entrance = labyrintheArray.find(function(cell){
        return cell.entrance ;  
    })
    return entrance;
}
function getExitCell(labyrintheArray){
    let exit = labyrintheArray.find(function(cell){
        return cell.exit;
    })
    return exit
}

function getCurrentIdPosition(currentCell){
    return `${currentCell.posX}-${currentCell.posY}`;
}


function directionsPossibleOfCurrentCell(currentCell){
    const allDirections = ["top", "right", "bottom", "left"]
    const directionArray = currentCell.walls.map(function(wall, index){
        if(!wall){
            return allDirections[index]
        }
    })
    const directions = directionArray.filter(direction => direction != undefined);
   // let direction = directionArray.filter(elt => elt.length > 3)
    return directions
}


function getNeighboutOfCurrentCell(directions, currentId, LabyrintheArray){
    let id = currentId.split("-")
 
    let idArray = directions.map(function(direction){
        if(direction === "top"){
            let x = parseInt(id[0]) 
            let y = parseInt(id[1])
            x = x - 1 
            return `${x}-${y}`
        }
        if(direction === "right"){
            let x = parseInt(id[0]) 
            let y = parseInt(id[1])
            y = y + 1 
            return `${x}-${y}`
        }
        if(direction === "bottom"){
            let x = parseInt(id[0]) 
            let y = parseInt(id[1])
            x = x + 1 
            return `${x}-${y}`
        }
        if(direction === "left"){
            let x = parseInt(id[0]) 
            let y = parseInt(id[1])
            y = y - 1 
            return `${x}-${y}`
        }
    })
    let stack = convertIdIntoCell(idArray, LabyrintheArray)
    return stack
}

function convertIdIntoCell(idArray, LabyrintheArray){
    let resultStack = []
    for(let i = 0; i< idArray.length; i++){
        let neighbour = idArray[i].split('-')
        let neightbourX = parseInt(neighbour[0]) 
        let neightbourY = parseInt(neighbour[1]) 

        let resultCell = LabyrintheArray.find(function(cell){
            if(cell.posX === neightbourX && cell.posY === neightbourY){
                return cell
            }
        })
        resultStack.push(resultCell)
    }
    return resultStack
}

//récupere la position posX - posY 
//regarder les murs de cette position
//regarder les cases autours de cette case en fonction du chemin 




