class animal {
    constructor (public name : string){}
    move(){
        console.log(`${this.name} is moving`);
    }
}

const dog = new animal("Dog");
dog.move();