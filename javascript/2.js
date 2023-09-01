const members=[{name:"santhosh"},{name:"garthick"}]
newarr=members.map(e=>{
   return e.name.charAt(0).toUpperCase()+e.name.slice(1);
})

console.log(newarr)
console.log(members)