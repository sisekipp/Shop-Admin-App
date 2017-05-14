import { TobaccoShopAdminPage } from './app.po';

describe('tobacco-shop-admin App', () => {
  let page: TobaccoShopAdminPage;

  beforeEach(() => {
    page = new TobaccoShopAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
