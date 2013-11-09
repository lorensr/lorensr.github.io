---
layout: post
title:  "Quick Options"
---

Google Chrome just came out with an API for the omnibox (aka address bar). After using Paul Kinlan's Quick Enable/Disable extensions, I noticed that opening [Vimium](http://vimium.github.io/)'s options page took far too long! So I made this extension:

[Quick Options](https://chrome.google.com/webstore/detail/pnlefdfohlfcepdipnoppglhjhlofnhl)

It opens the options page of an extension or app from the address bar. Type 'opt', a space or tab, the name of the extension or app, and enter. If you enter a second space or enter an extension/app that does not have an options page, it opens the extension management page (chrome://extensions).

This is my first time doing much with Javascript, and I like it! Certainly not as much as Ruby, but definitely more than some other languages. I don't like CamelCase as much, but it's not the end of the world :-). I will need to sit down and read through a good book on the language before I do too much more with it. Resorting to Google every other line for syntax or function names is suboptimal.

Another thing that is suboptimal is the omnibox API! I think it would be better if a single extension could respond to multiple keywords. I'd like to make an extension that can do a number of things based on which keyword you start out with, such as opt -> options, en -> enable, sw -> switch tabs, q -> search quora, etc. Currently the developer has to create, upload, and publish each individually, and the user has to download and install each individually. It would also be nice if the user could change the keywords. I created a Chromium feature request, so if you agree, please star the issue:

<http://code.google.com/p/chromium/issues/detail?id=75890>
