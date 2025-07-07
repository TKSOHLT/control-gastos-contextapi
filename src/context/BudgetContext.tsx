import { useReducer, createContext, type Dispatch, type ReactNode } from "react"
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

/**
 * !Boilerplate 
 * Es un conjunto de archivos y código base ya preparado que sirve como punto de partida para crear un proyecto.
 * Este archivo es el boilerplate del proyecto
 */

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

//Hay dos opciones para lo siguiente: crear un objeto vacìo ({} as BudgetContextProps) ó poner un (null!)
export const BudgetContext = createContext<BudgetContextProps>(null!);
//º
//| Lo que conecta al context y al provider es el tipe <BudgetContextProps> pero como tal no están conectadas de niguna manera
//º
export const BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    return(
        //Wrapper conector del context con el provider, pasandole el children
        <BudgetContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </BudgetContext.Provider>
    );
}