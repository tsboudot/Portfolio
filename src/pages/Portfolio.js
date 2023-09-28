import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import ProjetCard from '../components/ProjectCard'; // Assurez-vous que le chemin est correct

const Portfolio = () => {
    const [projets, setProjets] = useState([]);

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
                <div className="portfolioContent_Header">
                    <h1>Thomas Boudot</h1>
                    <h3>Développeur Front-End Junior</h3>
                    <p>Téléchargez mon CV</p>
                </div>
                <div className='portfolioContent_main'>
                    {projets.map(projet => (
                        <ProjetCard
                            key={projet.id}
                            photo_header={projet.photo_header}
                            titre={projet.titre}
                            résumé={projet.résumé}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;