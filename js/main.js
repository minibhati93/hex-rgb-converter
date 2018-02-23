let calculateHex = (hex) => {
 	var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}

document.getElementById('rgbCalc').addEventListener('click', function () {
    var hex = document.getElementById("hex").value;

    var rgbValue = calculateHex(hex);
    
    document.getElementById("rgb").innerHTML = rgbValue.r+","+rgbValue.g+","+rgbValue.b;

    document.body.style.backgroundColor = 'rgb(' + [rgbValue.r, rgbValue.g, rgbValue.b].join(',') + ')';
});