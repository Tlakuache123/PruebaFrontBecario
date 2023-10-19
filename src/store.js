import axios from "axios";
import { create } from "zustand";

const characterBag = create((set) => ({
  allPersonajesData: [],
  allPersonajes: [],
  favoritos: [],
  searchPersonaje: "",
  setSearchPersonaje: (value) =>
    set((state) => ({
      searchPersonaje: value,
      allPersonajes:
        value === ""
          ? state.allPersonajesData
          : state.allPersonajes.filter((v) => v.name.includes(value)),
    })),
  setAllPersonajesData: async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    set({
      allPersonajesData: await data.results,
      allPersonajes: await data.results,
    });
  },
  getFavoritos: async () => {
    const data = await axios.get("http://localhost:3030/");
    set({ favoritos: await data.favoritos });
  },
  addFavorito: (value) =>
    set((state) => ({ favoritos: state.favoritos.concat(value) })),
  delFavorito: (value) =>
    set((state) => ({
      favoritos: state.favoritos.filter((v) => v.id === value),
    })),
}));

export { characterBag };
