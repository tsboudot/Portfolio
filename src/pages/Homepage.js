import React from 'react';
import Navigation from '../components/Navigation';
import CompetenceItem from '../components/CompetenceItem'
import ParcoursItem from '../components/ParcoursItem';


const Homepage = () => {
    return (
        <div className='homePage'>
            <Navigation />
            <div className='homeContent'>
                <div className="homeContent_Header">
                    <h1>Thomas Boudot</h1>
                    <h3>Développeur Front-End Junior</h3>
                    <p>Téléchargez mon CV</p>
                </div>
                <div className='homeContent_main'>
                    <div className='homePageSection' id='Compétences'>

                        <div className='CompétenceSection' id='Compétenceheader'>
                            <h3>Compétences</h3>
                        </div>

                        <div className='CompétenceSection' id='CompétenceLangages'>
                            <h4>Langage</h4>
                            <div className='CompétenceSection_Content'>
                                <CompetenceItem titre="C" image="./imagesUtils/C.png" />
                                <CompetenceItem titre="HTML" image="./imagesUtils/HTML.png" />
                                <CompetenceItem titre="CSS" image="./imagesUtils/CSS.png" />
                                <CompetenceItem titre="Sass" image="./imagesUtils/Sass.png" />
                            </div>
                        </div>
                        <div className='CompétenceSection' id='CompétenceLibrairies'></div>
                        <h4>Librairies</h4>
                        <div className='CompétenceSection_Content'>
                            <CompetenceItem titre="React" image="./imagesUtils/React.png" />
                            <CompetenceItem titre="Jest" image="./imagesUtils/Jest.png" />
                            <CompetenceItem titre="Redux" image="./imagesUtils/Redux.png" />
                        </div>
                        <div className='CompétenceSection' id='CompétenceOutils'>
                            <h4>Outils</h4>
                            <div className='CompétenceSection_Content'>
                                <CompetenceItem titre="Git hub" image="./imagesUtils/gitHub.png" /></div>
                        </div>
                    </div>
                    <div className='homePageSection'>
                        <h3>Mon Parcours</h3>
                        <ParcoursItem
                            annee="2021 :"
                            texte="Découverte du Développement, premiers pas en C, en HTML et en CSS"
                        />
                        <ParcoursItem
                            annee="2022 :"
                            texte="Piscine à l'école 42. Prise en main du Shell, et du langage C, dans un rythme très intensif"
                        />
                        <ParcoursItem
                            annee="2022 :"
                            texte="Immersion professionnelle d'une semaine auprès de Jonathan Bouloux, développeur full Stack"
                        />
                        <ParcoursItem
                            annee="2023 :"
                            texte='Cursus Développeur intégrateur WEB pendant 9 mois sur la plateforme <a href="https://www.openclassrooms.com" target="_blank" rel="noopener noreferrer">OpenClassRooms</a>'
                            dangerouslySetInnerHTML={true}  // Ajouté pour permettre le rendu du HTML dans le texte
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;