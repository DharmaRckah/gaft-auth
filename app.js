// app.js
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectDB from './config/db.js'; 
import './config/passport.js'; 

dotenv.config();

const app = express();


app.use(express.json());


app.use(session({ secret: 'session_secret', resave: false, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());


connectDB(); 

app.use('/auth', authRoutes);

export default app;
