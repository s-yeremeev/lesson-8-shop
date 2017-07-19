class Product {
    constructor(firma, typ, model, price, description ) {
        this.firma = firma
        this.typ = typ
        this.model = model
        this.price = price
        this.description = description

        this.getFirma = this.getFirma.bind(this)
        this.geTyp = this.geTyp.bind(this)
        this.getModel = this.getModel.bind(this)
        this.getPrice = this.getPrice.bind(this)
        this.getDescription = this.getDescription.bind(this)

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

        this.visibleTyp = function(arr) {
            let visTyp = []
            for(let i in arr) {
                if(visTyp.find(arr.typ)) continue
                else visTyp.push(arr.typ)
            }
        console.table(visTyp)
        return visTyp
        }

        this.sortForPrice = function (arr) {
            const sortArr = arr.sort(
                function comparePrice(a, b) {
                         return a.price < b.price;
            })
        }

        this.addProductCart = function (arrProd, arrCart, model) {
            for(let i in arrProd) {
                if(arrProd[i].model !== model) continue
                    else arrCart.push(arrProd[i])
            }            
        }        

    }
        getFirma() {
            return this.firma
    }
        geTyp() {
            return this.typ
    }
        getModel() {
            return this.model
    }
        getPrice() {
            return this.price
    }
        getDescription() {
            return this.description
    } 
} 

// const prod1 = new Product("Lenovo", 1, "Lenovo S720", 500 , "Discr")
// const prod2 = new Product("Asus", 1, "Asus K520", 700 , "Text")
// const prod3 = new Product("Dell", 2, "Insp 7100", 1000 , "Monoblock")

// console.log(prod1)
// console.log(prod2)
// console.log(prod3)

