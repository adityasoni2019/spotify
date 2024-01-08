const express = require('express');
const queryString = require('querystring');

const fetch = require('node-fetch');

var client_id = '0c664075c9aa4d9a923efa983fa2516d';
var client_secret = "971973d2c1ff462a897b56ba421a3730"
var redirect_uri = 'http://localhost:3000/callback';

var app = express();

app.get('/login', function (req, res) {

    var state = 'asd';
    var scope = 'user-library-read user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-read-private user-top-read user-follow-read user-follow-modify user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing';

    res.redirect('https://accounts.spotify.com/authorize?' +
        queryString.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

app.get('/callback', async function (req, res) {
    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state === null) {
        res.redirect('/#' +
            queryString.stringify({
                error: 'state_mismatch'
            }));
    } else {
        var authOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: queryString.stringify({
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            }),
        };

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
            const data = await response.json();

            if (response.status === 200) {
                var access_token = data.access_token;
                var refresh_token = data.refresh_token;

                // Now you have the access_token and refresh_token, you can use them to make Spotify API requests
                // Store these tokens securely and use them for future API requests

                res.redirect('/#' +
                    queryString.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
                console.log('access token: ')
                console.log(access_token);
                console.log('refresh token: ')
                console.log(refresh_token);
            } else {
                res.redirect('/#' +
                    queryString.stringify({
                        error: 'invalid_token'
                    }));
            }
        } catch (error) {
            console.error('Error during token exchange:', error);
            res.redirect('/#' +
                queryString.stringify({
                    error: 'server_error'
                }));
        }
    }
});

app.listen('3000');

