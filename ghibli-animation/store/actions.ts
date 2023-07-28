/* eslint-disable no-console */
// Importar a interface State
import { IFilmes, State } from "./interfaces";
import { valueToRoute } from "./routeToFetch";

// Action para buscar filmes
export async function fetchFilmes({ commit, state }: {
  state: IFilmes,
  commit: (a: string, b: IFilmes) => void
}): Promise<void> {
  // Verificar se o estado de filmes está vazio
  if (state.filmes.length === 0) {
    try {
      // Realizar o fetch dos filmes da API
      const filmesFetched = await fetch(`${valueToRoute}`)
        .then((response) => response.json());

      // Mapear os filmes e adicionar a propriedade "fav" com valor false
      const filmes = filmesFetched.map((film: State) => ({ ...film, fav: false }));

      // Chamar a mutation "changeFilms" para atualizar o estado global
      commit('changeFilms', filmes);
    } catch (error) {
      // Exibir erro no console caso ocorra falha na requisição
      console.error('Erro ao buscar os filmes:', error);
    }
  }
}

// Action para alternar o status de "fav" do filme
export function toggleFavorite({ commit, _state }: {
    _state: IFilmes,
    commit: (a: string, b: number) => void
  }, id: number):void {
  // Chamar a mutation "toggleFavorite" para atualizar o estado global
  commit('toggleFavorite', id);
};
