import { serialize } from 'cookie';

export default async (req, res) => {
    /* remove cookies from request header */
    res.setHeader('Set-Cookie', [
      serialize('auth', null, {
        maxAge: -1,
        path: '/',
      }),
    ]);
  
    res.end();
  }