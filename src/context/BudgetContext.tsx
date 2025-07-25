import { useReducer, createContext, type Dispatch, type ReactNode, useMemo } from "react"
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

/**
 * !Boilerplate 
 * Es un conjunto de archivos y código base ya preparado que sirve como punto de partida para crear un proyecto.
 * Este archivo es el boilerplate del proyecto
 */

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>,
    totalExpenses: number,
    remainingBudget: number
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

    const totalExpenses = useMemo(()=>state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses]);
    const remainingBudget = state.budget - totalExpenses;
    
    return(
        //Wrapper conector del context con el provider, pasandole el children
        <BudgetContext.Provider value={{
            state, dispatch, totalExpenses, remainingBudget //Funciones que se exportan
        }}>
            {children}
        </BudgetContext.Provider>
    );
}