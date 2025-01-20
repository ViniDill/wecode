import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../Styles/Components/header.scss';
import Menu from '../Menu';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [isFilled, setIsFilled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const menuRef = useRef(null);
  const menuItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuItemRef.current && !menuItemRef.current.contains(event.target)
      ) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchAddress = (cep) => {
    setLoading(true);
    setError(null);

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (response.data.erro) {
          setError('CEP não encontrado');
          setCidade('');
          setEstado('');
        } else {
          setCidade(response.data.localidade);
          setEstado(response.data.uf);
        }
      })
      .catch(() => {
        setError('Erro ao buscar o CEP');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
    if (event.target.value.length === 8) {
      fetchAddress(event.target.value);
    }
  };

  const saveCep = () => {
    setShowModal(false);
    localStorage.setItem('userCep', cep);
  };

  useEffect(() => {
    const savedCep = localStorage.getItem('userCep');
    if (savedCep) {
      setCep(savedCep);
      fetchAddress(savedCep);
    } else {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <div className="header-top">
        <span>
          Você está em: {cidade || 'Carregando...'}
          <a href="#" onClick={() => setShowModal(true)}> Alterar</a>
        </span>
      </div>

      <header className={`header ${isFilled ? 'header-filled' : ''}`}>
        <div className="header-container">
          <div className="header-logo">
            <a href="/home">
              <img
                src={isFilled ? './static/images/icons/logo-preto.svg' : './static/images/icons/logo-branco.svg'}
                alt="Logo da Empresa"
              />
            </a>
          </div>
          <nav className="header-nav">
            <ul>
              <li
                ref={menuItemRef}
                onMouseEnter={() => setIsMenuVisible(true)}
                className="menu-item-with-dropdown"
              >
                <a href="/home">Produtos <img src="./static/images/icons/arrow.svg" alt="" /></a>
                {isMenuVisible && <div ref={menuRef}><Menu /></div>}
              </li>
              <li onMouseEnter={() => setIsMenuVisible(false)}><a href="/home">Lançamentos</a></li>
              <li onMouseEnter={() => setIsMenuVisible(false)}><a href="/home">Outlet</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="search-btn">🔍</button>
            <button className="login-btn">👤</button>
            <button className="cart-btn">🛒</button>
          </div>
        </div>
      </header>

      {/* Modal para Alteração de CEP */}
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle style={{ position: 'relative' }}>
          <CloseIcon 
            style={{ 
              position: 'absolute', 
              top: '8px', 
              right: '8px', 
              cursor: 'pointer' 
            }} 
            onClick={() => setShowModal(false)} 
          />
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <span>Personalize sua experiência e encontre produtos perto de você!</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={handleCepChange}
              maxLength="8"
              placeholder="Digite seu CEP"
              style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
            />
          </div>
          {loading && <CircularProgress />}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                value={cidade}
                readOnly
                placeholder="Cidade"
                style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                id="estado"
                value={estado}
                readOnly
                placeholder="Estado"
                style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveCep} color="primary">Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
