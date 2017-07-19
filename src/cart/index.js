class Cart extends Product{
    constructor(...props) {
        super(...props)        
        cartArr = []
    }
}

const prod1 = new Product("Lenovo", 1, "Lenovo S720", 500 , "Discr")
const prod2 = new Product("Asus", 1, "Asus K520", 700 , "Text")
const prod3 = new Product("Dell", 2, "Insp 7100", 1000 , "Monoblock")
 const arrVremProd = new Object.assign(prod1, prod2, prod3)
// const cart = new Cart(addProductCart(arrVremProd, cartArr, 1))