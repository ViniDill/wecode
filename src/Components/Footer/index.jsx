import React, { useState } from "react";
import "../../Styles/Components/footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true); // Altera o estado para exibir o cupom após enviar
  };

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("BEMVINDA");
    alert("Cupom copiado para a área de transferência!");
  };

  return (
    <footer className="footer-container">
      <div className="newsletter-container">
        {!isSent ? (
          <>
            <span className="newsletter-text">
              Cadastre-se e receba <span className="discount">10% OFF</span> na sua primeira compra!
            </span>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                className="newsletter-input"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button className="newsletter-button" type="submit">Enviar</button>
            </form>
          </>
        ) : (
          <>
            <span className="newsletter-text">
              Utilize o cupom abaixo e garanta seu desconto!
            </span>
            <div className="coupon-container">
              <input
                className="coupon-input"
                type="text"
                value="BEMVINDA"
                readOnly
              />
              <button className="copy-button" onClick={handleCopyCoupon}>
                Copiar
              </button>
            </div>
          </>
        )}
      </div>
      <div className="content-footer">
        <img className="logo-footer" src="../static/images/icons/logo.svg" alt="" />
        <div className="footer-spacing">
          <div className="footer-icons">
            <img src="../static/images/icons/instagram.svg" alt="" />
            <img src="../static/images/icons/facebook.svg" alt="" />
            <img src="../static/images/icons/pinterest.svg" alt="" />
            <img src="../static/images/icons/twitter.svg" alt="" />
            <img src="../static/images/icons/tik-tok.svg" alt="" />
          </div>
          <div className="about-us">
            <h3 className="/home">Sobre a empresa</h3>
            <ul>
              <li><a href="/home">Quem Somos</a></li>
              <li><a href="/home">Fale Conosco</a></li>
            </ul>
          </div>
          <div className="politics">
            <h3 className="/home">Políticas</h3>
            <ul>
              <li><a href="/home">Política de Privacidade</a></li>
              <li><a href="/home">Termos de Uso</a></li>
              <li><a href="/home">Política de Entrega</a></li>
              <li><a href="/home">Política de Cupom e Desconto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
