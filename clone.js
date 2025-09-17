let obj = {

    user: {
 name: 'Ivan',
 adress: 'Kyiv',
 street: 'Hrychevskogo'
    },

 work:[{
 place: 'Home',
 time: 'flexible'
 }]

}
let obj2 = {
  ...obj,
  user: { ...obj.user },
  work: [ ...obj.work ]
};
obj2.user.name = "Bob"

console.log(obj2)
console.log(obj)