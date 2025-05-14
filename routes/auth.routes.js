import express from 'express';
import passport from 'passport';
import { handleOAuthCallback } from '../controllers/auth.controller.js';

const router = express.Router();

// Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), handleOAuthCallback);

// Facebook
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), handleOAuthCallback);

export default router;
