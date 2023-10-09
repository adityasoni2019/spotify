1. Now that I think of it, frontend is not at all required. It can be completely a backend proejct. 


This is a change on the expo branch.

### FEATURES

1. First let whoever come on the website login with their spotify account. And, be able to log out (and login from a different account) as well, it's weirdly not working on exportify.
2. Show their playlist. As of now, even the names is fine. 

--- Just do these 2 things first.


#### THINGS TO KEEP IN MIND. 

1. I found this written on this (https://developer.spotify.com/documentation/web-api/tutorials/getting-started) page. And, I think it's related to being able to login using some different account. 

    This tutorial makes use of the client credentials grant type to retrieve the access token. That works fine in scenarios where you control the API call to Spotify, for example where your backend is connecting to the Web API. It will not work in cases where your app will connect on behalf of a specific user, for example when getting private playlist or profile data.


### Side Notes

1. okay, so I now know how to fetch the whole thing. (using offset). Now, just have to do the thing -> login, and show the playlists. 


---------

1. What's not working right now is when I download a file, only the top 100 songs are in the csv, I want all the 750 to be in it.