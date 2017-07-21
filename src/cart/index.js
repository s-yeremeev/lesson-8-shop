/**
 * @class Cart
 */
class Cart extends Product {
    constructor(...props) {
        super(...props)

        /**
        * @function addProduct
        * @param {Array} arrProd
        * @param {Array} arr
        * @param {String} model
        */
        this.addProduct = function (arrProd, arr, model) {
            for(let i in arrProd) {
                if(arrProd[i].model !== model) continue
                    else arr.push(arrProd[i])
            }            
        }        

         /**
         * @function checkProduct
         * @param {Array} arr
         * @return {Array} cartArr
         */
        this.checkProduct = function(arr) {
            console.table(cartArr)
            return cartArr
        }

         /**
         * @function cleanProduct
         * @param {Array} arr
         * @return {Array} cartArr
         */
        this.cleanProduct = function(arr) {
            arr.splice(0, arr.length)
            return arr
        }
    }
}

  const cart = new Cart()
  const cartArr = []
  console.table(arrVremProd)
  cart.visibleTyp()
  cart.filterForTyp(arrVremProd, 2)
  cart.addProduct(arrVremProd, cartArr, "Insp 7100")
  cart.addProduct(arrVremProd, cartArr, "Asus K520")
  cart.sortForPrice(cartArr)
  const checkCart = cart.checkProduct(cartArr)
  //cart.cleanProduct(cartArr)

