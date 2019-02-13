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
        return matrixArray;
    }
}