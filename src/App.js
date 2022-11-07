import { useState } from 'react';
import './App.css';
import Changuito from './components/Changuito';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';
import './estilos/header.css';
import {Container} from 'react-bootstrap';

function App() {

  //Creamos nuestra lista de producto
  const [productos] = useState([
    {id: 0, articulo: "WAFFLE-Americano", precio: 350},
    {id: 1, articulo: "WAFFLE-Belga", precio: 300},
    {id: 2, articulo: "WAFFLE-Bubble", precio: 450},
    {id: 3, articulo: "HELADO-1kg ", precio: 1500},
    {id: 4, articulo: "HELADO-1/2kg ", precio: 800},
    {id: 5, articulo: "HELADO-1/4kg ", precio: 450}
  ]);

  //Creamos nuestro changuito
  const [changuito, agregarProducto] = useState([]);

  //NO FUNCIONA
  const borrarProducto = id => { 
    const productos = changuito.filter(producto => producto.id !== id);
    agregarProducto(productos);
  }

  return (
    <div>
      <Header
        titulo="AMICI - WAFFLES Y HELADOS"
      />
      <Container fluid className='fondo'>
        <h1>Listado de productos</h1>
        {
          productos.map(producto => (
            <Producto
              producto={producto}
              productos={productos}
              key={producto.id}   //identificar siempre la key para cada producto
              changuito={changuito}
              agregarProducto={agregarProducto}
              borrarProducto={borrarProducto}
            />
          ))
        }
        <Changuito
          changuito={changuito}
        />
      </Container>
      <Footer
      />
    </div>
  );
}

export default App;
