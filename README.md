🛒 Verzel Store | Automação de Testes com Playwright
obre o Projeto

Este projeto tem como objetivo automatizar os principais fluxos da aplicação Verzel Store, utilizando Playwright e TypeScript para validação de funcionalidades críticas do e-commerce.

A automação cobre cenários de:

Gerenciamento de produtos no carrinho
Aplicação de cupons de desconto
Cálculo de frete
Checkout
Remover produto
Finalização de pedidos
Regras de negócio da aplicação

🛠️ Tecnologias Utilizadas
Playwright
TypeScript
Node.js
Git
GitHub Actions (CI/CD)

⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

Node.js 18 ou superior
NPM instalado
Git configurado

Verificar versões instaladas:
node -v
npm -v
git --version


🚀 Instalação

1-Clonar o repositório

git clone https://github.com/seu-usuario/playwright-verzel-store.git

Acessar o diretório
cd playwright-verzel-store

Instalar os navegadores do Playwright
npx playwright install

Executar toda a suíte
npx playwright test

Executar um arquivo específico
 npx playwright test tests/remover_produto_carrinho.spec.ts --headed

 npx playwright test tests/compra.spec.ts --headed

 npx playwright test tests/verzel-store.spec.ts --
 
npx playwright test tests/frete_gratis.spec.ts --headed

 npx playwright test tests/cupom_invalido.spec.ts --headed

Abrir relatório HTML

Após a execução dos testes:
npx playwright show-report

O relatório apresenta:

Testes aprovados
Testes falhados
Evidências
Tempo de execução
Stack Trace
Logs da execução

Cenários Automatizados
Produtos

CT001 - Adicionar produto ao carrinho

Objetivo: Validar a inclusão de um produto no carrinho.

Resultado esperado:

Produto adicionado com sucesso.
Contador do carrinho atualizado.

CT002 - Adicionar todos os produtos

Objetivo: Validar a inclusão de todos os produtos disponíveis.

Resultado esperado:

Todos os produtos adicionados ao carrinho.
Quantidade de itens exibida corretamente.

Carrinho
CT003 - Remover produto do carrinho

Objetivo: Validar a remoção de um produto.

Resultado esperado:

Produto removido da lista.
Valores recalculados corretamente.

CT004 - Esvaziar carrinho

Objetivo: Validar a funcionalidade de esvaziar carrinho.

Resultado esperado:

Todos os produtos removidos.
Carrinho vazio.
Subtotal igual a R$ 0,00.

CT005 - Aplicar cupom inválido

Resultado esperado:

Exibição de mensagem de erro.
Nenhum desconto aplicado.

Autora

Eva Rebouças Rodrigues
 Cargo: Analista de Teste Júnior