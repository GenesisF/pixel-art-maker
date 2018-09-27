(function(document){
    
    var canvas = document.querySelector('#canvas');

    var colorCode;

    for(var i = 0; i < 3500; i++){
        
        let square = document.createElement('div');
        
        square.classList.add('square');

        canvas.appendChild(square);

        square.addEventListener('click', function(e){
          square.style.backgroundColor = colorCode;
        });
    }

    //Color Palette

    var palette = document.querySelector('#palette');

    var colors = ['#f8bbd0', '#ba6b6c', '#78002e', '#4dd0e1', '#00897b'];
    
    for(var i = 0; i < colors.length; i++){

        var color = document.createElement('div');

        color.classList.add('color');
        
        let hex = colors[i];

        color.style.backgroundColor = colors[i];

        palette.appendChild(color);

        color.addEventListener("click", function(e){
            colorCode = hex;
        });

    }


})(document);