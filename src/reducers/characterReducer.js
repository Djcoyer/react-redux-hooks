import {FETCHING_CHARACTER, FETCH_CHARACTER_FAILED, FETCH_CHARACTER_SUCCESS, FETCHING_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILED} from '../actions/CharacterActions';

//A reducer is just a function with two input parameters: 
//State and  action
//State is a reference to the current state of the ENTIRE APPLICATION.
//Action refers to the object returned by an action creator and sent through the dispatch funciton
//Every action will trigger every reducer, but as a rule of thumb
//only one reducer should have a case for that action's type 
const characterReducer = (
    state ={
        character: {
            name: 'Luke Skywalker'
        },
        characters: [
        ]
}, action) => {
    switch(action.type) {
        case FETCHING_CHARACTERS:
            return {...state, loading: true};
        case FETCH_CHARACTERS_SUCCESS:
            return {...state, loading: false, characters: [...action.payload]};
        case FETCH_CHARACTERS_FAILED:
            return {...state, loading: false, characters: [], error: action.payload};
        case FETCHING_CHARACTER:
            return {...state, loading: true};
        case FETCH_CHARACTER_SUCCESS: 
            return {...state, loading: false, character: action.payload};
        case FETCH_CHARACTER_FAILED:
            return {...state, loading: false, character: null, error: action.payload};
        default:
            return state;
    }
};

export default characterReducer;