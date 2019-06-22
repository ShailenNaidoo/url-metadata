import express, { Router } from 'express';
import { getHTML, getManifestJSON } from '../helpers';
import { parser } from '../parser';
import { getManifestUrl } from '../parser/manifest';

const router = Router();

router.get('/', async (req: express.Request, res: express.Response): Promise<void|boolean> => {
  const { url } = req.query;

  if (!url) {
    res.status(400).json({
      status: 400,
      message: 'Please provide a url query parameter',
      example: 'https://webdataapi.co.za/api?url=https://github.com',
    });
    return false;
  }

  const [html, htmlError] = await getHTML(url);

  if (htmlError) {
    res.status(400).json({
      status: 400,
      message: `${htmlError}: ${url}`,
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

  const [html, htmlError] = await getHTML(url);

  if (htmlError) {
    res.status(400).json({
      status: 400,
      message: `${htmlError}: ${url}`,
    });
    return false;
  }

  const getMetadata = parser(html);
  res.json(getMetadata);
});

router.get('/manifest', async (req: express.Request, res: express.Response): Promise<void|boolean> => {
  const { url }: { url: string } = req.query;

  if (!url) {
    res.status(400).json({
      status: 400,
      message: 'Please provide a url query parameter',
      example: 'https://webdataapi.co.za/api/manifest?url=https://github.com',
    });
    return false;
  }

  const [html, htmlError] = await getHTML(url);

  if (htmlError) {
    res.status(400).json({
      status: 400,
      message: `${htmlError}: ${url}`,
    });
    return false;
  }

  const [manifestUrl, manifestUrlError] = getManifestUrl(url, html);

  if (manifestUrlError) {
    res.status(400).json({
      status: 400,
      message: `${url} does not contain a manifest`,
    });
    return false;
  }

  const [manifest, manifestError] = await getManifestJSON(manifestUrl);

  if (manifestError) {
    res.status(400).json({
      status: 400,
      message: `${manifestError}: ${manifestUrl}`,
    });
    return false;
  }

  res.json(manifest);
});

export const api = router;
