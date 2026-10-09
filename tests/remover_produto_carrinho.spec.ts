    import { test, expect } from '@playwright/test';
    
    test('Comprar tênis e meias', async ({ page }) => {
    
      await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
    
     await page.getByRole('article', { name: 'Tênis Casual Urbano' })
        .getByRole('button')
        .click();
     await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
  await page.getByRole('button', { name: 'Remover Tênis Casual Urbano' }).click();
    
    });