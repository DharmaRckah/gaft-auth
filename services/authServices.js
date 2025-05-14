import User from '../models/user.model.js';

export const findOrCreateUser = async ({ provider, providerId, email, name, avatar }) => {
  let user = await User.findOne({ provider, providerId });

  if (!user) {
    user = await User.create({
      provider,
      providerId,
      email,
      name,
      avatar,
    });
  }

  return user;
};
