import * as queryString from 'query-string';

const stringifiedParams = queryString.stringify({
  client_id:
    '83820396076-r5i73dssp04iisrqmct8bi61fiaalphn.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:3001/auth/google',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

export const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
