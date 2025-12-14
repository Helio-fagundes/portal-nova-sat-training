# Portal Nova Sat 🚀

O **Portal Nova Sat** é uma plataforma de treinamento desenvolvida com foco em **boas práticas em Angular** e na **familiarização com o padrão de projetos da empresa**. Este projeto foi criado como parte do processo de aprendizado e preparação para atuação em projetos reais.

Criado por **Helio Fagundes**, novo estagiário do **MPRJ (Ministério Público do Rio de Janeiro)**, que está sempre buscando aprender mais e contribuir com a equipe.

---

## 🧠 Objetivo do Projeto

O principal objetivo deste projeto foi:

* Aprender e consolidar conhecimentos no **framework Angular**
* Praticar **boas práticas de organização de código**
* Simular um ambiente real de projeto corporativo
* Estar preparado para colaborar em projetos internos da empresa

---

## 🛠️ Tecnologias Utilizadas

* **Angular**
* **TypeScript**
* **CSS**
* **JSON Server** (simulação de backend)
* **Node.js / NPM**

---

## 📌 Funcionalidades

O Portal Nova Sat conta com as seguintes páginas e recursos:

### 🏠 Home

* Exibição dos **cards de SATs** cadastradas

### ℹ️ About

* Explicação sobre o que é o Portal Nova Sat
* Objetivo do projeto e contexto de criação

### 👥 Users

* Listagem de usuários do banco de dados
* Funcionalidades completas de **CRUD**:

  * Criar usuário
  * Editar usuário
  * Deletar usuário
  * Visualizar usuários

### ✉️ Contact

* Formulário de contato
* Envio de email contendo:

  * Nome
  * Email
  * Mensagem

### 📝 Criar SAT

* Criação de uma nova SAT contendo:

  * Número do PaIc
  * Objetivo da SAT
  * Descrição
  * Armazenador de arquivos

---

## 📂 Estrutura do Projeto

O projeto segue uma estrutura organizada, baseada em boas práticas do Angular, separando responsabilidades entre:

* Componentes
* Serviços
* Interfaces
* Estilos

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Helio-fagundes/portal-nova-sat-training.git
```

```bash
cd portal-nova-sat-training
```

---

### 2️⃣ Instalar as dependências do projeto

```bash
npm install
```

---

### 3️⃣ Instalar o JSON Server

```bash
npm install json-server
```

---

### 4️⃣ Iniciar o servidor fake (backend)

```bash
json-server --watch data.json --port 3000
```

> ⚠️ **Importante:** mantenha este terminal aberto enquanto o projeto estiver rodando.

---

### 5️⃣ Rodar a aplicação Angular

Em outro terminal, execute:

```bash
npm run dev
```

---

### 6️⃣ Acessar no navegador

Abra o navegador e acesse:

```
http://localhost:4200
```

---

## 📄 Observações Importantes

* O **JSON Server** é utilizado apenas para fins de desenvolvimento e simulação de backend
* O projeto não utiliza backend real
* Ideal para estudo, treinamento e prática com Angular

---

## 👨‍💻 Autor

Desenvolvido por **Helio Fagundes**

* GitHub: [https://github.com/Helio-fagundes](https://github.com/Helio-fagundes)

---

## 📜 Licença

Este projeto é apenas para fins educacionais e de treinamento.
