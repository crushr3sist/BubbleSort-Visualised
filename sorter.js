
for (i = 0; i<600; i++ ){
    var number = Math.floor(Math.random() * 600);
    hightA.push(number);
    var lengtH = hightA.length;

}

function resett() {

    for (l = 0; l<600; l++ ){
        hightA.pop();
    }

    for (i = 0; i<600; i++ ){
        var number = Math.floor(Math.random() * 600);
        hightA.push(number);
        var lengtH = hightA.length;
    }
}

function bubbleSort() {
    for (var k = 0; k<lengtH; k++){
        for (var j = 0; j<lengtH; j++){
            if (hightA[j] > hightA[j+1]){
                var temp = hightA[j];
                hightA[j] = hightA[j+1];
                hightA[j+1] = temp;
                //console.log(hightA);
            }
        }
    }
}

