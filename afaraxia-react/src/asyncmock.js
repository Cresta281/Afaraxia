import imagenUno from './images/lion_king.jpg'
import imagenDos from './images/bonsai_espinoso.jpg'
import imagenTres from './images/minicactus.jpg'
import imagenCuatro from './images/small_suculentas.jpg'
const products = [
    {   id : '1',
        nombre : 'Bonsai Africano',
        precio: 7500,
        categoria : 'Bonsai',
        cantidad: 1,
        img : imagenUno ,
        descripcion : 'Bonsai representativo de las llanuras africanas, no requiere grandes cantidades de riego, pero si de luz solar.'
    },
    {   id : '2',
        nombre : 'Bonsai Europeo',
        precio: 5000,
        categoria : 'Bonsai',
        cantidad: 1,
        img : imagenDos ,
        descripcion : 'Bonsai que crece frente a climas frios adversos, requiere riego diario con una leve cantidad minima de luz solar.'
    },
    {   id : '3',
        nombre : 'Cactus suculenta',
        precio: 1500,
        categoria : 'suculenta',
        cantidad: 1,
        img : imagenTres ,
        descripcion : 'Ejemplar de Cactus, en su version suculenta, con riego promedio de 3 veces semanal y pocas cantidades de luz solar, ideales para lugares cerrados.'
    },
    {   id : '4',
        nombre : 'Starter pack',
        precio: 5000,
        categoria : 'pack',
        cantidad: 3,
        img : imagenCuatro ,
        descripcion : 'Ideal para empezar tu renovacion verde, con este paquete de suculentas vas a poder darle ese toque mas ecologico a tu casa.'
    }

]

export default products 