1. Aight, so here's the tea. 

- Till this point, I'm able to fetch a user's saved albums (not liked songs, but saved albums). What this means is, any album that they have specifically liked/saved to their profile. 
    - It could be something like, Billie Eilish's "Happier than ever" etc.



#### PROCESS OF DOING IT. 

1. Here's the process of fetching the user's saved albums.
    - First of all, they need a spotify dev account (I'm not talking about real life, I'm talking about what I've done until now, which we can say is sort of dev env).
    - And, now we'll need their clientId, clientSecret, redirectURI, scopes (which is very necessary).
        - Scopes are basically user permissions (or in this case, dev permissions. Like, how much of a user's data can the dev fetch). 
    - Aight, so, now, we'll need to authorize them. Which we can do using this link - 
        - `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${(redirectURI)}&scope=${(scopes)}&response_type=token`
        - What this does is, it sends back, access token in some way. And the way to access that access token is this - 
            - `if (window.location.hash && window.location.hash.includes('access_token')) {`
            `const accessToken = getAccessTokenFromURL();`
            `console.log("this is the access token with the scope" ,accessToken);`
            `setAccessTokenScope(accessToken);`
            `}`

            You'll find all this in the AuthorizationPage.js
    
    - Now, after we've got the scopes specified access tokens, we can start fetching data.
    - And the way to do that is, the fetchData() function in the `GetLikedSongsComponent` (although, it's not really getLikedSongs, it's just get the user's saved albums).

And, viola.



### WHAT NEXT?

1. Up until this point, we can add songs from a playlist to the backup account. 
    CONSTRAINTS: 
        a. It'll only add the top 50 songs from the playlist. 
        b. Users need dev account. 
        c. Access tokens expire after 1 hour. (Maybe I can find a way out of it, or maybe I can do the "on the project access token retrieval. Hmm.. this sounds interesting) 



###### On the crack account side.

1. I can keep adding songs to liked songs. 
2. Then, I need to manually add those songs in a playlist in that account itself. 

###### On the backup account side. 

1. Here, I can fetch songs from that playlist, and add them to the liked songs of the backup account. 
2. After this, I can empty the playlist, but, wait, for that I'll need a dev account of the crack account, which I don't have, I'm realising now. Hmm...
    a. I think we can figure out a way around this. Like, we can find out a way to just fetch the latest 50 songs in that playlist. Hmmm... 

Anyways, so yeah, this is the plan of action.


### CONSTRAINTS

1. We can only fetch, and move 50 songs at a time.
    a. Wait, I don't think it's going to work for all the users. 
    b. Cause, in my case, I already had songs in the backup account, so it kinda worked out. But, if someone has to move more than 50 songs at once, I don't know how are they going to do it.  
        i. one of the ways is that as we move songs to the liked songs of the main account, we can delete them from the playlist we added it from. But another constraint here is that, it won't work for everyone, cause, I don't really have a dev account for the crack account, since it's an illegal account. Hmm... So, maybe I'll have to pivot this project to something else? 👀👀

2. I will not be able to get a dev account for crack account, cause it's crack lol.  


------------------------------------------------------------------------------------


#### TASKS & SUB TASKS

1. Make the authentication page on the app itself. Make it so that apparent users don't have to do anything in the code. Ohh, it's already there. WAIT, THIS IS ALREADY THERE. LOL. I'LL HAVE TO CHECK HOW. HAHA.
    a. Find out why is the auth thing working.

okay, so, what's next?






## IN THIS COMMIT

1. I'm able to fetch songs from a random playlist, but not able to add them in the backup account's liked songs. The (broken) logic of adding songs to the backup account's liked songs is written in the "AddSongs.js". 