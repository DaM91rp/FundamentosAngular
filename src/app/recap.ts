const username: string = 'David';

const suma = (a: number, b: number) => {
  return a+b;
}

suma(1,3);

class Person{

  constructor(public age:number, public lastName:string) {}
}

const David = new Person(23, 'Rioja');
David.age;

