var LIMIT = Number.parseInt(process.argv[2]);

function theCapital(caps){
    for (let i = 1; i <= caps; i++){
      if(!(i % 2 > 0) && !(i % 3 > 0)){
        console.log('Netcapital')
      }else if(!(i % 3 > 0)){
        // originally had it as (i % 3 === 0) 
        console.log('capital')
      }else if(!(i % 2 > 0)){
        //  since "===" would be true, (!>) only runs when it is false
        console.log('Net')
      }else{
        console.log(i)
      } 
    } 
}
theCapital(10)    
// To run, in the terminal enter "node question1.js"
