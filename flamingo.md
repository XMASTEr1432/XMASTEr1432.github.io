# **flamingo.py**
###### Woah you got here... <br/>
###### cool<br/>
First I need to explain few things. <br/>
>What is *flamingo.py?* Why did you make it?

that's what you are probably thinking.<br/>
**flamingo.py** is a test project for a library called ***Tkinter***.<br/>
It's called *flamingo.py* because it has a flamingo in it. (heh)<br/>
I made it to learn how to use **Tkinter** so *it's just some basic stuff*.<br/>
So let's get to the code shall we?<br/>

>wait wait wait but how to install tkinter bro?<br/>

...<br/>
o yeah i forgot about that<br/>
as its states on [tkinter documentation](https://docs.python.org/3/library/tkinter.html)

>*The tkinter package (“Tk interface”) is the standard Python interface to the Tk GUI toolkit.*<br/>
>*Both Tk and tkinter are available on most Unix platforms, as well as on Windows systems.*<br/>
>*(Tk itself is not part of Python; it is maintained at ActiveState.)*<br/>

in other words you should have it installed already with python<br/>
After getting that out of the way let's just get straight to code<br/>

```python
from tkinter import * 
```
- You need to import tkinter library<br/>
```python
a = Tk()
a.geometry("400x400")
```
- *a.geometry("400x400")* is for the window size<br/>
```python
a.resizable(width=False, height=False)
a.configure(bg="pink", cursor="heart")
```
Some settings for the window <br/>
- *a.resizable(width=False, height=False)* is for disabling an option for user to risize the window<br/>
- *a.configure(bg="pink", cursor="heart")* changes background to pink (*(bg="pink",*) and changes the cursor look (*cursor="heart")*)
```python
img = PhotoImage(file="flamingo.png")
```
- Here you need an image file called flamingo.png<br/>
- If you are writing this code and you want flamingo.png you can get it from [here](https://github.com/XMASTEr1432/python-code/blob/main/flamingo%20app/flamingo.png) <br/>
```python
canvas = Canvas(a, width = 400, height = 400, bg = "pink",bd=0, highlightthickness=0,)
```
- [The Canvas is a rectangular area intended for drawing pictures or other complex layouts. You can place graphics, text, widgets or frames on a Canvas.](https://www.tutorialspoint.com/python/tk_canvas.htm)<br/>
- Lets see what things we change<br/>
- *(a,* is the *a = Tk()* command from ealier<br/>
- *width = 400,* it changes the width of the image<br/>
- *height = 400,* it changes the height of the image<br/>
- *bg = "pink",* color of the background in the canvas<br/>
- *bd = 0,* the border size<br/>
```python      
canvas.pack()
```
- Create the canvas<br/>
```python
canvas.create_image(20,20,anchor=NW, image=img) 
```
- Change the place where the canvas is created<br/>
```python
a.title("flamingo") ## this changes the window title
```
- Change the window title<br/>
```python 
a.iconphoto(False, img)
```
- Change the icon (*img* is a variable from earlier(*img = PhotoImage(file="flamingo.png")*))<br/>
```python 
a.mainloop() ## you need this to have a window running
```
- You need this to keep the window running<br/>





## That's it! You made it!
![alt text](https://media.discordapp.net/attachments/503263339615485952/834775761151459408/congrats.png)   


you can [leave](/README.md) or something

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

![alt text](https://media.discordapp.net/attachments/459805549979238401/829692054313107466/20210407_112038.jpg?width=812&height=609)

##maid spongebob

ok you can [leave](/README.md) now
