# Ghibli animation em Nuxt! 😊

## 🤔 Contextualizando
Ghibli animation em nuxt é um projeto feito com nodejs, nuxt e vue. Se trata de uma pagina que faz uma requisição http para uma api no backend, recebe uma lista de filmes em json, salva o json no estado da pagina, e renderiza os filmes e imagens da pagina.

## Projeto em funcionamento
<p align="center">
  <img width="666" src="/assets/ghibli-working.gif" alt="ghibli-working" />
</p>


## 🤖 Como o projeto funciona

O projeto é simples. Ao abrir a pagina, filmes serão exibidos. Ao passar o mouse por cima, você verá a descrição de cada filme, seu titulo e um botão para favoritar o filme. Ao clicar no botão, o filme será favoritado. No header da pagina existem duas rotas, a rota para a página principal, e a rota para pagina de favoritos. Ao favoritar um filme e ir para a rota de filmes favoritos, você consegue ver os filmes que foram favoritados. E nessa mesma rota, você pode, caso queira, desfavoritalos.


## 🦾 Instalação

Para instalar o projeto e usar, você precisa de ter docker e docker compose instalados previamente em seu computador.

- Download do repositório
```bash
  git clone git@github.com:vicsantus/ghibli-animations-nuxt.git && cd ghibli-animations-nuxt
```
- Instalação
```bash
   cd ghibli-animation && npm install
```
- Rodar o projeto
```bash
  cd .. && docker compose up -d
```
- Ao rodar o projeto, ele tentara abrir as portas 3000, 3001 e 3002 do seu computador, tenha certeza que essas portas estão abertas no seu computador. O projeto em si irá rodar na rota `http://localhost:3000/`. Ao instalar e rodar o projeto, espere o docker montar os containeres e apenas acesse essa rota no seu navegador.

## 🦿 Tecnologias

Todo o projeto foi feito em Nuxt/Vue, foi utilizado Typescript, POO e conhecimentos CSS, assim como também foi utilizado docker, docker compose e dockerfile na aplicação.

- Para rodar a aplicação é necessário ter docker previamente instalado em seu computador. Você pode instalar o docker e ler a sua documentação no link official: https://www.docker.com/

#
Code for love, love for code ♥️.