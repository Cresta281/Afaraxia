
### Sobre Afaraxia 
> Mi primer proyecto de React es un ecommerce combinado con una base de datos en Firebase.
En este proyecto se utiliza **scss**, **firebase (firestore)** y **react**. 
Para comenzar la idea surgio de armar un shop donde se pueda ver y comprar ciertos tipos de arboles denominados **Bonsai** y suculentas. 

---
### Iniciando la App 
> Al abrir el src del repositorio se encontrara con varias carpetas. 
- Components
- Context
- Images
- Pages
- Services 
- Styles 
Pero principalmente vamos a enfocarnos en los que mas importen a la hora de entender la aplicacion. 

--- 
### Context
La carpeta context contiene el **CartContext** la cual es una funcion que va a estar recorriendo a lo largo de toda la app, permitiendo asi
poder usar diferentes tipos de herramientas que se fueron armando. Esto permite la utilizacion de dichas funciones importadas en cualquier archivo que este contenido dentro del context.
> Entre algunas de sus funciones nos podemos encontrar con `addItemToCart()` 
Esta funcion va a agregar al cart todo lo que se este seleccionando en el evento, en el cual van a ser los productos. 
```
    const addItemToCart = (product) => {
        const inCart = cartItems.find((productInCart)=> productInCart.id === product.id)
    
        if(inCart){
            setCartItems(cartItems.map((productInCart) => {
                if(productInCart.id === product.id) {
                    toast.success(`Se ha agregado ${productInCart.title}`, {position: "top-right", autoClose: 2000})
                    return {...inCart, amount: inCart.amount + 1}
                } else return productInCart 
            }))
        } else {
            setCartItems([...cartItems, {...product, amount: 1}])
            toast.success(`Se ha agregado ${product.title}`, {position: "top-right", autoClose: 2000})
        
        }
    }
```
Por lo que se puede observar, comienza buscando en el array del carrito los archivos que contengan el mismo **id** que el evento (en este caso product). A su vez, tiene agregado el toast, es una extension que permite desplegar notificaciones personalizadas. La funcion luego al agregar en el estado del carrito el evento, va a preguntar si ya se encuentra dicho producto en el carrito, en caso positivo el **amount** es decir, la cantidad pasara a ser + 1. En el caso de que no haya estado agregado previamente, el `setCartItems` definira el **amount** como 1. 

> Otra funcion que podemos encontrar en el Context es la de `selectCategory`
```
     const selectCategory = (cat) => {
        setCategory(cat)
    }
```
Esta funcion es bien sencilla, va a insertar el evento seleccionado en un estado de categoria.

--- 
### Pages 
En la app estan puestas las rutas para dos paginas distintas que son estaticas, estas son la Home y Contacto mediante la cuales se puede acceder por un Link en el NavBar.
> Dentro de la Home vamos a tener dos componentes principales, estos son **Slider** y **Categories** 
> Slider tendra una funcion simple que permite al componente funcionar de forma de un slider de informacion.
```
    const handleWrap = (direction) => {
        if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
```
Este handleWrap lo que va a formar es que al seleccionar el evento mediante un **click** va a colocar un valor de Slide en un estado. 
Para luego poder asi cambiar la clase en base al numero del **slideIndex** 
`<div className={slideIndex === 1 ? "wrapper1" : slideIndex === 2 ? "wrapper2" : "wrapper"}>`

> Categories va a hacer uso del contexto mencionado previamente.
Primero va a recibir la data de la coleccion categories de firebase, para luego poder hacer un map y desplegarla en dos secciones distintas. 
Estas categorias van a tener un evento que les permitira cambiar el estado de la categoria (dentro del componente categoryItem).
`onClick={()=> selectCategory(categorias.category)}`

> En Contacto contaremos con una seccion de informacion basica del ecommerce.

--- 
### Components 
Ya se hablo previamente de algunos componentes pero vamos a buscar los mas significativos.
> Products va a estar dividido en dos componentes distintos pero similares. 
- ProductsFiltered 
- Products
ProductsFiltered es nada mas ni nada menos que los productos filtrados en base a la categoria seleccionada en categories. utilizando la informacion del estado. 
Mientras que Products es por default la pagina de productos donde se muestran en display todos ellos.
Dentro de ambos va a estar un map de la data substraida de la coleccion ProductsData de Firebase para luego llevarla al componente ProductsItem.
> En ProductsItem se va a ordenar cada producto del map anterior desplegando la informacion correspondiente.
Dentro del mismo encontramos una funcion que permite que agregar al carrito y a su vez modificar el estado del stock del producto.
```
    const reducirStock = () => {
        const reduceStock = stock - products.amount
        setStock(reduceStock)
        
    }
``` 
Aca se modifica el stock y se lo agrega al estado. Luego se agarra la funcion de agregar al carrito mencionado previamente en Context y se lo pone todo en una misma funcion. 
```
    const addReduce = (props) => {
       reducirStock(props)
        addItemToCart(props)
        
    }
```
Otro de los botones dentro del product va a ser el de llevarlo hacia el componente ItemDetail donde se va a ver la informacion especifica del elemento seleccionado. 

> Nos queda hablar del componente Cart. El cual va a almacenar toda la informacion de lo que seleccionemos.
En cart se va a hacer un map de todo lo que se seleccione en el estado cartItems proveniente del Context. Y va a contener el ItemCart.
En el evento onClick de finalizar compra, te redireccionara directamente al componente CartForm.
> En el ItemCart va a haber tres eventos distintos.
Estos eventos onClick van a activar dos funciones distintas.
- addItemToCart
- deleteItemToCart

> En el CartForm hay varios estados distintos que comprenden distintos datos que el usuario va a ingresar.
Basicamente es un formulario de tipo checkout, donde se va a agregar un documento nuevo mediante addDoc en la coleccion de Orders en Firebase, donde se ingresaran los datos que el usuario suministro en conjunto con su orden de compra. Para finalizar te llega un toast de que la compra se realizo y te reenvia a la Home page.
```
    const [newName,setOrderName] = useState('')
    const [newEmail, setOrderEmail ] = useState('')
    const [newAdress, setOrderAdress ] = useState('')
    const [newInfo, setOrderInfo] = useState('')
    const { cartItems, getTotal, clearCart } = useContext(CartContext)
    
    
    
    
    const orderCollectionRef = collection(Database,'Orders')
    
    const newOrder = async () => {
        await addDoc(orderCollectionRef, { nombre: newName, email: newEmail, direccion: newAdress, info: newInfo, items: cartItems, total: getTotal() })
        .then(clearCart(cartItems)).then( toast.success('Se ha realizado su compra', {position: "top-right", autoClose: 2000}))
    }

```
--- 
### Styles 
> Para los estilos se busco reducir una stylesheet unica para cada componente, pero sin agregar una hoja de css por cada componente.
Para eso se uso **SCSS**. Con el cual podemos importar cada hoja de estilos especifica para componente, todo dentro de la misma hoja de estilos unica que va a ser importada en todos los demas componentes de la aplicacion. Esto agiliza y resuelve de forma mucho mas ordenada todo lo concerniente a el estilizado de la app.

---
### Para finalizar 

Muchas gracias por haber llegado hasta el final de este README, espero que puedas disfrutar la aplicacion tanto como yo la disfrute. :)
