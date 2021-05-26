# **html meme thing or something**
###### Oh hey... <br/>

So first of all you could ask something like this:

> why did you make it?

In short, it's my homework but I made it but with more stuff that I didn't learn on the lessons.

> ........
> then why would you even show that on this website?

........<br/>
idk maybe because im bored<br/>

## So let's get started.
First you need the usual html code.
```html
<html>
<head>
</head>
<body>
</body>
</html>
```
```html
<html>
<head>
<title>I'm a hackerman</title>
```
Here we are changing the name of the site.
```html
</head>
<body style="background-color:black">
```
The code above changes the color of the website.
```html
</body>
</html>
```
Now let's make a button!
```html
</head>
<body style="background-color:black">
<button style="background-color:black; border-color:green;color:green" onclick="myFunction()">Press the button to grant access</button>
[...]
```
The button in the code here is black, has a green border and a function. Also the button has a green text on it that says <br/>
>Press the button to grant access

```html
<p style="color:green">There are some easter eggs on this page ;)</p>
[...]
```
This is just a funny text.
```html
<p id="demo"></p>
<script>
document.getElementById("demo").style.color = "green";
function myFunction() {
  var text;
  var hacker = prompt("Password:", ""); 
  switch(hacker){
	  case "imahackerman":
		  text = "ACCESS GRANTED";
		  break;
	  default:
		  text = "ACCESS DENIED"
		  location.href = "index.html"
  }
  document.getElementById("demo").innerHTML = text;
  var button = document.createElement("button");
  button.innerHTML = "Go to the next page";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
  location.href = "dalej.html";;});
}
</script>
```
This is a script! Let's go through the code.
```html
<p id="demo"></p>
<script>
document.getElementById("demo").style.color = "green";
function myFunction() {
```
>function myFunction() 

is pretty important here. It's the function mentioned earlier. When the button is pressed the code here gets executed.
```html
function myFunction() {
  var text;
  var hacker = prompt("Password:", ""); 
```
The command 
>var hacker = prompt("Password:","");

it looks like this<br/>
![alt text](https://cdn.discordapp.com/attachments/802617972098203689/847145820972515397/unknown.png)
<br/>(don't worry that it's in a weird language. it varies for the different browser language {i hope i spelled it right hahaha.....})
```html
  switch(hacker){
	  case "imahackerman":
		  text = "ACCESS GRANTED";
		  break;
	  default:
		  text = "ACCESS DENIED"
		  location.href = "index.html"
  }
```
Ok ok I understand that you can be a little confused here. Ok im gonna try to explain it.</br>
Command switch contains cases that contain code. </br>
When the statement is correct the</br>
>case "imahackerman":
	text = "ACCESS GRANTED";
	break;
code is executed </br>
Ok it's easier to explain it that way.</br>
It's just like if statements in Python or C#. For example:
```python
a = "something"
if a = something:
	print("something")
```
Do you get it now? </br>
Ok cool. Lets move on.
```html
default:
	text = "ACCESS DENIED"
	location.href = "index.html"
```
When the statement is false it execute the code above.
It's just like else statements in Python or C#. For example:
```python
a = "something"
if a = something:
	print("something")
else:
	print("somethingsomething")
```

```html
  document.getElementById("demo").innerHTML = text;
  var button = document.createElement("button");
  button.innerHTML = "Go to the next page";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
  location.href = "dalej.html";;});
}
</script>
```
Basically it just creates a new button to go to the next page. </br>


##Congratulations! You completed the tutorial! </br>
![alt text](https://media.discordapp.net/attachments/503263339615485952/834775761151459408/congrats.png)
</br>
Here is the full code if you want it:   

```html
<html>
<head>
<title>I'm a hackerman</title>
</head>
<body style="background-color:black">
<button style="background-color:black; border-color:green;color:green" onclick="myFunction()">Press the button to grant access</button>
<p style="color:green">There are some easter eggs on this page ;)</p>
<p id="demo"></p>
<script>
document.getElementById("demo").style.color = "green";
function myFunction() {
  var text;
  var hacker = prompt("Password:", ""); 
  switch(hacker){
	  case "imahackerman":
		  text = "ACCESS GRANTED";
		  break;
	  default:
		  text = "ACCESS DENIED"
		  location.href = "index.html"
  }
  document.getElementById("demo").innerHTML = text;
  var button = document.createElement("button");
  button.innerHTML = "Go to the next page";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
  location.href = "dalej.html";;});
}
</script>
</body>
</html>
```

ok you can now [leave](/README.md)

no really you can [leave](/README.md)

[leave](/README.md)

please [leave](/README.md)

man

please stop

leave me alone

## [LEAVE NOW](/README.md)

please

...

ok you asked for it

https://cdn.discordapp.com/attachments/843247611779874827/846816290450178099/i_love_among_us.mp4

##maid spongebob

ok you can [leave](/README.md) now
