/**
 * @class Cart
 */
class Cart extends Product {
    constructor(...props) {
        super(...props)  
        self = this
        this.cartArr = [] 
        
        /**
         * @function delFunktionForArr
         * @param {Array} arr
         */
        function delFunktionForArr(arr){
            for(let i in arr){
                delete arr[i].filterForTyp
                delete arr[i].visibleTyp
                delete arr[i].sortForPrice
                delete arr[i].addProduct
            }
        }

         /**
         * @function addProductCart
         * @param {Array} product
         * @param {String} model
         */
        this.addProductCart = function(product, model) {            
             cart.addProduct(product , self.cartArr, model)
             delFunktionForArr(self.cartArr)
         }

         /**
         * @function checkProduct
         * @return {Array} cartArr
         */
        this.checkProduct = function() {
            console.table(self.cartArr)
            return self.cartArr
        }

         /**
         * @function cleanProduct
         * @return {Array} cartArr
         */
        this.cleanProduct = function() {
            self.cartArr.splice(0, self.cartArr.length)
            return self.cartArr
        }
    }
}

  const cart = new Cart()
  
  console.table(arrVremProd)
  cart.addProductCart(arrVremProd, "Insp 7100")
  cart.addProductCart(arrVremProd, "Asus K520")
  cart.sortForPrice(self.cartArr)
  cart.visibleTyp(arrVremProd)
  const checkCart = cart.checkProduct()
  //cart.cleanProduct()

