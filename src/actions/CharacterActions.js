//Creating a list of action  types for refernce by other files
const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
const FETCH_CHARACTERS_FAILED = "FETCH_CHARACTERS_FAILED";
const FETCHING_CHARACTER = "FETCHING_CHARACTER";
const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
const FETCH_CHARACTER_FAILED = "FETCH_CHARACTER_FAILED";

//Action creator will ALWAYS return an object with the same properties:
//Type (required) and payload (optional)
//Type must be unique to an action creator
//Payload is optional and contains data that is relevant to the action
const fetchingCharacters = () => {
    return {
        type: FETCHING_CHARACTERS
    }
};

const fetchCharactersSuccess = (characters) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters
    }
};

const fetchCharactersFailed = (error) => {
    return {
        type: FETCH_CHARACTERS_FAILED,
        payload: error
    }
};

const fetchingCharacter = () => {
    return {
        type: FETCHING_CHARACTER
    }
};

const fetchCharacterSuccess = (character) => {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        payload: character
    }
};

const fetchCharacterFailed = (error) => {
    return {
        type: FETCH_CHARACTER_FAILED,
        payload: error
    }
};


export {
    FETCHING_CHARACTER,
    FETCH_CHARACTER_FAILED,
    FETCH_CHARACTER_SUCCESS,
    FETCHING_CHARACTERS,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILED,


    fetchingCharacter,
    fetchCharacterFailed,
    fetchCharacterSuccess,
    fetchingCharacters,
    fetchCharactersSuccess,
    fetchCharactersFailed,
};