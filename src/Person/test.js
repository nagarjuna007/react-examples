('aabbccc',2) => aabbcc
ababababababababaabab,2 -
ababab

function trim(data,index){
    var map= new Map();
    for(var i=0;i<data.length;i++){

        var str="";
        var count=0;
        if(i!=0){
            if(data[i]==data[i-1]){
                if(count>index){

                }else{
                    str=str+data[i]
                }
                count=count+1;
            }else{
                count=0;
            }
        }else{
            str=data[i];
        }
        
    }

    var finalStr="";
    for(var [key,value] of map.entries()){
        if(value>2){
            finalStr=finalStr+key+key
        }else{
            finalStr=finalStr+key+key;
            
        }
    }
    consile.log(finalStr);
}

