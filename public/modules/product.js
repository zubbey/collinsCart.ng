// OBJECT constructor
export default class Product{
	constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.productSearch = 0
	}
	addScore(){
		this.productSearch++;
	}
}
// export {Product};