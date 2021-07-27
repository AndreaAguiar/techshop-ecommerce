import React, { useState, useEffect, useCallback } from 'react';

import Cart from '../../assets/cart.png';

import { Container } from './style';

// import api from '../../services/api';

import * as jsonfile from './server.json';

type IClient = {
  name: string,
  email: string,
}

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

  const clientStart: IClient = {
    name: "",
    email: "",
  };

  const [client, setClient] = useState(clientStart);
  var listaClient = [];

  const handleChangeClient = useCallback(
    (e) => {
      setClient({
        ...client,
        [e.target.name]: e.target.value,
      });
    },
    [client]
  );
  const handleSubmitClient =
    (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      listaClient.push(client);
      let clients = [];
      if (
        client.name &&
        client.email
      ) {
        clients.push(client);
        localStorage.setItem("clients", JSON.stringify(clients));
        alert("Cliente Cadastrado");

        return true;
      }
      alert("Preencha todos os campos");
      return false;
    }

  useEffect(() => {
    setData(jsonfile.produtos);
    // api.get('').then(
    //   response => {
    //     setData(response.data)
    //   }
    // )
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
          <form className="form" onSubmit={handleSubmitClient}>
          <input value={client.name} onChange={handleChangeClient} type="text" name="name" placeholder="Name" id="nome" />
          <input value={client.email} onChange={handleChangeClient} type="email" name="email" placeholder="E-mail" id="email" />
          <input type="submit" value="Cadastrar" />
          </form>
        </div>
      </section>
    </Container>
  );
}

export default Home;