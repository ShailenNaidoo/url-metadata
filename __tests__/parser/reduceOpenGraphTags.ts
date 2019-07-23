import { reduceOpenGraphTags } from '../../parser';

const openGraphTags = [
  { site_name: 'GitHub' },
  { type: 'object' },
  { image: 'https://avatars3.githubusercontent.com/u/46425312?s=400&v=4' },
  { title: 'webdataorg/webdata-api' },
  { description: 'A free online REST API for getting any websites metadata relating to the Open Graph Protocol and more - webdataorg/webdata-api' },
  { url: 'https://github.com/webdataorg/webdata-api' },
];

describe('reduceOpenGraphTags', (): void => {
  test('should return object which contains specific keys', (): void => {
    const reducedOpenGraphTags = openGraphTags.reduce(reduceOpenGraphTags, {});

    expect(reducedOpenGraphTags).toHaveProperty('site_name');
    expect(reducedOpenGraphTags).toHaveProperty('type');
    expect(reducedOpenGraphTags).toHaveProperty('image');
    expect(reducedOpenGraphTags).toHaveProperty('title');
    expect(reducedOpenGraphTags).toHaveProperty('description');
    expect(reducedOpenGraphTags).toHaveProperty('url');
  });
});
