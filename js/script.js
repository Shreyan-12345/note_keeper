/*
//alert("Welcome Guys");

document.write("my name is srk");
document.write("<br>");
document.write("<br>");

var s="10";

var a=10;
var b=20;
var c=a+b;
var d=a++;
var e=++b;
var f=a>b;
var g=a==b;
var h=a<b;
var i=a==s;   //ignores datatype
var j=a===s;  //checks datatype
document.write(c);
document.write("<br>");
document.write(d);
document.write("<br>");
document.write(e);
document.write("<br>");
document.write(f);
document.write("<br>");
document.write(g);
document.write("<br>");
document.write(h);
document.write("<br>");
document.write(i);
document.write("<br>");
document.write(j);
document.write("<br>");

if(a>b)
{
    document.write("yo yo honey singh1");
}
else if(a==b)
{
    document.write("yo yo honey singh2");
}
else if(a<b)
{
    document.write("yo yo honey singh3");
}
else
{
    document.write("u are dead");
}
document.write("<br>")

var x=30;
switch(x)
{
    case 10:
        document.write("it is 10");
        break;
    case 20:
        document.write("it is 20");
        break;
    default:
        document.write("fuck you");    
}
document.write('<br>');

var count=5;
while(count<10)
{
    document.write('srk  <br></br>');
    count++;
}

var count=5;
do
{
    document.write('srk  <br></br>');
    count++;
}while(count<10);

var count=5;
for(var i=0;i<count;i++)
{
    document.write('srk  <br></br>');
}

var arrays=new Array;
arrays[0]="ss";
arrays[1]=2;
document.write(arrays[1],"<br>");

var arrays=new Array("sh","ab");
document.write(arrays[1],"<br>");

var arrays=["sh","ab"];
document.write(arrays[1]+"<br>");

var alpha=["a","b","c"];
var numeric=[1,2,3];

var alphanumeric=alpha.concat(numeric);
document.write("alphanumeric: "+alphanumeric+"<br>");

var arrays=["sh","ab"];
arrays.sort();
document.write(arrays[0]+"<br>");
document.write(arrays[1]+"<br>");
arrays.push("yo");
document.write(arrays+"<br>");
arrays.pop();
document.write(arrays+"<br>");

function sum()
{
    var a=10;
    var b=20;
    var c=a+b;

    document.write(c+"<br>");
}
sum();

function sum2(a,b)
{
    var c=a+b;
    document.write(c+"<br>");
}
sum2(10,20);

var str="javascript";
var answer=str.length;
document.write(answer+"<br>");
var answer=str.charAt(4);
document.write(answer+"<br>");
var answer=str.indexOf("s");
document.write(answer+"<br>");
var answer=str.localeCompare("l");
document.write(answer+"<br>");
var answer=str.localeCompare("ava");
document.write(answer+"<br>");
var answer=str.localeCompare("ala");
document.write(answer+"<br>");

function myfun()
{
    document.write('welcome bro');
}

//events
function cal()
{
    document.example.answer.value=eval(document.example.calculator.value);
}

//dialog boxes
function myfun()
{
    debugger;
    window.location="https://www.youtube.com/watch?v=PODgPW-hbfU&t=2133s"
}

function confirmation()
{
    var ans=confirm("Youwant to see website click ok button")
    if(ans)
    {
        alert("welcome to thapaTechnical")
        window.location="https://www.youtube.com/watch?v=PODgPW-hbfU&t=2133s"
    }
    else
    {
        alert("Sorry! you click in cancel button")
    }
}

function myfunction()
{
    var str=prompt("Hi! My name is VindoThapa and whats your Name","shreyan")
    alert("Nice to meet you "+str+"!")
}

//maths object
var a=Math.floor(100.99)
var b=Math.round(100.99)
var c=Math.log(100.99)
var d=Math.max(100,99,2,1000)
var e=Math.pow(4,2)
var f=Math.sqrt(100)
var g=Math.random()
document.write(g)

//Dates
document.write(Date());

var dt=new Date();

document.write("getDate (): " + dt.getDay());
document.write("<br>getFullYear (): " + dt.getFullYear());
document.write("<br>Milliseconds (): " + dt.getMilliseconds());
document.write("<br>Hours (): " + dt.getHours());
document.write("<br>Minutes (): " + dt.getMinutes());
document.write("<br>getMonth (): " + dt.getMonth());
document.write("<br>Seconds (): " + dt.getSeconds());
document.write("<br>getTime (): " + dt.getTime());     //milliseconds after 1st jan 1970


var dt = new Date("Dec 17, 2017 23:30:00");

document.write("<br>" + dt);

document.write("<br/><br/>");
dt.setDate(25);
document.write(dt);

document.write("<br/><br/>");
dt.setMonth(4);
document.write(dt);

document.write("<br/><br/>");
dt.setHours(2);
document.write(dt);

document.write("<br/><br/>");
dt.setMinutes(45);
document.write(dt);

document.write("<br/><br/>");
dt.setFullYear(2018);
document.write(dt);
*/

function validation()
{
    var un = document.getElementById("user").value;
    var ps = document.getElementById("pass").value;

    if(un=="")
    {
        document.getElementById("username").innerHTML="**Please fill the username";
        return false;
    }

    if(ps=="")
    {
        document.getElementById("password").innerHTML="**Please fill the password";
        return false;
    }

    else
    {
        alert("done");
        return true;
    }
}