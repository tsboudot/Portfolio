import React from 'react';

const ProjetCard = ({ projet, onProjetClick }) => {
    const { photo_header, titre, résumé } = projet; // Destructurer les propriétés depuis l'objet projet

    return (
        <div className="project-card" onClick={() => onProjetClick(projet)}>
            <div className="project-background">
                <img src={photo_header} alt={titre} className="projectCard_img" />
            </div>
            <div className="project-cardTittle animated-text">
                <h2>{titre}</h2>
            </div>
        </div>
    );
};

export default ProjetCard;