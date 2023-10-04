import React from 'react';

const ProjetCard = ({ projet, onProjetClick }) => {
    const { photo_header, titre, résumé } = projet; // Destructurer les propriétés depuis l'objet projet

    return (
        <div className="project-card" onClick={() => onProjetClick(projet)}>
            <div className="project-cardLeft">
                <img src={photo_header} alt={titre} className="projectCard_img" />
            </div>
            <div className="project-cardRight">
                <h2>{titre}</h2>
                <p>{résumé}</p>
            </div>
        </div>
    );
};

export default ProjetCard;