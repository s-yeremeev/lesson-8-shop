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
           this.firma = sinchr(firmaSinchrArr, firma)
           this.typ = sinchr(typSinchrArr, typ)
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
                const typString = sinchr(typSinchrArr, typ)
                for (let i in arr) {               
                    if(arr[i].typ == typString){
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
            this.visibleTyp = function() {
                console.log("You are available these types: value 0 = "+ typSinchrArr[0] +", value 1 = "+ typSinchrArr[1] +", value 2 = "+ typSinchrArr[2] +", value 3 = "+ typSinchrArr[3] +"")
            }

             /**
              *@function sortForPrice
             * @param {Array} arr
             */
            this.sortForPrice = function (arr) {
                arr.sort(function compare(a, b) {
                        return a.price - b.price
                })
                return arr
            }       
        }
    }
    return Product
})() 

 const prod1 = new Product(0, 0, "R 7500", 1000 , "Monoblock")
 const prod2 = new Product(1, 1, "Lenovo S720", 800 , "Discr")
 const prod3 = new Product(2, 2, "Asus K520", 700 , "Text")
 const prod4 = new Product(3, 3, "Insp 7100", 900 , "Monoblock")

 const arrVremProd = [].concat(prod1, prod2, prod3, prod4)