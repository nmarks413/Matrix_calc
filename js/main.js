function inputSize(){
    let matrix = new Matrix($("#1st").val(),$("#2nd").val(),[]);
    matrix.buttonInput();
}
function deleteMatrix(){
    #(".matrix").remove();
}
/*function updateArray(){
    for(i=0;i<;i++){
        for(j=0;j<;j++){
            let testing = $("#matrix");

}*/


$(document).ready(function() {
    $("#input").click(inputSize);
 //   $("#delete").click(deleteMatrix);
    // $("#update").click(updateArray);
});