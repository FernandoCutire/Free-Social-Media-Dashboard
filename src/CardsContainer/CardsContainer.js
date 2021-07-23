function CardsContainer () {
    return(
        <section className="main-cards-container">
            <div className="main-card">
                <p className="username"><i className="fab fa-facebook-square"></i>@ayudinga</p>
                <h1 className="followers__number">9.418</h1>
                <p className="followers__title">Seguidores</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>12 Hoy</p>
            </div>

            <div className="main-card">
                <p className="username twitter"><i className="fab fa-twitter"></i>@ayudinga</p>
                <h1 className="followers__number">7110</h1>
                <p className="followers__title">Seguidores</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>15 Hoy</p>
            </div>

            <div className="main-card">
                <p className="username instagram">
                    <i className="fab fa-instagram"></i>@ayudinga
                </p>
                <h1 className="followers__number">33.8k</h1>
                <p className="followers__title">Seguidores</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>20 Hoy</p>
            </div>

            <div className="main-card">
                <p className="username youtube-square">
                    <i className="fab fa-youtube-square"></i>Ayudinga!
                </p>
                <h1 className="followers__number">112k</h1>
                <p className="followers__title">Suscriptores</p>
                <p className="followers__today down"><i className="fas fa-caret-down"></i>30 Hoy</p>
            </div>
        </section>
    );
}

export default CardsContainer;