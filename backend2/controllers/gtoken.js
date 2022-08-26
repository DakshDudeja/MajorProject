const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('../credentials.json');
try{
    const code = '4/0AdQt8qhkEAQwswe1DPkblG3JI41q_UcyNrLn-3DM5E0me9xltH777pqadGZs45NbbEO36w';
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    
    oAuth2Client.getToken(code).then(({ tokens }) => {
      const tokenPath = path.join(__dirname, 'token.json');
      fs.writeFileSync(tokenPath, JSON.stringify(tokens));
      console.log('Access token and refresh token stored to token.json');
    })
    .catch((err)=>{
        console.log(err)
    })
}
catch(err){
    console.log(err)
}
// Replace with the code you received from Google
