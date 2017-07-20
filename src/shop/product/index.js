const Product = (function () {
/**
 * @class Product
 * @param {Number} firma
 * @param {Number} typ
 * @param {String} model
 * @param {Number} price
 * @param {String} description
 */
    class Product {
        constructor(firma, typ, model, price, description ) {
            switch(firma) {
                     case 1 : firma = "Lenovo"
                         break
                     case 2 : firma ="Asus"                       
                         break
                     case 3 : firma ="Dell"                      
                         break
                     case 4 : firma ="Acer"
                         break
                     case 5 : firma ="Aple"
                         break
                     return firma
              }

            this.firma = firma

            switch(typ) {
                     case 1 : typ = "Laptops"
                         break
                     case 2 : typ ="monoblocks"                       
                         break
                     case 3 : typ ="personal computers"                      
                         break
                     case 4 : typ ="Transformers"
                         break
              }
            this.typ = typ
            this.model = model
            this.price = price
            this.description = description

            /**
             * @function filterForTyp
             * @param {Array} arr
             * @param {Number} typ
             */
            this.filterForTyp = function(arr, typ) {
                let typArr = []
                for (let i in arr) {               
                    if(arr[i].typ == typ){
                        typArr.push(arr[i])
                    }
                }
                console.table(typArr)
                return typArr
            }

             /**
              *@function visibleTyp
             * @param {Array} arr
             */
            this.visibleTyp = function(arr) {
                let visTyp = []
                for(let i in arr) {
                    if (
                        visTyp.find(
                                    function (element, index, arr){
                                        if(arr[i].typ) return true    
                                            return false                                
                                    })
                    ) continue
                    else visTyp.push(arr[i].typ)
                     
                }
            console.table(visTyp)
            return visTyp
            }

             /**
              *@function sortForPrice
             * @param {Array} arr
             */
            this.sortForPrice = function (arr) {
                arr.sort(
                        function compare(a, b) {
                                return a.price - b.price
                        })
                return arr
            }

              /**
              *@function addProduct
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

        }
    }
    return Product
})() 

 const prod1 = new Product(1, 1, "Lenovo S720", 800 , "Discr")
 const prod2 = new Product(2, 2, "Asus K520", 700 , "Text")
 const prod3 = new Product(3, 3, "Insp 7100", 900 , "Monoblock")

  const arrVremProd = [].concat(prod1, prod2, prod3)