import { MyRestaurantAppPage } from './app.po';

describe('my-restaurant-app App', () => {
  let page: MyRestaurantAppPage;

  beforeEach(() => {
    page = new MyRestaurantAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
