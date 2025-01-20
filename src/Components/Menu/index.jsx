import React, { useState } from "react";
import "../../Styles/Components/menu.scss";

const Menu = () => {
    const [imagePath, setImagePath] = useState("./static/images/icons/image-5.svg"); // Definir a imagem padrão como "Sapatos"

    // Função para atualizar a imagem ao passar o mouse
    const handleMouseOver = (imageName) => {
        setImagePath(`./static/images/icons/${imageName}.svg`);
    };

    return (
        <div className="menu-container">
            <div className="">
                <ul>
                    <li className="menu-item">
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-5")} // Sapatos
                        >
                            Sapatos
                        </a>
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-1")} // Scarpins
                        >
                            Scarpins
                        </a>
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-2")} // Sandálias
                        >
                            Sandálias
                        </a>
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-3")} // Botas
                        >
                            Botas
                        </a>
                    </li>
                </ul>
            </div>
            <div className="load-image">
                {/* Renderiza a imagem dinâmica */}
                {imagePath && <img src={imagePath} alt="Menu Preview" />}
            </div>
        </div>
    );
};

export default Menu;
