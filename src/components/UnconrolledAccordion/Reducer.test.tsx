import {reducer, StateType} from "./Reducer";

test('collapsed should be true', () => {
    // data
    const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expect
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {
    // data
    const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expect
    expect(newState.collapsed).toBe(false)
})

test(' reducer should throw error because action type is incorrect ', () => {
    // data
    const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
    const state: StateType = {
        collapsed: true
    }

    //action

    expect(() => {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError()

})
