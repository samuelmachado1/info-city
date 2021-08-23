import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import cityInfo3 from "../assets/images/cityInfo3.jpeg";
import States from "../components/States/index";

import { fetchStates } from "../store/states";

export function Home() {
  const states = useSelector((state) => state.states.items);
  const stateId = useSelector((state) => state.states.stateItem);
  const countyItem = useSelector((state) => state.states.countyItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  return (
    <div id="home-aside">
      <aside id="aside-component">
        <img id="img-aside" src={cityInfo3} alt="Imagem da lateral" />
        <strong id="strong-aside">Dados sobre sua cidade</strong>
        <p id="p-aside">
          Informações de microrregião, mesorregião, UF e região dos municípios.
        </p>
      </aside>
      <main id="main-component">
        <div>
          <States states={states} stateId={stateId} countyItem={countyItem} />
        </div>
      </main>
    </div>
  );
}
