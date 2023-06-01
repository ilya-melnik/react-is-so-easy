export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy = {...state, collapsed: !state.collapsed}

            return stateCopy
        default:
            throw new Error('Bad action type')
    }
}
