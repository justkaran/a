var updateObjk = function(obj){
    for(var i = 0; i <= obj.length; i++){
        var sum = 0;
        for(var a = 0; a <= obj[i].marks.length; a++){
            sum += obj[i].marks[a];
        }
        var avg = sum / obj[i].mark.length;
        obj[i].exc = (avg >= 70) ? 'Yes' : 'No';
    }
}
