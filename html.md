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

it looks like this
![alt text](https://cdn.discordapp.com/attachments/802617972098203689/847145820972515397/unknown.png)
(don't worry that it's in a weird language. it varies for the different browser language{i hope i spelled it right hahaha.....})
```html
```
```html
```
```html
```




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
	  case "milk":
	          text = "ACCESS GRANTED"
		  location.href = "https://media.discordapp.net/attachments/802617972098203689/836196001974059018/milkmemewith.jpg"
		  break;
	  case "twitter":
	          text = "ACCESS GRANTED"
		  location.href = "https://twitter.com/dallasfrompd"
		  break;
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
