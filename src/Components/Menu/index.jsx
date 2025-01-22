import React, { useState } from "react";
import "../../Styles/Components/menu.scss";

const Menu = () => {
    const [imagePath, setImagePath] = useState("./static/images/icons/image-5.svg");

    const handleMouseOver = (imageName) => {
        setImagePath(`./static/images/icons/${imageName}.svg`);
    };

    return (
        <div className="menu-container">
            <div className="division">
                <ul className="division-ul">
                    <li className="menu-item">
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-5")} // Sapatos
                        >
                            Sapatos
                        </a>
                        <a
                            href="/home"
                            onMouseOver={() => handleMouseOver("image-3")} // Scarpins
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
                            onMouseOver={() => handleMouseOver("image-1")} // Botas
                        >
                            Botas
                        </a>
                    </li>
                </ul>
            </div>
            <div className="load-image">
                {imagePath && <img src={imagePath} alt="Menu Preview" />}
            </div>
        </div>
    );
};

export default Menu;
