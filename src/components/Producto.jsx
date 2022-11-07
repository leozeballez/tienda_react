import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //Hay que importar esta linea SIEMPRE por las dudas

const Producto = ({producto, productos, changuito, agregarProducto, borrarProducto}) => {

    //Extraigo los valores
    const {id, articulo, precio} = producto;

    //Función para comprar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(changuito);
    };
    
    return ( 
        <Fragment>
            {id} | {articulo} | {precio}
            <br></br>
            {
                productos
                ?
                    <Button
                    variant="primary"
                    onClick={ () => seleccionarProducto(id) }>Comprar</Button>
                :
                    <Button
                    variant="danger"
                    onClick={ () => borrarProducto(id) }>Eliminar</Button>
            }
            <br></br>
        </Fragment>
     );
}
 
export default Producto;
