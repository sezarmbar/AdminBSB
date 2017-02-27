import { AdminBSBPage } from './app.po';

describe('admin-bsb App', () => {
  let page: AdminBSBPage;

  beforeEach(() => {
    page = new AdminBSBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
