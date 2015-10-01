$("input:radio[name=convTo]").on("change click", fromDec);


function fromDec(){
    var convTo = $("input:radio[name=convTo]:checked").attr('id');
    var input = $('#userNum').val();
    var result = 0;
    if (convTo == "toBin"){
        result = (input >>> 0).toString(2);
        $('#result').html("("+result+")<sub>2<sub>");
    } else if (convTo == "toHex"){
        result = (input >>> 0).toString(16);
        $('#result').html("("+result+")<sub>16<sub>");
    }
}

function fromDec(){
    var convTo = $("input:radio[name=convFrom]:checked").attr('id');
    var input = $('#userBin').val();
    var result = 0;
    if (convTo == "toBin"){
        result = parseInt(input, 2);
        $('#result').html("("+result+")<sub>10<sub>");
    } else if (convTo == "toHex"){
        result = parseInt(input, 16);
        $('#result').html("("+result+")<sub>10<sub>");
    }
}
