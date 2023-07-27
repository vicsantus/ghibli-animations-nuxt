/* eslint-disable @typescript-eslint/no-unused-vars */
import { State } from "./interfaces";

export default {
  changeFilms(state: {filmes: Array<State>}, payload: Array<State>):void {
    state.filmes = payload;
  },

  toggleFavorite(state: { filmes: Array<State> }, id: number): void {
    state.filmes = state.filmes.map((film) => (film.id === id ? { ...film, fav: !film.fav } : film));
  },
};
