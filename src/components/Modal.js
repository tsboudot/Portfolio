import React from 'react';
import Slider from "react-slick";

const Modal = ({ projet, onClose }) => {
    if (!projet) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <Slider {...settings}>
                    {projet.diapositives.map((diapo, index) => (
                        <div key={index}>
                            <img src={diapo.photo_diapo} alt={projet.titre} />
                            <p>{diapo.texte_diapo}</p>
                        </div>
                    ))}
                </Slider>
                <p>{projet.description}</p>
                <a href={projet["lien github"]} target='_blank' rel='noreferrer'>Voir sur Github</a>
                <button onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
    );
};

export default Modal;