FINAL GOAL (I WON'T CHANGE IT NOW): 

#### To be able to copy the liked songs of the source account to the liked songs of the target account after every 24 hours.

## CONSTRAINTS 
1. As of now, I'm thinking to move only the top 50 songs from source to target, assuming that I wouldn't have added more than 50 songs in a day.


Aight, the plan now, is to do this 
1. In the crack account, I've created a playlist, that'll act as the "liked songs". By doing this, I won't have to do the auth of the crack account (which seems to be difficult, casue, I can't generate the clientId, clientSecret and all of that for the crack account, due to obv reasons; it's a crack account). 
2. Now, for the main account, there'll be a fetch all which will get the last 50 songs in the playlist, and add them in the liked songs. And the way it's going to be done is, I'll get the access token, and a refresh token, and using that refresh token, I'll generate a new pair of access and refresh token after every 24 hours. Everything is going to happen on cloud. And, if this works, first of all, CONGRATS. And, second, after this I can figure out how I can sync the liked songs of both the accounts, and not the playlist and the liked songs.
Less gooo. 