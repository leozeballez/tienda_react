import React, { Fragment } from 'react';
import '../estilos/changuito.css';
import Producto from './Producto';
import {BsCart4} from 'react-icons/bs';
import {v4 as uuid} from 'uuid';

const Changuito = ({changuito}) => {

    const listado = changuito.map(producto => (
        <Producto
            key={uuid()}
            producto={producto}  
        />
    ));

    return ( 
        <Fragment>
            <div className='changuito'>
                {listado.length}
                <BsCart4/><br></br><br></br>
                {listado}
            </div>
        </Fragment>
     );
}
 
export default Changuito;