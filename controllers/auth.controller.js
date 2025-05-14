import { generateToken } from '../utils/generateToken.js';

export const handleOAuthCallback = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = generateToken(req.user);
  res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
};
