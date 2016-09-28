import { MAILCLIENTPage } from './app.po';

describe('mail-client App', function() {
  let page: MAILCLIENTPage;

  beforeEach(() => {
    page = new MAILCLIENTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
