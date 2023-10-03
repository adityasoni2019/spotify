export const clientID = "0c664075c9aa4d9a923efa983fa2516d";
export const clientSecret = "971973d2c1ff462a897b56ba421a3730"
export const redirectURI = "http://localhost:3000/";
export const accessToken = "BQBC_5XifZDbXHJv8ufLYSMIq03PfVVdLByDUQXEgvt4MSeAzpDV1wF4ov3A-egxy5SMtkfd0YXvI5xadLYCg-g98CiPZMbAbe87uGoq6JEx7jrTQAjOn4lAJ05VANRMLYUnnS-CqMAYmCKMtQEvKlTBjvZYOVHXF_76POmg68UlhfcoR4oMmCA9-QEfF7D-_yYvTViw-N2f_qZeTp1ilcV7S402WaWID0_EDxf2odAtaHblW2cI3mALTR6Yo2vUpvnzEHyKaH9BWCNU8xri9xqJFUhcizafVUGA8NXaLMXfOx_h-BCFj0jmD4Gdjngc1VMwXTE";
export const scopes = 'user-library-read user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-read-private user-top-read user-follow-read user-follow-modify user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing';
// export const scopes = "playlist-read-private playlist-read-collaborative"

export const generateRandomString = (length)=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    
    return randomString;
}