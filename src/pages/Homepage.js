import React from 'react';
import Navigation from '../components/Navigation';
import CompetenceItem from '../components/CompetenceItem'



const Homepage = () => {
    return (
        <div className='homePage'>
            <Navigation />
            <div className='homeContent'>

                <div className='homeContent_main'>
                    <div className='homePageSection' id='Compétences'>
                        <div className='homePageStart'>
                            <div className='homePage_QuiSuisje slide-in'>
                                <h3>Qui suis-je ?</h3>
                                <p>"Animé par une passion pour le développement depuis plusieurs années, je suis actuellement à la recherche de ma première opportunité professionnelle dans ce domaine. Mon parcours m'a conduit à achever avec succès la formation <strong>Développeur Intégrateur Web</strong> chez OpenClassRooms en octobre 2023, où j'ai acquis une solide base de compétences que je suis impatient de mettre en œuvre dans un environnement professionnel.</p>
                                <p>Mon expérience inclut également une immersion professionnelle aux côtés de <strong>Jonathan Bouloux</strong>, un développeur web full stack. Cette expérience m'a permis de suivre son travail de près et de me familiariser avec les exigences du métier dans un contexte réel.</p>
                                <p>De plus, j'ai eu l'opportunité de participer à la piscine de <strong>l'école</strong> 42 Paris en mars 2022. Cette expérience intensive m'a apporté des enseignements précieux, tant sur le plan personnel que sur les différentes facettes du métier de développeur."</p>
                            </div>
                            <div className='homePage_Img slide-in '>
                                <img src='./ThomasBoudot.jpg' alt='Thomas Boudot' />
                            </div>
                        </div>

                        <div className='CompétenceSection slide-in' id='Compétenceheader'>
                            <h3>Compétences</h3>
                        </div>

                        <div className='CompétenceSection slide-in' id='CompétenceLangages'>
                            <h4>Langages</h4>
                            <div className='CompétenceSection_Content'>

                                <CompetenceItem titre="HTML" image="./imagesUtils/html2.png" />
                                <CompetenceItem titre="CSS" image="./imagesUtils/Css2.png" />
                                <CompetenceItem titre="Sass" image="./imagesUtils/Sass2.png" />
                                <CompetenceItem titre="Javascript" image="./imagesUtils/JS.png" />
                                <CompetenceItem titre="C" image="./imagesUtils/C2.png" />
                            </div>
                        </div>
                        <div className='CompétenceSection' id='CompétenceLibrairies'></div>
                        <h4>Librairies</h4>
                        <div className='CompétenceSection_Content'>
                            <CompetenceItem titre="React" image="./imagesUtils/react2.png" />
                            <CompetenceItem titre="Jest" image="./imagesUtils/jest2.png" />
                            <CompetenceItem titre="Redux" image="./imagesUtils/redux2.png" />
                        </div>
                        <div className='CompétenceSection' id='CompétenceOutils'>
                            <h4>Outils</h4>
                            <div className='CompétenceSection_Content'>
                                <CompetenceItem titre="GitHub" image="./imagesUtils/github1.png" /></div>
                        </div>
                    </div>
                    <div className='homePageSection'>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Homepage;