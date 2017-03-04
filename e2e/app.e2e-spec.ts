import { HatvidsPage } from './app.po';

describe('hatvids App', () => {
  let page: HatvidsPage;

  beforeEach(() => {
    page = new HatvidsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
