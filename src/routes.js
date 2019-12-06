import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Charles Loureiro de Deus',
    email: 'charliedeus@gmail.com',
    password_hash: 'password',
  });

  return res.json(user);
});

export default routes;
