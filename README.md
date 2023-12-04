1. Now that I think of it, frontend is not at all required. It can be completely a backend proejct. 


This is a change on the expo branch.

### FEATURES

1. First let whoever come on the website login with their spotify account. And, be able to log out (and login from a different account) as well, it's weirdly not working on exportify.
2. Show their playlist. As of now, even the names is fine. 
3. Figure out why I'm not able to access private playlist account - on hold for now - on hold, might be solved, not sure. - sorted (but not on my own 😭, will have to look into it, to see what's happening)
4. (IN THE FUTURE) add pagination for the playlist, cause there's a limit on that as well. - hmm, this is good. 
5. Figure out, why I'm not able to access the crack account - this is top priority. - sorted (but not on my own 😭, will have to look into it, to see what's happening)

--- Just do these 2 things first.

^ Everything until here is done. 

6. Aight, so this is the point when I implement the original functionality of the project. 
    a. Sync up 2 spotify accounts. What this means is that I define 2 accounts. Source and Target. The liked songs of the source automatically get copied to the liked songs of the target account, after a pre-defined time period.

### CHALLENGES WITH AUTOMATION

1. First of all, there's login and logout of 2 accounts. 
    a. For the time being, what I can do is try to hit the get liked songs API without logging in from the account that I want the data of, if that's possible, I think I'll be able to do something about it. (Cool, I'll try this now)
    b. 
2. Running the same thing after a certain time period & taking care of access tokens of both the accounts in the process. 





#### THINGS TO KEEP IN MIND. 

1. I found this written on this (https://developer.spotify.com/documentation/web-api/tutorials/getting-started) page. And, I think it's related to being able to login using some different account. 

    This tutorial makes use of the client credentials grant type to retrieve the access token. That works fine in scenarios where you control the API call to Spotify, for example where your backend is connecting to the Web API. It will not work in cases where your app will connect on behalf of a specific user, for example when getting private playlist or profile data.


### Side Notes

1. okay, so I now know how to fetch the whole thing. (using offset). Now, just have to do the thing -> login, and show the playlists. 
2. One of the ways to make the logout button work properly in the redirectURI, like, we can change the page, and then redirect the page back to the same page.


---------

To dos 

1. When we click on export, fetch all the songs in it, and not just the top 100.


### Interesting Stuff

    `return (`
    `    <div >`
    `        <div onClick={() => handleClick(0)}> click`
    `        </div>`
    `    </div>`
    `);`

This is how you call a function with parameter values. 





### AFTER A VERY LONG TIME. 

So, right now, what can be done in this project is that I can login from any account and fetch any of data (liked songs, playlists, yadi yada)

LET'S FINALIZE THIS FUNCTIONALITY. I WON'T CHANGE IT NOW. THIS IS WHAT I WANT THE END GOAL TO BE.


1. What I wish to do is, now, to sync 2 accounts. 
    What I mean by that is I want to be able to sync the liked songs of 1 account with the liked songs of the second. 



### IN THIS COMMIT

1. Refactored some code. 
2. Now able to add random songs to liked songs using their ids. 
3. Able to save the IDs of liked songs in a context variable. 


### UP NEXT
1. Have to automate the process of putting the IDs of the liked songs of the source in the fetch (PUT) of the target.