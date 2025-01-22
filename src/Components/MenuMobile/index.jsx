import React from "react";
import "../../Styles/Components/menuMobile.scss";

const MenuMobile = () => {

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
                    <li className="menu-item">
                        <a href="/home">
                            Sapatos
                        </a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="" />
                    </li>
                    <li className="menu-item">
                        <a href="/home">
                            Sandálias
                        </a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="" />
                    </li>
                    <li className="menu-item">
                        <a href="/home" >
                            Botas
                        </a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="" />
                    </li>
                    <li className="menu-item">
                        <a href="/home">
                            Tênis
                        </a>
                        <img src="../static/images/icons-mobile/arrow.svg" alt="" />  
                    </li>
                    <li className="menu-item">
                        <a href="/home" >
                            Outlet
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuMobile;