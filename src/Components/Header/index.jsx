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
      <Dialog 
        open={showModal} 
        onClose={() => setShowModal(false)}
        PaperProps={{
          style: {
            width: '610px',
            maxWidth: '610px',
            margin: '0 auto',
            borderRadius: '0',
          },
        }}
      >
        <DialogTitle style={{ position: 'relative' }}>
        <CloseIcon 
          style={{ 
            position: 'absolute', 
            top: '0', 
            right: '0', 
            cursor: 'pointer', 
            backgroundColor: '#EEEEEE', 
            padding: '5px', 
            borderRadius: '0', // Remove bordas arredondadas, se necessário
            width: '24px', // Define largura
            height: '24px', // Define altura
            boxSizing: 'border-box' // Garante que padding seja incluído no tamanho total
          }} 
          onClick={() => setShowModal(false)} 
        />
          <div className='title-container'>
            <span className='modal-title'>Personalize sua experiência e encontre produtos perto de você!</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className='CEP'>
            <label className='CEP-label' htmlFor="cep">Código postal*</label>
            <input
              className='CEP-input'
              type="text"
              id="cep"
              value={cep}
              onChange={handleCepChange}
              maxLength="8"
              placeholder="00000-000"
            />
          </div>
          {loading && <CircularProgress />}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='city-state'>
            <div className='city'>
              <label className='city-label' htmlFor="cidade">Cidade</label>
              <input
                className='city-input'
                type="text"
                id="cidade"
                value={cidade}
                readOnly
                placeholder="Opcional"
              />
            </div>
            <div className='state'>
              <label className='state-label' htmlFor="estado">Estado</label>
              <input
                className='state-input'
                type="text"
                id="estado"
                value={estado}
                readOnly
                placeholder="Opcional"
              />
            </div>
          </div>
        </DialogContent><DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='save-button' onClick={saveCep} color="primary">Salvar endereço</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
