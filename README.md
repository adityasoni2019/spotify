**Problem statement:** 

I’ve been using crack Spotify account for over 3.5 years now. Although it’s the same as Spotify premium, but there’s a constant fear of losing of 800+ liked songs, and other songs in playlist. Because, if an account gets deleted, all the data including songs, fav artists, albums gets deleted with it. Now, what I used to do was, after every month or so, I used to spare some time to manually like the songs of the crack account to my permanent (non-premium) account, so that they get saved.

And, here is where I recognised a problem to be solved.

This project basically helps me with moving my liked songs from my crack account to my permanent account every day, along with suitable alerts.

Here’s the representation of it:

![Alt text](<Spotify - IA - HD.png>)

**Prerequisites:**

1. Spotify developer account of permanent account
    1. client_id
    2. client_secret
    3. refresh_token
2. AWS account
3. Now, ideally, I would also require the Spotify dev account of the crack account, but this isn’t possible since, I can’t verify the email id of the crack account (cause it’s not mine).

**Workflow:**

So, here’s what’s happening.

- I have a playlist in my crack account that I move my liked songs/ other songs that I want to backup. Now, every 24 hours, there’s a fetch call that gets the ids of the last 15 songs of this playlist (assuming that I don’t add more than 15 songs in this playlist in a day). And, then, move those 15 songs to the liked songs of the permanent account.
- And, here’s how it’s moved →
    - After every 24 hours, a new access token is generated using the refresh token that I have for the permanent account.
    - And, using that access token, I can make all these fetch calls.
    - First of all, I get the no. of songs in the playlist (of the crack account) and then get the ids of the last 15.
    - After getting the ids, I move those to the liked songs of my permanent account.
    - After all this is done, I send out an email using AmazonSES notifying if the migration is done or not. And at any point in the process, if there’s an issue anywhere I get an email alerting me about the same.

******************************Some Additional Assets:******************************


Workflow
![Alt text](<AWS WorkFlow.png>)

The CRON job that runs the lambda function.
![Alt text](<CRON Job.png>)

The mail that gets sent to me everyday
![Alt text](<Mail Screenshot.png>)


**Future Scope**

Major bottleneck of this project is that, since, I have a crack account, I can’t create an associated Spotify Dev account, and hence can’t generate a refresh token. And, since I don’t have a refresh token, I can’t generate an access token every 24 hours, hence, can’t really make any direct fetch calls to this account.

Hence, here’s what I wish to do in future.

Host a VM on AWS, that would run a selenium script on it, and using a headless browser it would go to the Spotify’s authorisation page, and get the access token. And, using that access token, I can make fetch calls to that account. And, hence, can directly sync liked songs of both the account.

Thanks!