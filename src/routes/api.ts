import express, { Router } from 'express';
import { getHTML } from '../helpers';
import { parser } from '../parser';

const router = Router();

router.get('/', async (req: express.Request, res: express.Response): Promise<void|boolean> => {
  if (!req.query.url) {
    res.status(400).json({
      status: 400,
      message: 'Please provide a url query parameter',
      example: 'https://webdataapi.co.za/api?url=https://github.com',
    });
    return false;
  }

  const [html, error] = await getHTML(req.query.url);

  if (error) {
    res.status(400).json({
      status: 400,
      message: `${error}: ${req.query.url}`,
    });
    return false;
  }

  const getMetadata = parser(html);
  res.json(getMetadata);
});

router.post('/', async (req: express.Request, res: express.Response): Promise<void|boolean> => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({
      status: 400,
      message: 'Please provide a url in your JSON data',
    });
    return false;
  }

  const [html, error] = await getHTML(url);

  if (error) {
    res.status(400).json({
      status: 400,
      message: `${error}: ${req.query.url}`,
    });
    return false;
  }

  const getMetadata = parser(html);
  res.json(getMetadata);
});

export const api = router;
