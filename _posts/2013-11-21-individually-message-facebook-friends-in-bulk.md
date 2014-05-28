---
layout: post
---

UPDATE: As of April 2014, due to a change in the Facebook Graph API, the facebook-emails program no longer works. It will only output your friends who have used the Graph API Explorer, which is probably 0-1% of your full friend list! For more information, see the second item under "Permissions" here: https://developers.facebook.com/docs/graph-api/reference/v2.0/user/friends

How to reach all your Facebook friends in an effective yet unobtrusive manner is a common problem. The usual solution is to create a group or event and invite all you friends to it. You've probably had a "Lost my digits" invite from a friend who has a new phone and lost their contact list. The limitation of this method is the short message (it has to be contained within the group or event title) and the fact that some people summarily ignore all group/event invites. While you can send a message to a group of people, you may run into a recipient limit, and you have all the problems of Facebook group messaging. The default is reply all, so everyone is notified when someone responds, which you almost always don't want to happen, in particular with larger groups. You then get a situation in which people race to leave the conversation before they are annoyed with further notifications of other people leaving. Facebook tried to fix this problem with "muting" conversations, and while that does fix the notification problem, the conversation still keeps popping up as unread in your inbox.

I wanted to find a way to send a short individual message to each of my Facebook friends in order to promote my [Kickstarter campaign](http://www.kickstarter.com/projects/lorensr/payo-paleo-mayo) for a healthy mayonnaise. I started with Facebook's Chat API, and tried to use XMPP libraries in Ruby and Javascript to automate individual chat messages to my whole Facebook contact list. While it's definitely possible, I was unable to get any of the libraries to work without modification, which I did not want to take the time to do. It next occurred to me that while you can't use the Facebook API to retrieve the email addresses of your friends, you can use it to retrieve the usernames of your friends, and Facebook recently added support for sending messages through email, using the address [username]@facebook.com. So I wrote a short program that connected to the API, retrieved a list of usernames, and added "@facebook.com" to each. You can then paste the list into the bcc field of an email, and your email will appear as a direct individual message to each of your friends on Facebook. For full instructions, see the [code repository](https://github.com/lorensr/facebook-emails). This is my first package published to npm, and it is a pleasantly simple process.

One word of warning: bothering people can cause them to defriend you. I lost 72 friends to [Payo](http://www.kickstarter.com/projects/lorensr/payo-paleo-mayo):

```
$ wc -l before after
    1891 before
    1819 after
```
