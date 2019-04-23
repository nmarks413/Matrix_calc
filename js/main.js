class Matrix {

    constructor(rows,columns,array) {
        this.rows = rows;
        this.columns = columns;
        this.array = array;
    }
    createMatrix(){
        let matrix = [];
        for (let i = 0; i <(this.rows); i++) {
            matrix.push([]);
            $("#output").append("<BR/>")
            for (let j=0;j<(this.columns);j++) {
                let matrixElement = "<input/>";
                matrixElement = $(matrixElement).attr("id", (i+1) + "," + (j+1));
                matrixElement.attr("class", 'matrix');
                $("#output").append(matrixElement);
                matrix[i].push("");
            }
        }
        return matrix;
    }
    buttonInput(){
        if ($(".matrixsize")) {
            var matrixArray = this.createMatrix(this.rows,this.columns);
        }
        this.array = matrixArray;
        return this.array;
    }
    determinant(InputMatrix) {
        
        if(InputMatrix.length == 1) {
            return (ab-cd)
        }
        else{
            for(){

            }
        }
    }
    Cofactor(InputMatrix,rowInput,columnInput){
        var returnArray;
        var key1;
        var key2;
        for(var i=0;i<(InputMatrix.length - 1);i++){
            returnArray.append([]);
        }
        for(var i=0;i<InputMatrix.length;i++){
            for(var j=0;j<InputMatrix.length;j++) {
                if((i != rowInput) && (j != columnInput)){
                    returnArray[][] =  InputMatrix[i][j];
                }
            }
        }
        return returnArray * (-1)^(i+j+2);
    }

}

let firstMatrix;
function inputSize(){
    firstMatrix = new Matrix($("#1st").val(),$("#2nd").val(),[]);
    firstMatrix.buttonInput();
}
function deleteMatrix(){
    $(".matrix").remove();
}
/*function updateArray(){
    for(i=0;i<;i++){
        for(j=0;j<;j++){
            let testing = $("#matrix");

}*/


$(document).ready(function() {
    $("#input").click(inputSize);
    $("#delete").click(deleteMatrix);
    // $("#update").click(updateArray);
});