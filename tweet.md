# tweet_tweet.py

Let's say you want to create a twitter bot but you dont know how.<br/>
![alt text](https://i.kym-cdn.com/entries/icons/original/000/027/174/veggie.jpg)

emmm...<br/>
Ok, first I need to clarify what we are doing here. So...you know that comments that people make like

<day (random number) of asking for (random thing) for example ![alt text](https://media.discordapp.net/attachments/503263339615485952/834783557893357568/unknown.png)

yeah something like that.<br/>
We will make that but as a bot.<br/>
Sounds fun right?<br/>
Ok so lets get started.<br/>
But wait<br/> 
I'm not that good at teaching so I for you to check the guide [**here**](https://learn.g2.com/how-to-make-a-twitter-bot) 
because it explains it better but you should only read to the 4 chapter but if you insist you can read it all.

## First you need to be a [twitter developer.](https://developer.twitter.com/)<br/>

You need one to access twitter API and have tokens and other crap. (hehehehe)<br/>
Also remember to make a new twitter account if you dont want to post on your main account 😉<br/>

After doing that make a new app:

![alt text](https://learn.g2crowd.com/hs-fs/hubfs/create-twitter-app.png?width=502&name=create-twitter-app.png)
###### I don't have a pic for that so I copied it from the guide above

Next you need to get some keys. <br/>
You can find them here:<br/>

![alt text](https://media.discordapp.net/attachments/503263339615485952/834784784542072832/unknown.png?width=869&height=609)

And here:<br/>

![alt text](https://media.discordapp.net/attachments/503263339615485952/834785406670602250/unknown.png?width=891&height=609)

Copy all of those to the txt file you'll need them later<br/>
While we are on the bot settings change something there:

![alt text](https://media.discordapp.net/attachments/503263339615485952/834785491264995338/unknown.png?width=848&height=609)

Now we need to to do some coding (heck yeah)<br/>

First go to your terminal (you need [pip](https://pypi.org/project/pip/) for it) and write:
```bash
$ pip install tweepy
```
After you installed tweepy go to your editor and write some code (yay!)<br/>
```python 
import tweepy

consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)
TOKEN = ''

api.update_status("test")
```

Fill the following:
```python 
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""
```
and 
```python
TOKEN = ''
```
with the keys that you wrote in the text file.

The *api.update_status("test")* is great for you to test if the app is working.

Run the app and check your twitter account!<br/>
Do you see the tweet "test" there?<br/>
Great!<br/>
Remember that you cant tweet the same thing twice so you have to change the *api.update_status("test")* command to something else like *api.update_status("OwO")* or something<br/>

## this tutorial isnt finished yet so wait a bit :)







