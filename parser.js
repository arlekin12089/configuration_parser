
const fs = require("fs"); //will use fs module

fs.readFile("config.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    let dataArr = data.split("\n");
    let obj = {};//top level object

    for(let i =0; i<dataArr.length; i++){
        let keys = dataArr[i].slice(0, dataArr[i].indexOf("=")).split(".");
        let values = dataArr[i].slice(dataArr[i].indexOf("=")).split("=*/").join("").slice(1);
        
        let target = obj; //reference to current nesting level 
        if (keys.length === 1) {
            obj[keys[0]] = values;
        }
        if (keys.length > 1) { 
            for(let i = 0; i<keys.length; i++){               
             
               // target[keys[i]] = {};
               //Checking if index = last index then add values otherwise create an empty object; target[keys[i]] === mysql
    
                if( i === keys.length - 1 ) {
                  target[keys[i]] = values;
                }else{
                  if(!target.hasOwnProperty(keys[i])){
                   target[keys[i]] = {}// key of nested object inside the target   mysql : {}
                  }
                  target = target[keys[i]];
                } 
            }           
        }    
    }
    console.log(JSON.stringify(obj, null, 2))
  }
});
