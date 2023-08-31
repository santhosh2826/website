members=[{"name":"santhosh"},{"name":"garthick"}]
s=members.map(e => {
   return {name:e.name.charAt(0).toUpperCase+e.name.slice(1)
}})
console.log(s)
console.log(members);
