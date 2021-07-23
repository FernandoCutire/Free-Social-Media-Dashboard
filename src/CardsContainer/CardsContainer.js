function CardsContainer () {
    return(
        <section className="main-cards-container">
            <div className="main-card">
                <p className="username"><i className="fab fa-facebook-square"></i>@nathanf</p>
                <h1 className="followers__number">1987</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>12 Today</p>
            </div>

            <div className="main-card">
                <p className="username twitter"><i className="fab fa-twitter"></i>@nathanf</p>
                <h1 className="followers__number">1044</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>99 Today</p>
            </div>

            <div className="main-card">
                <p className="username instagram">
                    <i className="fab fa-instagram"></i>@realnathanf
                </p>
                <h1 className="followers__number">11k</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>1099 Today</p>
            </div>

            <div className="main-card">
                <p className="username youtube-square">
                    <i className="fab fa-youtube-square"></i>Nathan F.
                </p>
                <h1 className="followers__number">8239</h1>
                <p className="followers__title">Subscribers</p>
                <p className="followers__today down"><i className="fas fa-caret-down"></i>144 Today</p>
            </div>
        </section>
    );
}

export default CardsContainer;