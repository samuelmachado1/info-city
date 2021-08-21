import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import States from "./components/States";

import { fetchStates } from "./store/states";

function App() {
  const states = useSelector((state) => state.states.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  return (
    <main className="main">
      <States states={states} />
      {/* <SelectedState /> */}
    </main>
  );
}

export default App;
