const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})

  describe ('Testcase: проверка работоспособности переходов по ссылкам', () => {
  // переход с главной страницы гороскопов на заданную для ИАР
  it ('Переход по ссылке "Все гороскопы"', () => {
    cy.visit('https://horo.mail.ru')
    cy.get('#portal-menu__submenu > .portal-menu_width > .pm-menu > .pm-menu__center > .pm-menu__center__inner > .pm-toolbar > .js-group > .pm-toolbar__button_first > .js-link > .js-text > .js-text-inner').click()
    cy.contains('Персональные гороскопы')
  })
})

  describe ('Testcase: проверка работоспособности подписки на рассылку гороскопов', () => {
    // ввод несуществующей почты. При вводе новой почты будет другое сообщение!
  it ('Подписка на новости"', () => {
    cy.get('._756dee3138').type('email@domain.com').should('have.value', 'email@domain.com')
    cy.get('#js-subscription-form-default-react > div._25227d98e9 > div.be1b22ad18 > button').click()
    cy.contains('Уже есть подписка')
  })
})

context('Testcase: Ввод дня, месяца и года с переходом и проверкой из файла TestCase+Pairwise', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/horoscope')
  })

  it('TC1: 16 Ноябрь 1992', () => {
    // TC1 - 16 Ноябрь 1992
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(11)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(93)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 ноября 1992 г.')
  })
  it('TC2: 16 Декабрь 1993', () => {
    // TC2 - 16 Декабрь 1993
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(12)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(94)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 декабря 1993 г.')
  })
  it('TC3: 16 Январь 1994', () => {
    // TC3 - 16 Январь 1994
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(01)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(95)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 января 1994 г.')
  })
  it('TC4: 16 Февраль 1995', () => {
    // TC4 - 16 Февраль 1995
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(02)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(96)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 февраля 1995 г.')
  })
  it('TC5: 16 Март 1996', () => {
    // TC5 - 16 Март 1996
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(03)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(97)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 марта 1996 г.')
  })
  it('TC6: 16 Апрель 1997', () => {
    // TC6 - 16 Апрель 1997
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(04)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(98)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 апреля 1997 г.')
  })
  it('TC7: 16 Май 1998', () => {
    // TC7 - 16 Май 1998
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(16)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(05)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(99)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 16 мая 1998 г.')
  })
  it('TC8: 30 Февраль 1999 => 28 февраля 1999', () => {
    // TC8 - 30 Февраля 1999
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(28)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(02)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(100)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 28 февраля 1999 г.')
  })
  it('TC9: 31 Февраля 2000 => 29 февраля 2000', () => {
    // TC9 - 31 Февраля 2000
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(29)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(02)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(101)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 29 февраля 2000 г.')
  })
  it('TC10: 31 Апреля 1985 => 30 апреля 1985', () => {
    // TC10 - 31 Апреля 1985
    cy.get('[data-range="day"] > .dropdown__field > .dropdown__text').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(30)').click()
      .get('.dropdown_month_fix > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div.dropdown.dropdown_month_fix.dropdown_tooltip.dropdown_scrollable.dropdown_scrollable.margin_left_5.js-date__select.dropdown_active > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(04)').click()
      .get('[data-range="year"] > .dropdown__field').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div:nth-child(1) > div > div.p-formitem__content > div > div:nth-child(3) > div.dropdown__box.js-select__options > div > div.suggest__inner.js-select__options__list.js-scrollable__view.dropdown__scroll > div:nth-child(86)').click()
      .get('body > div.layout > div.block.block_darkgray.block_border_bottom > div > div > div > div > div > form > div > div.cell.valign_middle > div > div > button').click()
      .get('.text > :nth-child(3) > .link__text')
      .contains('Дата рождения: 30 апреля 1985 г.')
  })
})