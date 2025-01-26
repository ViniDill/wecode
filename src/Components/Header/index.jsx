import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import '../../Styles/Components/header.scss';
import Menu from '../Menu';
import { Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../Cart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuMobile from '../MenuMobile';

function Header() {
  const [isFilled, setIsFilled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isCepSaved, setIsCepSaved] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const menuItemRef = useRef(null);
  const [isHamburgerDrawerOpen, setIsHamburgerDrawerOpen] = useState(false);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
          setError('CEP não encontrado, digite um CEP válido!');
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

  const formatCep = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d{3})$/, '$1-$2');
  };

  const isValidCep = (cep) => {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
  };

  const handleCepChange = (event) => {
    const formattedCep = formatCep(event.target.value);
    setCep(formattedCep);

    if (formattedCep.length === 9 && isValidCep(formattedCep)) {
      fetchAddress(formattedCep);
    }
  };

  const saveCep = () => {
    if (isValidCep(cep)) {
      localStorage.setItem('userCep', cep);
      setIsCepSaved(true);
      setShowModal(false);
    } else {
      setError('CEP inválido. Por favor, insira um CEP válido.');
    }
  };

  useEffect(() => {
    const savedCep = localStorage.getItem('userCep');

    if (savedCep && isValidCep(savedCep)) {
      setCep(savedCep);
      setIsCepSaved(true);
    } else {
      setCep('');
      setIsCepSaved(false);
    }

    return () => {
      setCep('');
      setError('');
    };
  }, [showModal]);

  useEffect(() => {
    setTimeout(() => {
      const savedCep = localStorage.getItem('userCep');
      if (!savedCep || savedCep === '') {
        setShowModal(true);
      }
    }, 100);
  }, []);


  const cartIcon = cartItems.length > 0 ? 
    (isFilled ? <img src="./static/images/icons/Cart-Black.svg" alt="Ícone de carrinho" /> : <img src="./static/images/icons/Cart.svg" alt="Ícone de carrinho" />) : 
    (isFilled ? <img src="./static/images/icons/Cart-Black.svg" alt="Ícone de carrinho vazio" /> : <img src="./static/images/icons/Cart.svg" alt="Ícone de carrinho vazio" />);

  const loginIcon = isUserLoggedIn ? 
    (isFilled ? <img src="./static/images/icons/User-Black.svg" alt="Ícone de usuário" /> : <AccountCircleIcon />) : 
    (isFilled ? <img src="./static/images/icons/User-Black.svg" alt="Ícone de usuário" /> : <img src="./static/images/icons/User.svg" alt="Ícone de usuário" />);

  const searchIcon = isFilled ? <img src="./static/images/icons/Lupa-Black.svg" alt="Ícone de busca" /> : <img src="./static/images/icons/Lupa.svg" alt="Ícone de busca" />;
  const arrowIcon = isFilled ? <img src="./static/images/icons/arrow-Black.svg" alt="Ícone de busca" /> : <img src="./static/images/icons/arrow.svg" alt="Ícone de busca" />;
  const hamburguerIcon = isFilled ? <img src="./static/images/icons/hamburguer-Black.svg" alt="Ícone de busca" /> : <img src="./static/images/icons/hamburguer.svg" alt="Ícone de busca" />;

  return (
    <div className='conteainer-geral'>
      <div className="header-top">
        <span>
          Você está em: {cidade || 'Carregando...'}
        </span> 
        <a href="#" onClick={() => setShowModal(true)}> Alterar</a>
      </div>

      <header className={`header ${isFilled ? 'header-filled' : ''}`}>
        <div className="header-container">
          <div className="header-logo" >
            <a href="/home">
              <img
                src={isFilled ? './static/images/icons/logo-preto.svg' : './static/images/icons/logo-branco.svg'}
                alt="Logo da Empresa"
                onMouseEnter={() => setIsMenuVisible(false)}
              />
            </a>
          </div>
          <nav className="header-nav">
            <ul>
              <li
                ref={menuItemRef}
                onMouseEnter={() => setIsMenuVisible(true)}
                className={`menu-item-with-dropdown ${isFilled ? 'menu-item-filled' : ''}`}
              >
                <a href="/home" className={isFilled ? 'text-black' : 'text-white'}>
                  Produtos {arrowIcon}
                </a>
                {isMenuVisible && <div ref={menuRef}
                onMouseLeave={() => setIsMenuVisible(false)}><Menu /></div>}
              </li>
              <li onMouseEnter={() => setIsMenuVisible(false)}>
                <a className={isFilled ? 'text-black' : 'text-white'} href="/home">Lançamentos</a>
              </li>
              <li onMouseEnter={() => setIsMenuVisible(false)}>
                <a className={isFilled ? 'text-black' : 'text-white'} href="/home">Outlet</a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="search-btn">{searchIcon}</button>
            <button className="login-btn">{loginIcon}</button>
            <button className="cart-btn" onClick={() => setIsCartDrawerOpen(true)}> 
              {cartIcon} {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </button>
          </div>
        </div>
        
        <div className="header-container-mobile">
          <div className="header-actions">
            <div className='icons-left'>
              <button className="hamburguer-btn" onClick={() => setIsHamburgerDrawerOpen(true)}>{hamburguerIcon}</button>
              <button className="search-btn">{searchIcon}</button>
            </div>
            <div className="header-logo-mobile">
              <a href="/home">
                <img
                  src={isFilled ? './static/images/icons/logo-preto.svg' : './static/images/icons/logo-branco.svg'}
                  alt="Logo da Empresa"
                />
              </a>
            </div>
            <div className='icons-left'>
              <button className="login-btn">{loginIcon}</button>
              <button className="cart-btn" onClick={() => setIsCartDrawerOpen(true)}> 
                {cartIcon} {totalQuantity > 0 && <span>{totalQuantity}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Dialog 
        open={showModal} 
        onClose={() => setShowModal(false)}
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
              borderRadius: '0', 
              width: '24px', 
              height: '24px', 
              boxSizing: 'border-box' 
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
          <InputMask
            mask="99999-999"
            value={cep}
            onChange={handleCepChange}
            placeholder="00000-000"
            className='CEP-input'
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>
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
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='save-button' onClick={saveCep} 
    disabled={!!error} >Salvar endereço</button>
        </DialogActions>
      </Dialog>
<Drawer
  anchor="right"
  open={isCartDrawerOpen}
  onClose={() => setIsCartDrawerOpen(false)}
>
  <div>
    <button 
      onClick={() => setIsCartDrawerOpen(false)} 
      style={{ 
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        background: 'none', 
        border: 'none', 
        fontSize: '24px', 
        cursor: 'pointer' 
      }}
    >
      <CloseIcon />
    </button>
    <Cart onContinueShopping={() => setIsCartDrawerOpen(false)} />
  </div>
</Drawer>
  <Drawer
    anchor="left"
    open={isHamburgerDrawerOpen}
    onClose={() => setIsHamburgerDrawerOpen(false)}
  >
    <div>
      <button 
        onClick={() => setIsHamburgerDrawerOpen(false)} 
        style={{
          position: 'absolute', 
          top: '15px', 
          right: '16px', 
          background: 'none', 
          border: 'none', 
          fontSize: '24px', 
          cursor: 'pointer'
        }}
      >
        <CloseIcon />

      </button>
      
      <MenuMobile />
    </div>
  </Drawer>
    </div>
  );
}

export default Header;
