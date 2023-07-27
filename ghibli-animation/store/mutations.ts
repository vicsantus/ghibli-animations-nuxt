/* eslint-disable @typescript-eslint/no-unused-vars */
import { State } from "./interfaces";

export default {
  changeFilms(state: Array<State>, payload: Array<State>):void {
    state = payload;
  }
}