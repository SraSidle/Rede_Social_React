import "./Header.css";

function Header(){
    return(
        <div className="header">
            <h2 className="titulo-app">Orkut</h2>
            <nav>
                <ul>Inicio</ul>
                <ul>Perfil</ul>
                <ul>Comunidade</ul>
            </nav>
        </div>
    )
}

export default Header;