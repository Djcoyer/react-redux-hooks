import React, { useEffect, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import { findCharacterById } from '../../api/CharacterApi';

const CharacterComponent = (props) => {
    
    //Get the param from the route fragment
    const {id} = useParams();

    //Get a reference to store.dispatch
    const dispatch = useDispatch();

    //Create a function reference in order to find the character with the current id
    const findCharacter = () => dispatch(findCharacterById(id));

    useEffect(() => {
        findCharacter();
    }, []);

    //Get the item from the Redux store
    const character = useSelector(state => {
            return state.characters.character;
    });

    const loading = useSelector(state => {
        return state.characters.loading;
    });

    if(loading)
        return <span>Loading...</span>
    return (
        <div>The current character is: {character && character.name || "Blank"}</div>
    );
};

export default CharacterComponent;