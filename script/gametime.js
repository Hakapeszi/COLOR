var color = ["blue", "green", "red", "#E6E600"];
var text = ["blue", "green", "red", "yellow"];
gscore = 0;
time = 300; // 30 seconds
var Idozito = [];
var x;
rnumber1 = 0;
rnumber2 = 0;
nomatch =0;

function load()
{
    idozito(time);
}

function myFunction()
{
    gscore = 0;
    window.location.href = "index.html";
}

function random()
{
    rnumber1 = Math.floor((Math.random() * 4));
    rnumber2 = Math.floor((Math.random() * 4));   
}

function general()
{
    random();
    if(rnumber1 != rnumber2)
    {
        nomatch++;
        if(nomatch == 5)
        {
            while(rnumber1 !=rnumber2)
            {
                random();
            }
            nomatch = 0;
        }
    }
    document.getElementById("word").innerHTML = "" + text[rnumber1].fontcolor(color[rnumber2]);
    document.getElementById("hscore").innerHTML = "Highscore: " + localStorage.getItem("thighscore");
}

function checkYES()
{
    if (rnumber1 == rnumber2)
    {
        document.getElementById("result").innerHTML = "True";
        gscore++;
        document.getElementById("score").innerHTML = "Score: " + gscore;
    }
    else
    {
        document.getElementById("result").innerHTML = "False";
        gscore--;
        document.getElementById("score").innerHTML = "Score: " + gscore;
    }
    general();
}

function checkNO()
{
    if (rnumber1 == rnumber2)
    {
        document.getElementById("result").innerHTML = "False";
        gscore--;
        document.getElementById("score").innerHTML = "Score: " + gscore;
    }
    else
    {
        document.getElementById("result").innerHTML = "True";
        gscore++;
        document.getElementById("score").innerHTML = "Score: " + gscore;
    }
    general();
}

function printOut(hova, mit)
{
    document.getElementById(hova).innerHTML = mit;
}

function idozito(remainingtime)
{
    var counter = [];
    x = setTimeout(function () {
        idozito(--remainingtime);
    }, 100);
    if (remainingtime === 0)
    {
        counter[1] = 0;
        printOut("timer", "0.0");
        clearTimeout(x);
        alert('Time is up!\nScore: ' + gscore);
        if(localStorage.getItem("thighscore") < gscore)
        {
          localStorage.setItem("thighscore", gscore);  
        }
        myFunction();
    }

    else
        counter[1] = remainingtime.toString().slice(1, 2);

    if (remainingtime > 10)
        counter[0] = remainingtime.toString().slice(0, 1);
    else
        counter[0] = 0;

    if (remainingtime < 10)
        counter[1] = remainingtime.toString().slice(0, 1);
    else
        counter[1] = remainingtime.toString().slice(1, 2);


    if (remainingtime > 100)
        printOut("timer", counter[0] + counter[1]);

    else
        printOut("timer", counter[0] + "." + counter[1]);
}