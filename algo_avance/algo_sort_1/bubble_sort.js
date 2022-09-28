
tab = [10, 11, 2, 3];

function swap(tab, i, j){
        let temp = tab[i]
        tab[i] = tab[j]
        tab[j] = temp
    return tab
}



///////////////////////////////////////////////////////////////////////////
//////////////////////////      BUBBLE SORT      //////////////////////////
///////////////////////////////////////////////////////////////////////////
function bubbleSort(tab){
    let isSwap = true
    while (isSwap === true) {
        isSwap = false
        for(var i = 0; i< tab.length; i++){
            let j = (i + 1);
            if(tab[i] > tab[j]){
                getNewArray = swap(tab, i, j)
                isSwap = true;
            }

        }
    }
}
//bubbleSort(tab)


///////////////////////////////////////////////////////////////////////////
/////////////////////////       SELECTION SORT      ///////////////////////
///////////////////////////////////////////////////////////////////////////
function selectionSort(tab){
    for (var en_cours = 0; en_cours < tab.length; en_cours++){
        //let plus_petit = en_cours
        let min = getSmallestValue(tab, en_cours)
        swap(tab, en_cours, min)
    }
}

function getSmallestValue(tab, index_en_cours){
    let temp = {index: index_en_cours, value: tab[index_en_cours]}
    for(var i = index_en_cours; i < tab.length; i++){
        if(temp.value > tab[i+1]){
            temp.index = (i+1)
            temp.value = tab[i+1]
        }
    }
    return temp.index
}
console.log(tab)
selectionSort(tab)
console.log(tab)



///////////////////////////////////////////////////////////////////////////
/////////////////////////       INSERTION SORT      ///////////////////////
///////////////////////////////////////////////////////////////////////////


function insert_sort(tab){
    for(var i = 1; i < tab.length; i++){
        let valeur_en_cours = tab[i]
        let j = i
        while (j>0 && tab[j-1] > valeur_en_cours) {
            tab[j] = tab[j-1]
            j--
        }
        tab[j] = valeur_en_cours
    }
}

//insert_sort(tab)