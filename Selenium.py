# import spotipy
# from spotipy.oauth2 import SpotifyOAuth

# client_id = '0c664075c9aa4d9a923efa983fa2516d'
# client_secret = '971973d2c1ff462a897b56ba421a3730'
# redirect_uri = 'http://localhost:3000/'

# # export const clientID = "0c664075c9aa4d9a923efa983fa2516d";
# # export const clientSecret = "971973d2c1ff462a897b56ba421a3730"

# # Create Spotipy instance with authentication
# sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri, scope='user-library-read'))

# # Test: Fetch user's playlists
# playlists = sp.current_user_playlists()
# print("Your playlists:")
# for playlist in playlists['items']:
#     print(f"  {playlist['name']}")

# # Test: Fetch user's top tracks
# top_tracks = sp.current_user_top_tracks()
# print("\nYour top tracks:")
# for track in top_tracks['items']:
#     print(f"  {track['name']} by {track['artists'][0]['name']}")


import spotipy
from spotipy.oauth2 import SpotifyOAuth

client_id = '0c664075c9aa4d9a923efa983fa2516d'
client_secret = '971973d2c1ff462a897b56ba421a3730'
redirect_uri = 'http://localhost:3000'

# sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri, scope='user-library-read'))

# # Get access token
# access_token = sp.auth_manager.get_access_token()
# print(f'Access Token: {access_token}')


# import spotipy
# from spotipy.oauth2 import SpotifyOAuth

# client_id = 'your_client_id'
# client_secret = 'your_client_secret'
# redirect_uri = 'http://localhost:8888/callback'  # Update with your chosen redirect URI

# Create Spotipy instance with authentication
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri, scope='user-library-read'))

# Test: Fetch user's profile
user_profile = sp.current_user()
print("\nYour Spotify profile:")
print(f"  Display Name: {user_profile['display_name']}")
print(f"  ID: {user_profile['id']}")
print(f"  Email: {user_profile['email']}")
