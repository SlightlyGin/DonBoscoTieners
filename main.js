function fn1()
{
    var str = document.getElementById("code1").value;
    document.getElementById("verhaal").innerHTML = str;

    if (str == 7832) {
        //Route 1 begint hier
        document.getElementById("verhaal").innerHTML = "52.056538697854904, 4.327162749879626";
        document.getElementById("verhaal2").innerHTML = "Maak een piramide, des te hoger, des te beter";
    } else if (str == 8451) {
        document.getElementById("verhaal").innerHTML = "52.05677041635626, 4.320156819909983";
        document.getElementById("verhaal2").innerHTML = "Betrek zoveel mogelijk kleuren in jullie groepsfoto";
    } else if (str == 3402) {
        document.getElementById("verhaal").innerHTML = "52.05671126057602, 4.312510748931705";
        document.getElementById("verhaal2").innerHTML = "Laat iedereen verstoppen op de foto. Wel moet iedereen binnen het beeld zitten";
    } else if (str == 7751) {
        document.getElementById("verhaal").innerHTML = "52.052895508099255, 4.316406989327778";
        document.getElementById("verhaal2").innerHTML = "Doe een bekende film scene na, meer punten voor een creatieve film";
    } else if (str == 2288) {
        document.getElementById("verhaal").innerHTML = "52.05222750388779, 4.323199683652275";
        document.getElementById("verhaal2").innerHTML = "Maak een groepsfoto met een dier. Hoe gekker het dier, hoe beter";
        //Route 2 begint hier
    } else if (str == 6372) {
        document.getElementById("verhaal").innerHTML = "52.04697444859743, 4.327735787162617";
        document.getElementById("verhaal2").innerHTML = "Maak een piramide, des te hoger, des te beter";
    } else if (str == 8019) {
        document.getElementById("verhaal").innerHTML = "52.04847555877249, 4.336206203332917";
        document.getElementById("verhaal2").innerHTML = "Betrek zoveel mogelijk kleuren in jullie groepsfoto";
    } else if (str == 5438) {
        document.getElementById("verhaal").innerHTML = "52.054101798885085, 4.3368821199875525";
        document.getElementById("verhaal2").innerHTML = "Laat iedereen verstoppen op de foto. Wel moet iedereen binnen het beeld zitten";
    } else if (str == 1106) {
        document.getElementById("verhaal").innerHTML = "52.054698591868295, 4.3302586927577";
        document.getElementById("verhaal2").innerHTML = "Doe een bekende film scene na, meer punten voor een creatieve film";
    } else if (str == 8822) {
        document.getElementById("verhaal").innerHTML = "52.05222750388779, 4.323199683652275";
        document.getElementById("verhaal2").innerHTML = "Maak een groepsfoto met een dier. Hoe gekker het dier, hoe beter";
        //Als code niet klopt
    } else if (str == 69) {
        document.getElementById("verhaal").innerHTML = "Nee.";
        document.getElementById("verhaal2").innerHTML = "Jullie weten zelf ook wel dat dit niet de juiste code is.. Toch..?";
    } else if (str == 420) {
        document.getElementById("verhaal").innerHTML = "Ik had wel beter verwacht van jullie";
        document.getElementById("verhaal2").innerHTML = "Zijn jullie hier trouwens niet veelste jong voor?";
    } else {
        document.getElementById("verhaal").innerHTML = "De code " + str + " is onjuist.";
    } 
}