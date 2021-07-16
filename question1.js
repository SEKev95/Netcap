var LIMIT = Number.parseInt(process.argv[2]);

function theCapital(caps){
    for (let i = 1; i <= caps; i++){
      if(!(i % 2 > 0) && !(i % 3 > 0)){
        console.log('Netcapital')
      }else if(!(i % 3 > 0)){
        console.log('capital')
      }else if(!(i % 2 > 0)){
        console.log('Net')
      }else{
        console.log(i)
      } 
    } 
}
theCapital(10)   