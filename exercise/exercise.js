const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveLocal = {
  save:(key, value) => {
    if(typeof key !== "string") throw new Error("key deve essere una stringa")
    if(value === undefined) throw new Error("value must be valid")
    localStorage.setItem(key, JSON.stringify(user))
  },
  get:(key) => {
    if (typeof key !== "string") throw new Error("key must be a valid string")
    return JSON.parse(localStorage.getItem(key))
  },
  remove:(key) => {
    if (typeof key !== "string") throw new Error("key must be a valid string")
    localStorage.removeItem(key)
  },
  clear:() => {
    localStorage.clear()
},
}

console.log('user', user);
