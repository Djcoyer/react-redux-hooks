import axios from 'axios';
import {fetchCharacterFailed, fetchCharacterSuccess, fetchingCharacter, fetchingCharacters, fetchCharactersSuccess, fetchCharactersFailed} from '../actions/CharacterActions';

const findCharacters = () => {
    //Folloing a thunk pattern in which one or more dispatch functions can be called asynchronously
    //This anonymous function is provided to the dispatch functionw when dispatch(findCharacters()) is called
    return dispatch => {
        dispatch(fetchingCharacters());
        return axios.get('https://swapi.dev/api/people')
        .then(response => dispatch(fetchCharactersSuccess(response.data.results)))
        .catch(err => dispatch(fetchCharactersFailed(err)));
    }
}

const findCharacterById = (id) => {
    return dispatch  => {
        dispatch(fetchingCharacter());
        return axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            dispatch(fetchCharacterSuccess(response.data));
        }).catch(err => {
            dispatch(fetchCharacterFailed(err));
        });
    };
};


export {
    findCharacters,
    findCharacterById
}