# 📘 **Gerenciador de Receitas – Avaliação Prática (Express + Bootstrap)**

Aplicação desenvolvida como requisito da **Avaliação Prática 01 – Desenvolvimento Backend I**, conforme orientações do professor **Rossini Pena Abrantes**.
O projeto implementa um sistema web completo para gerenciamento de receitas culinárias utilizando **Node.js**, **Express**, **Handlebars** e **Bootstrap offline**, com armazenamento **em memória**.

---

## 🚀 **Funcionalidades**

* **Página Principal**

  * Lista todas as receitas em *cards Bootstrap*
  * Exibe título, tempo de preparo e botões para consultar, editar e excluir
  * Mensagem caso não existam receitas cadastradas

* **Criar Receita**

  * Formulário completo
  * Todos os campos obrigatórios
  * Tempo mínimo: **1 minuto**
  * Após salvar, retorna à página principal

* **Consultar Receita**

  * Exibe todos os campos da receita
  * *Ingredientes* e *Modo de preparo* exibidos com a tag `<pre>` (conforme exigido no PDF)

* **Editar Receita**

  * Formulário pré-preenchido
  * Atualiza os dados e retorna para a página principal

* **Excluir Receita**

  * Exclui a receita da memória e retorna imediatamente à página principal

* **Pesquisar Receita**

  * Busca por título (case-insensitive)
  * Exibe resultados na mesma página
  * Títulos retornados são links para a página de consulta
  * Mensagem adequada quando não houver resultados

* **Página “Sobre”**

  * Informações gerais sobre a aplicação, autor e data

---

## 🧩 **Tecnologias Utilizadas**

* **Node.js**
* **Express**
* **Express Generator**
* **Handlebars (HBS)**
* **Bootstrap 5 (versão offline)**
* HTML
* JavaScript
* Armazenamento em memória (array de objetos)

---

## 📁 **Arquitetura do Projeto**

```
├── app.js
├── package.json
├── .gitignore
├── README.md
├── data.js
├── modelos.js
├── receitaMemoria.js
│
├── public
│   ├── images
│   ├── javascripts
│   ├── stylesheets
│   └── vendor
│       └── bootstrap
│
├── routes
│   ├── rotasIndex.js
│   └── rotasReceita.js
│
└── views
    ├── alteraReceita.hbs
    ├── consultaReceita.hbs
    ├── criaReceita.hbs
    ├── deletarReceita.hbs
    ├── error.hbs
    ├── index.hbs
    ├── layout.hbs
    ├── pesquisaReceita.hbs
    └── sobre.hbs
```

## 🧠 **Requisitos Atendidos (segundo o PDF)**

* [x] Express Generator
* [x] Handlebars como motor de views
* [x] Bootstrap offline
* [x] CRUD completo de receitas
* [x] Pesquisa com case-insensitive
* [x] Armazenamento somente em memória
* [x] Formulários e navegação conforme exemplos do PDF
* [x] Navegação presente em todas as páginas
* [x] Páginas de criação/edição retornam ao início após operação
* [x] `ingredientes` e `preparo` renderizados dentro de `<pre>`

---

## ▶️ **Como Executar**

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor:

   ```bash
   npm start
   ```

3. Acesse no navegador:

   ```
   http://localhost:3000
   ```

---

## 👤 **Autor**

**Henrique Casagrande Bravin**
Professor e Programador
Desenvolvimento Backend II – 2025.2

---