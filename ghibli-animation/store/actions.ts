/* eslint-disable no-console */
import { State } from "./interfaces";

export async function fetchFilmes({ commit, state }: {
  state: { filmes: Array<State> },
  commit: (a: string, b: { filmes: Array<State> }) => void
}): Promise<void> {
  if (state.filmes.length === 0) {
    // Realizar o fetch apenas se o estado estiver vazio
    try {
      const filmesFetched = await fetch('http://localhost:3001/').then((response) => response.json());
      const filmes = filmesFetched.map((film: State) => ({ ...film, fav: false }));
      commit('changeFilms', filmes);
    } catch (error) {
      console.error('Erro ao buscar os filmes:', error);
    }
  }
}

export function toggleFavorite({ commit, _state }: {
    _state: { filmes: Array<State> },
    commit: (a: string, b: number) => void
  }, id: number):void {
  commit('toggleFavorite', id);
};
