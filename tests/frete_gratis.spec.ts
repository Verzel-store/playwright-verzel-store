import { test, expect } from '@playwright/test';

test('Comprar tênis e meias', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

 await page.getByRole('article', { name: 'Tênis Casual Urbano' })
    .getByRole('button')
    .click();

 await page.getByRole('article', { name: 'Kit 3 Pares de Meias' })
    .getByRole('button').click();

   await page.getByRole('link', { name: /Carrinho/i }).click();

await page.getByRole('link', { name: /Finalizar compra/i
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