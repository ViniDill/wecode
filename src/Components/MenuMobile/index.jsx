import React, { useState } from "react";
import "../../Styles/Components/menuMobile.scss";

const MenuMobile = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (item) => {
        setActiveDropdown(activeDropdown === item ? null : item);
    };

    return (
        <div className="menu-container-mobile">
            <div className="logo">
                <img className="img" src="../static/images/icons/logo-preto.svg" alt="" />
            </div>
            <div className="image">
                <h2>Celebration - 20 Anos</h2>
                <a href="#">Conheça</a>
            </div>
            <div className="options">
                <ul className="options-ul">
                    <li 
                        className="menu-item" 
                        onClick={() => toggleDropdown("sapatos")}
                    >
                        <div>
                            <div className="sapato">   
                                <a href="#!">Sapatos</a>
                                <img 
                                    src="../static/images/icons-mobile/arrow.svg" 
                                    alt="Seta"
                                    className="open-drawer"
                                />
                            </div>
                        {activeDropdown === "sapatos" && (
                            <ul className="dropdown">
                                <li><a href="/sapatos/scarpins">Scarpins</a></li>
                                <li><a href="/sapatos/mocassim">Mocassim</a></li>
                                <li><a href="/sapatos/sapatilhas">Sapatilhas</a></li>
                                <li><a href="/sapatos/mules">Mules</a></li>
                                <li><a href="/sapatos/peep Toe">Peep Toe</a></li>
                                <li><a href="/sapatos/oxford">Oxford</a></li>
                            </ul>
                        )}
                        </div>
                    </li>
                    <li className="menu-item" onClick={() => toggleDropdown("sandalias")}>
                        <a href="#!">Sandálias</a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="Seta" />
                    </li>
                    <li className="menu-item">
                        <a href="/home">Botas</a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="Seta" />
                    </li>
                    <li className="menu-item">
                        <a href="/home">Tênis</a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="Seta" />
                    </li>
                    <li className="menu-item">
                        <a href="/home">Outlet</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuMobile;
