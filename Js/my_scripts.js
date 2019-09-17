function createBoard(){
    for (var i=0;i<=5;i++){
        $('#myTable').append($('<tr>'))
            for (var j=1;j<=6;j++){
                       $('#myTable tr:last').append($('<td id=j class="dot">'))
            }
    }

}

createBoard()
