export const clientID = "0c664075c9aa4d9a923efa983fa2516d";
export const clientSecret = "971973d2c1ff462a897b56ba421a3730"
export const redirectURI = "http://localhost:3000/";
export const scopes = 'user-library-read user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-read-private user-top-read user-follow-read user-follow-modify user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing';
export const apparentlybean = "31ebxohlfumzgajivauc4plsmcyq";
export const crack_account_id = "cqt10sb9deefos6gq1kn6hkkn";
export const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}