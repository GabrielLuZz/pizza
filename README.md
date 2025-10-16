## Português

Descrição
- Projeto front-end estático de catálogo de pizzas com carrinho, feito em HTML, CSS e JavaScript puro. As pizzas são carregadas do arquivo `pizzas.js`. Ao clicar em uma pizza, abre-se um modal para escolher tamanho e quantidade; depois, o item é adicionado ao carrinho com cálculo de subtotal, desconto de 10% e total. Não há backend ou persistência de dados.

Recursos principais
- Lista de pizzas gerada a partir de `pizzas.js`.
- Modal com detalhes, seleção de tamanho (Pequena, Médio, Grande) e controle de quantidade.
- Carrinho lateral com aumento/diminuição de quantidade, remoção de itens e cálculo automático de valores.
- Desconto fixo de 10% aplicado sobre o subtotal.
- Interface responsiva (desktop e mobile). No desktop, o carrinho aparece automaticamente quando há itens; no mobile, abre pelo botão de carrinho no topo.

Tecnologias
- HTML5
- CSS3
- JavaScript (Vanilla)

Estrutura do projeto
```
/home/gabriel/dloa/pizza/
├── .vscode/settings.json         # Porta sugerida para Live Server (5502)
├── images/                       # Imagens das pizzas
│   ├── pizza.png
│   ├── pizza2.png
│   ├── pizza3.png
│   ├── pizza4.png
│   ├── pizza5.png
│   ├── pizza6.png
│   └── pizza7.png
├── index.html                    # Página principal e templates (models)
├── pizzas.js                     # Fonte de dados das pizzas (array)
├── script.js                     # Lógica de modais, carrinho e interações
└── style.css                     # Estilos e responsividade
```

Como executar localmente
- Opção 1 (arquivo): Abra o `index.html` diretamente no navegador (não há chamadas de API ou backend; apenas carregamento de fontes do Google). 
- Opção 2 (VS Code – Live Server):
  1) Instale a extensão “Live Server”.
  2) Com o projeto aberto, clique em “Go Live”.
  3) A configuração sugere a porta `5502` (`.vscode/settings.json`). Acesse `http://localhost:5502/`.
- Opção 3 (Node.js – servidor estático):
  - `npx serve -p 5502 .` ou `npx http-server -p 5502 .` e acesse `http://localhost:5502/`.

Uso
- Navegue pela lista de pizzas e clique no botão “+” para abrir o modal.
- Escolha o tamanho (por padrão, “GRANDE” vem selecionado) e ajuste a quantidade.
- Clique em “Adicionar ao carrinho”.
- No desktop, o carrinho aparece à direita quando há itens. No mobile, use o ícone de carrinho no topo para abrir e “❌” para fechar.
- No carrinho, use “-” e “+” para ajustar quantidades; quando a quantidade chega a 0, o item é removido.
- Os valores são atualizados automaticamente (Subtotal, Desconto, Total).

Como adicionar/editar pizzas
- Edite o array `pizzaJson` em `pizzas.js` e inclua novos objetos com `id`, `name`, `img`, `price`, `sizes` e `description`. Exemplo:
```js
{ id: 8, name: 'Nova Pizza', img: 'images/pizza8.png', price: 23.90, sizes: ['320g','530g','860g'], description: 'Descrição da nova pizza.' }
```
- Coloque a imagem correspondente dentro da pasta `images/`.

Limitações e observações
- Sem persistência: o carrinho não é salvo (não usa LocalStorage).
- O desconto é fixo em 10% e aplicado sempre.
- Formatação de moeda simples (prefixo “R$ ” e `toFixed(2)`), sem internacionalização.
- O número exibido no ícone do carrinho indica a quantidade de itens distintos, não a soma das quantidades.
- Textos da interface estão em português; para traduzir, edite `index.html` e strings em `script.js`.

Possíveis melhorias
- Persistência do carrinho (LocalStorage).
- Internacionalização (i18n) e formatação de moeda com `Intl.NumberFormat`.
- Integração do botão “Finalizar a compra” com um fluxo real de checkout.
- Acessibilidade (foco, ARIA, navegação por teclado).
- Testes e organização modular do JavaScript.


## English

Description
- Static front-end pizza catalog with a shopping cart, built with plain HTML, CSS, and JavaScript. Pizzas are loaded from `pizzas.js`. Clicking a pizza opens a modal to choose size and quantity; the item is then added to the cart with automatic Subtotal, 10% Discount, and Total calculations. No backend or data persistence.

Key features
- Pizza list generated from `pizzas.js`.
- Modal with details, size selection (Small, Medium, Large), and quantity controls.
- Side cart with increment/decrement, item removal, and automatic totals.
- Fixed 10% discount applied over subtotal.
- Responsive UI (desktop and mobile). On desktop, the cart appears automatically when there are items; on mobile, it opens via the top cart button.

Tech stack
- HTML5
- CSS3
- JavaScript (Vanilla)

Project structure
```
/home/gabriel/dloa/pizza/
├── .vscode/settings.json         # Suggested port for Live Server (5502)
├── images/                       # Pizza images
│   ├── pizza.png
│   ├── pizza2.png
│   ├── pizza3.png
│   ├── pizza4.png
│   ├── pizza5.png
│   ├── pizza6.png
│   └── pizza7.png
├── index.html                    # Main page and templates (models)
├── pizzas.js                     # Pizza data source (array)
├── script.js                     # Modal, cart logic, and interactions
└── style.css                     # Styles and responsiveness
```

How to run locally
- Option 1 (file): Open `index.html` directly in your browser (no backend/API requests; only Google Fonts are loaded).
- Option 2 (VS Code – Live Server):
  1) Install the “Live Server” extension.
  2) With the project open, click “Go Live”.
  3) Port `5502` is suggested via `.vscode/settings.json`. Visit `http://localhost:5502/`.
- Option 3 (Node.js – static server):
  - `npx serve -p 5502 .` or `npx http-server -p 5502 .` and open `http://localhost:5502/`.

Usage
- Browse the pizza list and click the “+” button to open the modal.
- Choose a size (default selection is “LARGE”) and adjust the quantity.
- Click “Adicionar ao carrinho” (Add to cart).
- On desktop, the cart appears on the right when there are items. On mobile, use the top cart icon to open and the “❌” to close.
- In the cart, use “-” and “+” to adjust quantities; when the quantity reaches 0, the item is removed.
- Values are updated automatically (Subtotal, Discount, Total).

Add/edit pizzas
- Edit the `pizzaJson` array in `pizzas.js` and include new objects with `id`, `name`, `img`, `price`, `sizes`, and `description`. Example:
```js
{ id: 8, name: 'New Pizza', img: 'images/pizza8.png', price: 23.90, sizes: ['320g','530g','860g'], description: 'Description of the new pizza.' }
```
- Place the corresponding image under the `images/` folder.

Limitations and notes
- No persistence: the cart is not saved (doesn’t use LocalStorage).
- Discount is fixed at 10% and always applied.
- Simple currency formatting (prefix “R$ ” and `toFixed(2)`) without internationalization.
- The number displayed in the cart icon shows distinct items, not the sum of quantities.
- Interface texts are in Portuguese; to translate, edit `index.html` and strings in `script.js`.

Possible improvements
- Cart persistence (LocalStorage).
- Internationalization (i18n) and currency formatting with `Intl.NumberFormat`.
- Integrate the “Finalizar a compra” button with a real checkout flow.
- Accessibility (focus, ARIA, keyboard navigation).
- Tests and modular organization of the JavaScript.