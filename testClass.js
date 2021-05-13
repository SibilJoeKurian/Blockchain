class Person{
    #name;
    constructor(name,age,sex){
        this.#name="sibil"
    }
    printObject(){
        console.log(`name=${this.name} age=${this.age} sex=${this.sex}`)
    }
    getName(){
        return this.#name;
    }
}

p1=new Person("sibil",22,"M")
let sibilName=p1.getName()
console.log(sibilName)
p2=new Person("J",22,"M")
