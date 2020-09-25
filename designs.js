const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit(grid => { //Creates grid when submit clicked
    $('tr').remove(); //Allows cells to clear when clicking submit
    grid.preventDefault(); //Prevents grid from deleting after creation

    var height = $inputHeight.val(); //Allows height input
    var width = $inputWidth.val(); //Allows width input

    makeGrid(height, width);
    addCellClick(); //Enables user to click cells
});

function makeGrid(height, width) { //Creates grid based on users desired input
    for(var i = 0; i < height; i++) { //Modifys the height variable
        $tableElement.append('<tr></tr>');
    };

    for(var i = 0; i < width; i++) { //Modifys the width variable
        $('tr').append('<td></td>');
    };
};

function addCellClick() { //Enables color choice and user clicking
    $('td').click(grid => { //Allows user to click cells
        var color = $colorPicker.val(); // Allows user to color cells
        $(event.target).css("background-color", color)
    });
}
