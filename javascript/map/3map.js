
a=["a","b","c"]
a.forEach((e,i,arr) => {
    let x=0
 for(i=0;i<a.length;i++)
 {
    if(e==a[i])
    {
        x++;
    }
 }
 console.log({[e]:x})
});
