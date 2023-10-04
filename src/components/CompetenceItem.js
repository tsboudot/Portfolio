import React from 'react';

const CompetenceItem = ({ titre, image }) => {
    return (
        <div className="competenceItem">
            <img src={image} alt={titre} className="competenceImage" />
            <h4>{titre}</h4>
        </div>
    );
};

export default CompetenceItem;