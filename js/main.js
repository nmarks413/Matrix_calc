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
            let breakElement = "<BR/>";
            $(".output").append(breakElement);
            for (let j=0;j<(this.columns);j++) {
                let matrixElement = "<input/>";
                matrixElement = $(matrixElement).attr("id", (i+1) + "_" + (j+1));
                matrixElement.attr("class", 'matrix');
                $(".output").append(matrixElement);
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
    setArray(){
        for(let i = 0;i<(this.rows);i++){
            for(let j = 0;j<(this.columns);j++){
                console.log($('#' + (i+1) + "_" + (j+1)).val());
                this.array[i][j] = $('#' + (i+1) + "_" + (j+1)).val();
            }
        }
        console.log(this.array);
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
function updateArray(){
    firstMatrix.setArray();
}


$(document).ready(function() {
    $("#input").click(inputSize);
    $("#delete").click(deleteMatrix);
    $("#update").click(updateArray);
});
