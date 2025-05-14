import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { findOrCreateUser } from '../services/authServices.js';
import { configDotenv } from 'dotenv';
configDotenv()
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await findOrCreateUser({
        provider: 'google',
        providerId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        avatar: profile.photos[0].value,
      });
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  })
);

// passport.use(
//   new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: '/auth/facebook/callback',
//     profileFields: ['id', 'emails', 'name', 'picture.type(large)'],
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       const email = profile.emails?.[0]?.value || `${profile.id}@facebook.com`;
//       const name = `${profile.name.givenName} ${profile.name.familyName}`;
//       const avatar = profile.photos[0].value;

//       const user = await findOrCreateUser({
//         provider: 'facebook',
//         providerId: profile.id,
//         email,
//         name,
//         avatar,
//       });
//       done(null, user);
//     } catch (err) {
//       done(err, null);
//     }
//   })
// );
