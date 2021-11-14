import { createContext , useReducer,useContext} from "react";




export const StoreContext = createContext();

function countReducer(state, action) {
   switch (action.type) {
     case 'increment': {
       return {count: state.count + 1}
     }
     case 'decrement': {
       return {count: state.count - 1}
     }
     default: {
       throw new Error(`Error: ${action.type}`)
     }
   }
 }
 
 function StoreProvider({children}) {
   const [state, dispatch] = useReducer(countReducer, {count: 0})
   const value = {state, dispatch}
   console.log('children'+children);
   return <StoreContext.Provider value={value}>
      {children}
      </StoreContext.Provider>
 }
 
 export {StoreProvider}