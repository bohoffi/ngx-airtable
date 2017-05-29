import { LibPage } from './app.po';

describe('lib App', () => {
  let page: LibPage;

  beforeEach(() => {
    page = new LibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
