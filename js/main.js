

function inputSize() {
    let rowInput = $("#1st").val();
    let columnInput = $("#2nd").val();
    if ($(".matrixsize")) {
       matrix1 = createMatrix(rowInput,columnInput);
    }
}
function createMatrix(rows,columns){
    matrix = [];
    console.log("debug");
    for (i = 0; i <(rows); i++) {
        $("#output").append("<BR/>")
        for (j=0;j<(columns);j++) {
            let matrixElement = "<input/>";
            matrixElement = $(matrixElement).attr("id", (i+1) + "," + (j+1));
            matrixElement.attr("class", 'matrix');
            $("#output").append(matrixElement);
            matrix.push();
        }
    }
}

$(document).ready(function() {
    $("button").click(inputSize);
});