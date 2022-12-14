import React, {Fragment} from 'react';

function FormCantidadProducto(props) {

    const {producto, restarProductos, sumarProductos, eliminarPorductoPedido, index} = props;

    return(
        <Fragment>
            <li>
                <div className="texto-producto">
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">{producto.precio} €</p>
                </div>
                <div className="acciones">
                    <div className="contenedor-cantidad">
                        <i className="fas fa-minus" onClick={() => restarProductos(index)}></i>
                        <p>{producto.cantidad}</p>
                        <i className="fas fa-plus" onClick={() => sumarProductos(index)}></i>
                    </div>
                    <button type="button" className="btn btn-rojo" onClick={() => eliminarPorductoPedido(producto.producto)}>
                        <i className="fas fa-minus-circle"></i>
                            Eliminar Producto
                    </button>
                </div>
            </li>
        </Fragment>
    )
}

export default FormCantidadProducto;