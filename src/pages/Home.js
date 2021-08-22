import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import test from "../assets/images/test.jpeg";
import States from "../components/States/index";

import { fetchStates } from "../store/states";

export function Home() {
  const states = useSelector((state) => state.states.items);
  const stateId = useSelector((state) => state.states.stateItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  return (
    <div id="home-aside">
      <aside id="aside-component">
        <img id="img-aside" src={test} alt="Imagem da lateral" />
        <strong>Obtenha informações sobre sua cidade</strong>
        <p>Consumindo dados da API do IBGE</p>
      </aside>
      <main id="main-component">
        <div>
          <States states={states} stateId={stateId} />
        </div>
        {/* {states ? <div>{console.log("teste", states)}</div> : null} */}
      </main>
    </div>
  );
}
