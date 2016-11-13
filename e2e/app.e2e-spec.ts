import { AalaMobilePage } from './app.po';

describe('aala-mobile App', function() {
  let page: AalaMobilePage;

  beforeEach(() => {
    page = new AalaMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
