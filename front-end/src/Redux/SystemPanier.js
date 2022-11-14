import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert"
// import swal from '@sweetalert/with-react';

const initialState = {
     cards : localStorage.getItem("paniers") ? JSON.parse(localStorage.getItem("paniers")) : [],
     totalAmont : 0,
     totalQuantite : 0
}

const SystemPanier = createSlice({
     name : "panier",
     initialState,
     reducers : {
          AddCard : (state, action) => {

               const find = state.cards.findIndex(item => item.id === action.payload.id)

               if(find >= 0) {

                    state.cards[find].quantite += 0
                    swal("Notification", "Ce produit est deja enregister dans votre panier")

               } else {
                    const temp = {...action.payload, quantite: 1}
                    state.cards.push(temp)
                    swal('Succes', "produit ajouté au panier avec succes")

               }
               localStorage.setItem("paniers", JSON.stringify(state.cards))
          },
          increment : (state, action) => {

               const index = state.cards.findIndex((card) => card.id === action.payload.id)
               if(state.cards[index].quantite < 10) {

                    state.cards[index].quantite += 1 
               }
               localStorage.setItem("paniers", JSON.stringify(state.cards))
               
          },
          decrement : (state, action) => {
               
               const index = state.cards.findIndex((card) => card.id === action.payload.id)

               if(state.cards[index].quantite > 1) {

                    state.cards[index].quantite -= 1
                    
               } 
               else if(state.cards[index].quantite === 1) {
                    
                    state.cards = state.cards.filter((item) => item.id !== action.payload.id )
                    swal('danger','Ce produit ete supprimer avec sucess')
               }
               localStorage.setItem("paniers", JSON.stringify(state.cards))
          },
          remove : (state, action) => {

               swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {

                         state.cards = state.cards.filter((item) => item.id !== action.payload.id )
                         localStorage.setItem("paniers", JSON.stringify(state.cards))
                         swal("Poof! Your imaginary file has been deleted!", {
                           icon: "success",
                         });
                    //   swal('danger','Ce produit ete supprimer avec sucess')
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  })
              
          },
          clearCard : (state) => {
               state.cards = []
               localStorage.setItem("paniers", state.cards)
          },
          getTotals : (state, action) => {

               let {total, quantite } = state.cards.reduce(
                    (cartTotal, cartItem) => {
                         const {Prix_Tableau, quantite} = cartItem
                         const itemTotal = Prix_Tableau * quantite

                         cartTotal.total += itemTotal
                         cartTotal.quantite += quantite

                         return cartTotal
                    }, {
                         total : 0,
                         quantite : 1
                    }
               )
               state.totalAmont = total
               state.totalQuantite = quantite
          }
     }
})

export const {AddCard, increment, decrement, remove, clearCard, getTotals} = SystemPanier.actions
export default SystemPanier.reducer