/* eslint-disable @typescript-eslint/no-unused-vars */
// Importar a interface State
import { ArrayState, IFilmes } from "./interfaces";

export default {
  // Mutation para alterar a lista de filmes no estado global
  changeFilms(state: IFilmes, payload: ArrayState):void {
    state.filmes = payload;
  },

  // Mutation para alternar o status de "fav" do filme no estado global
  toggleFavorite(state: IFilmes, id: number): void {
    // Mapear a lista de filmes e encontrar o filme com o ID correspondente
    state.filmes = state.filmes
      .map((film) => (film.id === id ? { ...film, fav: !film.fav } : film));
  },
};
