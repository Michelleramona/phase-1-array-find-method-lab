// code your solution here
function superbowlWin(array, finder){
    let result = null
    for (let item of array){
        if (finder(item)=== "W"){
            result = item
            break}
    }
    return result
}