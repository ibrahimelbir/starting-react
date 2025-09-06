import React from "react";
import styled from "@emotion/styled";
import store from "../store";
import { observer } from "mobx-react";


const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {

  return (
    <Input
      type="text"
      value={store.filter}
      onChange={(evt) => store.setFilter(evt.target.value)}
      placeholder="Search Pokémon..."
    />
  );
};

export default observer(PokemonFilter);
