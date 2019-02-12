
function inputSize() {
    let rowInput = $("#1st").val();
    let columnInput = $("#2nd").val();
    if ($(".matrixsize")) {
       let matrix1 = createMatrix(rowInput,columnInput);
    }
    return matrix1;
}
function createMatrix(rows,columns){
    let matrix = [];
    for (i = 0; i <(rows); i++) {
        matrix.push([]);
        $("#output").append("<BR/>")
        for (j=0;j<(columns);j++) {
            let matrixElement = "<input/>";
            matrixElement = $(matrixElement).attr("id", (i+1) + "," + (j+1));
            matrixElement.attr("class", 'matrix');
            $("#output").append(matrixElement);
            matrix[i].push("");
        }
    }
    return matrix;
}
/*function updateArray(){
    for(i=0;i<;i++){
        for(j=0;j<;j++){
            let testing = $("#matrix");

}*/


$(document).ready(function() {
    $("#input").click(inputSize);
   // $("#update").click(updateArray);
});