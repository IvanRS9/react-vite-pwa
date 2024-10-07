import React from 'react'

const FormPizza = () => {
    const enviarPedido = () => {
        const pizza = document.getElementById('pizza').value;
        const cliente = document.getElementById('cliente').value;
        const direccion = document.getElementById('direccion').value;
        const cantidad = document.getElementById('cantidad').value;
        const telefono = document.getElementById('telefono').value;
        const card = document.getElementById('card').checked;
        const paypal = document.getElementById('paypal').checked;
        let precio = 0;
        let total = 0;

        if (pizza === '' || cliente === '' || direccion === '' || cantidad === '' || telefono === '' || (card === false && paypal === false)) {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (pizza === 'Hawayana') {
            precio = 100;
        } else if (pizza === 'Especial') {
            precio = 120;
        } else if (pizza === 'Vegetariana') {
            precio = 150;
        }

        if (card) {
            total = precio * cantidad + (precio * cantidad * 0.10);
        }
        if (paypal) {
            total = precio * cantidad + (precio * cantidad * 0.20);
        }


        const resumen = document.createElement('div');
        resumen.innerHTML =
            `<h4>Pizza: <span>${pizza}</span></h4>
            <h4>Cliente: <span>${cliente}</span></h4>
            <h4>Dirección: <span>${direccion}</span></h4>
            <h4>Cantidad: <span>${cantidad}</span></h4>
            <h4>Teléfono: <span>${telefono}</span></h4>
            <h4>Forma de Pago: <span>${card ? 'Tarjeta' : 'Paypal'}</span></h4>
            <h4>Total a Pagar: <span>$${total}</span></h4>
        `;
        const pedidos = document.getElementById('pedidos');
        pedidos.appendChild(resumen);
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className='mb-3'>
                        <label className="block text-white">Elige tu Pizza</label>
                        <select name="pizza" id="pizza" className=''>
                            <option value="Hawayana">Hawayana $100</option>
                            <option value="Especial">Especial $120</option>
                            <option value="Vegetariana">Vegetariana $150</option>
                        </select>
                    </div>
                    <br />
                    <div className='mb-3'>
                        <label className='block text-white'>Nombre</label>
                        <input name='cliente' id='cliente' type="text" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <br />
                    <div>
                        <label className='block text-white'>Direcci&oacute;n</label>
                        <input name='direccion' id='direccion' type="text" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                </div>
                <div>
                    <div className='mb-3'>
                        <label className="block text-white">N&uacute;mero de Pizzas</label>
                        <input name='cantidad' id='cantidad' type="number" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <br />
                    <div className='mb-3'>
                        <label className="block text-white">Tel&eacute;fono</label>
                        <input name='telefono' id='telefono' type="text" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <br />
                    <button onClick={enviarPedido} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Enviar Pedido
                    </button>
                </div>
                <div>
                    <label className="block text-white">Forma de pago</label>
                    <div>
                        <input type="radio" name="payment" id="card" />
                        <label htmlFor="card" className='text-white'>Tarjeta</label>
                        <br />
                        <input type="radio" name="payment" id="paypal" />
                        <label htmlFor="paypal" className='text-white'>Paypal</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPizza
