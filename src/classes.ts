class Animal {
  private name: string;
  constructor(aname: string) {
    this.name = aname;
  }
}

class panda extends Animal {
  constructor(name: string) {
    super(name);
  }
}

class wildN {
  private name: string;
  constructor(aname: string) {
    this.name = aname;
  }
}

let animal = new Animal("an");
let panda1 = new panda("DADA");
let wild1 = new wildN("some");

panda1 = animal;
// panda1 = wild1;

// 无法实例化的类

class Baned {
  static count: number = 1;
  protected name: string = "can't be instantiate";
  protected constructor(n: string) {
    this.name = n;
  }

  call() {
    return this.name + "base";
  }
}

class B extends Baned {
  protected name1: string;
  constructor(N: string) {
    super("B");
    this.name1 = N;
  }

  call() {
    return this.name1;
  }
}

// const instance1 = new Baned("i1");
const instance2 = new B("xx");
