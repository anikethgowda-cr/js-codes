function errorFormatter(error){
// [ { name: "name should not be empty"}, { price: "price is required"} ]
// let nameError=error.errors.name.message
// let priceError=error.errors.price.message
// return [{name:nameError},{price:priceError}]

    const {errors}=error
    const result=[]
    for(let key in errors){
        //computed property -dynamcially creating key's from a variable
        const errObj={[key]:errors[key].message};
        result.push(errObj)
    }
    return result
}
const error = {
    "errors": {
        "name": {
            "name": "ValidatorError",
            "message": "name should not be empty",
            "properties": {
                "message": "name should not be empty",
                "type": "required",
                "path": "name",
                "value": "",
                "length": 0
            },
            "kind": "required",
            "path": "name",
            "value": ""
        },
        "price": {
            "name": "ValidatorError",
            "message": "price is required",
            "properties": {
                "message": "price is required",
                "type": "required",
                "path": "price",
                "value": null
            },
            "kind": "required",
            "path": "price",
            "value": null
        }
    },
    "_message": "Product validation failed",
    "name": "ValidationError",
    "message": "Product validation failed: name: name should not be empty, price: price is required"
}


console.log(errorFormatter(error)); // [ { name: "name should not be empty"}, { price: "price is required"} ]