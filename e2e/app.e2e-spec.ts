import { CodeandoAngularPage } from './app.po';

describe('codeando-angular App', () => {
  let page: CodeandoAngularPage;

  beforeEach(() => {
    page = new CodeandoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
