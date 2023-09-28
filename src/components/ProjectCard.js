const ProjetCard = ({ photo_header, titre, résumé }) => {
    return (
        <div className="projet-card">
            <img src={photo_header} alt={titre} />
            <h2>{titre}</h2>
            <p>{résumé}</p>
        </div>
    );
};
export default ProjetCard;