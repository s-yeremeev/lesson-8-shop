/**
 * @class Shop
 */
class Shop extends Cart {
   constructor(...props) {
       super(...props)
        self = this
        this. klientArr = []      

         /**
         * @function klientDataForOrder
         * @param {String} name
         * @param {String} telefon
         * @param {String} mail
         * @param {String} city
         * @param {String} postNummer
         */
        this.klientDataForOrder = function (
            name,
            telefon,
            mail,
            city,
            postNummer
        ) {
            /**
             * @function validation
             * @param {*} regexp
             * @param {String} field
             * @return field
             */
            function validation(regexp, field) {
                if(field.match(regexp)) return field
                    else console.log(field +" is not correct")
            }       
            const telRegexp = /(\(\()[\d]{3}(\) )[\d]{3}(-)[\d]{2}(-)[\d]{2}/gi
            const mailRegexp = /[\w]{1,}(@)[\w]{3,}(.)[\w]{2,3}/gi
            const postNummerRegexp = /[\d]{1,5}/gi
            const cityRegexp = /[A-Z]{1}[a-z]{1,}/gi

            if (
               validation(telRegexp, telefon)
               &&validation(mailRegexp, mail)
               &&validation(postNummerRegexp, postNummer)
               &&validation(cityRegexp, city)
                ) { 
                const obj = {Name: name, Telefon: telefon, Mail: mail, City: city, PostNummer: postNummer}
                self.klientArr.push(obj)
                return self.klientArr
            } else return false
        }
        
        /**
         * @function order
         * @param {Array} klientDataForOrder
         * @param {Array} arrProduct
         * @return {Array} endArr
         */
        this.order = function(klientDataForOrder, arrProduct) {
           const endArr = klientDataForOrder.concat(arrProduct)
           function cleanData(arr) {
                    arr.splice(0, arr.length)
            }
           cleanData(klientDataForOrder)
           cleanData(arrProduct)
           return endArr
        }
    }
}

 const shop = new Shop()
 const klient = shop.klientDataForOrder("Namee", "((099) 999-99-99", "some@mail.com", "Kharkiv", "12345")
 const order = shop.order(klient, checkCart)
 console.table(order)