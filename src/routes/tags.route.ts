import { Router } from 'express';
import { prisma } from '../utils/db';
import expressAsyncHandler from 'express-async-handler';

const tagsRoute = Router();

tagsRoute.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const tags = await prisma.tag.findMany();
    res.send(tags);
  })
);

tagsRoute.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const { name } = req.body;
    const newTag = await prisma.tag.create({
      data: {
        name,
      },
    });

    res.send(newTag);
  })
);

export { tagsRoute };
