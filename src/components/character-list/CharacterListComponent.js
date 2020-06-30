import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findCharacters } from '../../api/CharacterApi';
import { Link } from 'react-router-dom';
import './CharacterListComponent.css';

const CharacterListComponent = (props) => {
    //Get reference to store.dispatch
    const dispatch = useDispatch();

    //Create function reference to find characters
    const fetchCharacters = () => dispatch(findCharacters());


    //On initial load, fetch the characters to populate the list
    useEffect(() => {
        fetchCharacters();
    }, []);

    //Characters don't have id's they have urls
    //Split the url to get the id from there
    const getCharacterIdFromUrl = (url) => {
        const idFragment = url.split("/");
        return idFragment[idFragment.length - 2];
    };

    //Get a reference to store.characters.characters
    const characters = useSelector(state => state.characters.characters);

    return characters.map((character, key) => {
        //Get the id of the current charater from the list
        const id = getCharacterIdFromUrl(character.url);
        return (
            <div key={key} className="character-card">
                {/* Create a link to the character detail page */}
                <Link to={`/characters/${id}`}>
                    {character.name}
                </Link>
            </div>
        )
    });
};

export default CharacterListComponent;