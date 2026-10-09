import { test, expect } from '@playwright/test';

test('Adicionar produto, conferir carrinho e aplicar cupom', async ({ page }) => {

  // 1. Abrir a Verzel Store
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  // 2. Localizar a Camiseta Essencial
  const produto = page.getByText('Camiseta Essencial');

  // 3. Validar produto
  await expect(produto).toBeVisible();

  // 4. Adicionar ao carrinho
  await produto
    .locator('..')
    .getByRole('button', { name: /Adicionar ao carrinho/i })
    .click();

  // 5. Abrir carrinho
  await page.getByRole('link', { name: /carrinho/i }).click();

  // 6. Conferir produto no carrinho
  await expect(
    page.getByText('Camiseta Essencial')
  ).toBeVisible();
// 7. Preencher cupom
await page.getByRole('textbox').fill('BEMVINDO10');

// 8. Aplicar cupom
await page.getByRole('button', { name: /aplicar/i }).click();

// 9. Validar que o cupom foi aplicado
await expect(
  page.getByText('BEMVINDO10', { exact: true })
).toBeVisible();

// 10. Finaliza a compra
 await page.getByRole('link', { name: 'Finalizar compra' }).click();

// 11. Preencher nome completo
  await page.getByRole('textbox', { name: 'Nome completo' }).fill('Eva Reobucas Rodrigues');

 // 12. Preencher e-mail
  await page.getByRole('textbox', { name: 'E-mail' }).fill('evareboucasrodrigues@gmail.com');

   // 13. Preencher CEP
  await page.getByRole('textbox', { name: 'CEP' }).fill('12234250');

   // 14. Confirmar pedido
  await page.getByRole('button', { name: 'Confirmar pedido' }).click()
  

});