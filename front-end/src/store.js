import { configureStore } from "@reduxjs/toolkit";
import SystemPanier, { getTotals } from "./Redux/SystemPanier";

const store = configureStore({

     reducer : {
          panier : SystemPanier
     }
})
store.dispatch(getTotals())
export default store