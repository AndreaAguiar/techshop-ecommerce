import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png';

import { Container } from './style';

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/649/091/themes/common/logo-450688138-1622758372-4146dbe9fe861e0b7e4bc1adcaf975b31622758372.png?0" alt="logo" width="200px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span> ( {cart.length} ) - Itens </span>
        </div>
      </div>
      <section className="section-one">
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="auto" height="200" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6> R$ {prod.price}</h6>
            <button onClick={() => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
      <section className="section-two">
      <h4>Cadastre-se</h4>
      <div className="cadastro">
        <form className="form">
          <input type="text" placeholder="Name" id="nome"/>
          <input type="text" placeholder="E-mail" id="email"/>
          <input type="submit" value="Cadastrar"/>
        </form>
      </div>
      </section>
    </Container>
          );
}

          export default Home;