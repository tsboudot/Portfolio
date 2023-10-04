import React from 'react';

const ParcoursItem = ({ annee, texte }) => {
    return (
        <p><strong>{annee}</strong> {texte}</p>
    );
};

export default ParcoursItem;