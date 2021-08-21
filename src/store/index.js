import { configureStore } from "@reduxjs/toolkit";

import states from "./states";

export default configureStore({
  reducer: {
    states,
  },
});
