function convertHTML(str) {
   let HTMLvals = {
      "&": "&amp;",
      "<": "&lt;",
      "\"": "&quot;",
      ">": "&gt;",
      "'": "&apos;"
   }
   let count = 0;

   //find special characters
   for(i in Object.keys(HTMLvals)){
      if(str.match(Object.keys(HTMLvals)[i])){
         count ++;
      }
   }

   if(count == 0){
      console.log(str)
      return str;
   }

   function replacer(match){
      return HTMLvals[match];
   }

   if(count == 1){
      for(i in Object.keys(HTMLvals)){
         if(str.match(Object.keys(HTMLvals)[i])){
            str = str.replace(new RegExp(Object.keys(HTMLvals)[i],'g'), replacer)
         }
      }
   }
   else{
      for(i in Object.keys(HTMLvals)){
         if(str.match(Object.keys(HTMLvals)[i])){
            str = str.replace(new RegExp(Object.keys(HTMLvals)[i],'g'), replacer)
         }
      }




   }
   console.log(str)
   return str
   
       //console.log(str.replace(new RegExp(Object.keys(HTMLvals)[i],'g'), replacer));
   console.log(count)

   


}
 

convertHTML("Dolce & Gabbana")// should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos")// should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve")// should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"')// should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List")// should return Schindler&apos;s List.
convertHTML("<>")// should return &lt;&gt;.
convertHTML("abc")// should return abc.
