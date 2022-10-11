const wontworkyet = {
    "a":10,
    "t":0.5,
    "part:icipants":1,
    "price":6,
    "link":"",
    "kesy":"3920096",
    "accessibility":0.1,
    "obj1": "v1"
}

const works = {
    "a":"10",
    "t":"0.5",
    "part:icipants":"1",
    "price":"6",
    "link":"",
    "kesy":"3920096",
    "accessibility":"0.1",
    "obj1": "v1"
}



const jstring = JSON.stringify(works);
const jstring_noWorking = JSON.stringify(wontworkyet)

//This WORKS!! .. but if only works if you all keys and values are wrapped in "" or '' or ``
const stringMe = (json)=>{

    var object = [[],[]];
    [keys, values] = object;
    var buffer= "";
    var isKey = true;

    var lookingFor;

    var inAString = false;
    var stringCharacter;


    isKey = true;
    for(i of json){
        skip = false;
        if(inAString){
            if(i === stringCharacter){
                if(isKey === true){
                    keys.push(buffer)
                }else{
                    values.push(buffer)
                }
                inAString = false;
                buffer = "";
                stringCharacter = null;
                if(isKey === true){
                    isKey = false;
                }else{
                    isKey = true
                }
                skip = true;
            }else{
                buffer += i;
            }
        }
        if(skip === false){
            if(i == '"' || i == "'" || i == ``){
                inAString = true;
                stringCharacter = i;
                
            }
        }
        
    }
    
    
    

    
    return object;
}


//This function does not work yet, I'm currently working on it
//When its finished, it will take values like: 10 and turn them into "10" so that the previous function will work
const qoutationMe = (json) =>{

    var object = json;
    var miniBuffer = [];
    var buffer = "";
    var engaged = false;
    var cutPoint = 0;
    var exitPoint = 0;
    var sliceOne = "";
    var sliceTwo = "";

    for (var i in json){
        i = Number(i);
        if (i === 0){
            miniBuffer[0] = json[i];
            miniBuffer[1] = json[i+1];
        }else{
            miniBuffer[0] = miniBuffer[1];
            miniBuffer[1] = json[i];
        }
        if(engaged == false){
            if(miniBuffer[0] == ":" || miniBuffer[0] == ","){
                if(miniBuffer[1] != "'" && miniBuffer[1] != '"' ){
                    buffer += json[i];
                    engaged = true;
                    cutPoint = i;
                }
            }
        }else{
            if(json[i] != "," && json[i] != ':'){
                buffer += json[i];
            }else{
                engaged = false;
                object[cutPoint] = '"'
                for(var ii in buffer){
                    ii = Number(ii)
                    object[cutPoint+ii] = buffer[ii]
                    exitPoint = ii;
                }
                sliceOne = object.slice(0, cutPoint);
                sliceTwo = object.slice(cutPoint, object.length-1);
                sliceOne.push('"');
                object - sliceOne.concat(sliceTwo)
            }
        }
        
        
        
    }

    return object;
}

//Does not work
//console.log(qoutationMe(jstring));

//works
console.clear();
console.log('\n');
console.log("Keys:");
console.log(stringMe(jstring)[0]);
console.log('\n');
console.log("Values:");
console.log(stringMe(jstring)[1]);
console.log("\n");