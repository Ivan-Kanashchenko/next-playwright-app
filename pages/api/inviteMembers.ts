import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

import { inviteMembersFlow } from '@/utils/inviteMembersFlow';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  origin: '*',
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  try {
    const body = JSON.parse(req.body);

    if (req.headers.origin !== body.origin) {
      res.status(500).json({ error: 'no way :)' });
      return;
    }

    const {
      options: { inviteRequest },
    } = body;

    await inviteMembersFlow(body, inviteRequest);

    res.status(200).json({ message: 'done!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
    console.log('error', error);
  }
}
