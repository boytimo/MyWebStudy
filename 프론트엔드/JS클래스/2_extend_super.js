//extends = 연장하다 -> 상속한다

class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTER");
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    //super는 우리가 확장을 시킨 바로 그 클래스를 참조하게 된다
    constructor(name, age, lifeLeft = 9) {
        console.log("IN CAT CONSTRUCTER");
        super(name, age);
        this.lifeLeft = lifeLeft;
    }
    meow() {
        return `MEOWww`;
    }

    eat() {
        //부모의 Pet에 같은 함수가 있을 경우 자식의 함수가 우선
        return `${this.name} scarfs his food`
    }
}

class Dog extends Pet {

    bark() {
        return `WOOF`;
    }

    eat() {
        //부모의 Pet에 같은 함수가 있을 경우 자식의 함수가 우선
        return `${this.name} scarfs his food`
    }

}


const wyatt = new Dog('Wyatt', 19);
//-> IN PET CONSTRUCTER

const monty = new Cat('monty', 9);
// -> IN CAT CONSTRUCTER
//IN PET CONSTRUCTER

console.log(monty); // -> Cat {name: 'monty', age: 9, lifeLeft: 9}
