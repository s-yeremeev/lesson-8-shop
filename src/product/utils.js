const typSinchrArr = [
    "Laptops",
    "monoblocks",
    "personal computers",
    "Transformers",
]

const firmaSinchrArr = [
    "Lenovo",
    "Asus",
    "Dell",
    "Acer"
]

  /**
   * 
   * @param {Array} arr 
   * @param {Number} typValue 
   */
  const sinchr = function (arr, typValue) {
     for(let i in arr) {
         if(typValue != i) { continue }
             else { typValue = arr[i]              
            }
        return typValue
            
     }
 }