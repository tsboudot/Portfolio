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
                                <p>"Passionné par le développement depuis des années, je suis à la recherche de ma première expérience professionnelle dans ce domaine. Arrivé à la fin du cursus <strong>Développeur Intégrateur Web</strong> chez <strong>OpenClassRooms</strong> en octobre 2023, j'ai développé un socle de compétences solides qu'il me tarde de mettre à profit dans un cadre professionnel.</p>
                                <p>Parmi mes autres expériences, je peux citer une <strong>immersion professionnelle</strong> réalisée auprès de Jonathan Bouloux, développeur web full stack. Pendant cette période, j'ai pu le voir travailler, et me familiariser avec les éxigences du métier en situation réelle.</p>
                                <p>Par ailleurs, j'ai également participé à la <strong>piscine de l'école 42 Paris</strong>, en mars 2022. Cette période très intensive m'a beaucoup appris, tant sur moi même que sur les exigences du metier de développeur. "</p>
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

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Homepage;