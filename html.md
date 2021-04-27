# **html meme thing or something**
###### Oh hey... <br/>

So first of all you could ask something like this

> why did you make it?

In short, it's my homework but I made it but with more stuff that I didn't learn on the lessons.

> ........
> then why would you even show that on this website?

........<br/>
idk maybe because im bored<br/>

## So let's get started
```html

```
```html
```
```html
```
```html
```
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
<button style="background-color:black; border-color:green;color:green" onclick="myFunction()">Kliknij aby wpisać hasło.</button>
 </a>
<p id="demo"></p>
<script>
document.getElementById("demo").style.color = "green";
function myFunction() {
  var text;
  var hacker = prompt("Wpisz komendę tutaj", ""); 
  switch(hacker) {
    case "imahackerman":
      text = "ACCESS GRANTED";
      break;
	default:
	text = "ACCESS GRANTED";
	location.href = "index.html";
  }
  document.getElementById("demo").innerHTML = text;
  var button = document.createElement("button");
  button.innerHTML = "Przejdź do następnej strony";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
  location.href = "dalej.html";;});
}
</script>
</body>
</html>
```
