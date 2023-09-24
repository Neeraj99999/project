const str1 = 120;
const str2 = 'defhjdschjdsbj';
const mergeAlternatively = (str1, str2) => {
   const a = str1.toString().split("").filter(el => !!el);
   const b = str2.split("");
   let mergedString = '';
   for(var i = 0; i < a.length || i < b.length; i++){
      if(i < a.length){
         mergedString += a[i];
      };
      if(i < b.length){
         mergedString += b[i];
      };
   };
   return mergedString;
};
console.log(mergeAlternatively(str1, str2));