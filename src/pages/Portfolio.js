import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import ProjetCard from '../components/ProjectCard';
import Modal from '../components/Modal';  // Importez votre composant modal ici

const Portfolio = () => {
    const [projets, setProjets] = useState([]);
    const [selectedProjet, setSelectedProjet] = useState(null);

    const openModal = (projet) => {
        setSelectedProjet(projet);
    };

    const closeModal = () => {
        setSelectedProjet(null);
    };

    useEffect(() => {
        // Adaptez ce chemin pour pointer vers votre fichier db.json ou l'URL de votre API
        const fetchData = async () => {
            try {
                const response = await axios.get('/db.json');
                setProjets(response.data.projets);
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='Portfolio'>
            <Navigation />
            <div className='portfolioContent'>

                <h2 className='pageTittle'>Mes Projets</h2>
                <div className='portfolioContent_main'>

                    {projets.map(projet => (
                        <ProjetCard
                            key={projet.id}
                            projet={projet}  // Passez tout l'objet projet ici
                            onProjetClick={openModal}  // Passez la fonction pour ouvrir la modale ici
                        />
                    ))}
                </div>
            </div>
            <Modal projet={selectedProjet} onClose={closeModal} />
        </div>
    );
};

export default Portfolio;
