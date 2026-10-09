import { test, expect } from '@playwright/test';

test('Compras com o cupom inválido', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  await page.getByRole('article', { name: 'Camiseta Essencial' })
    .getByRole('button')
    .click();


  await page.locator('li:nth-child(7) article .botao')
    .click();

  await page.locator('li:nth-child(8) article .botao')
    .click();

  await page.getByRole('link', {
    name: /Carrinho/i
  }).click();

  await page.getByRole('textbox').fill('COMPRA00');
  
  await page.getByRole('link', {
    name: /Finalizar compra/i
  }).click();

  await page.getByRole('textbox', {
    name: 'Nome completo'}).fill('Maria Aparecida');

  await page.getByRole('textbox', {
    name: 'E-mail'}).fill('mariaaparecida@gmail.com');

  await page.getByRole('textbox', {
    name: 'CEP' }).fill('12232400');

  await page.getByRole('button', {
    name: 'Confirmar pedido'}).click();

});