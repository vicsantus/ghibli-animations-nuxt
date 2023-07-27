// Interface que representa um item de filme
export interface State {
  id: number;         // ID do filme
  title: string;      // Título do filme
  description: string;  // Descrição do filme
  image: string;      // URL da imagem do filme
  fav: boolean;       // Indica se o filme é favorito ou não (true ou false)
}

// Interface que representa um array de objetos do tipo State
export interface ArrayState extends Array<State> {}

// Interface que representa o estado de filmes no Vuex (ou em algum outro estado global)
export interface IFilmes {
  filmes: ArrayState; // Array de objetos do tipo State
}
