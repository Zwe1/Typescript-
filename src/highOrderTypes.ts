interface Ax {
  name: "A";
  type: "class";
}

interface Bx {
  name: "B";
  weather: string;
}

interface Cx {
  name: "C";
  outer: boolean;
}

interface E {
  name: "E";
}

type D = Ax | Bx | Cx | E;

function recognize(type: D) {
  switch (type.name) {
    case "A":
      return type.name;
    case "B":
      return type.weather;
    case "C":
      return type.outer;
  }
}

// keyof

type keys = keyof Cx;

type ReadOnly<T> = { [P in keyof T]: T[P] };
