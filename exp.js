const json = {
    "activity":"Volunteer and help out at a senior center",
    "type":"charity",
    "part:icipants":1,
    "price":6,
    "link":"",
    "kesy":"3920096",
    "accessibility":0.1,
    "obj1": "v1"
}

//console.log(JSON.stringify(json));

const jstring = JSON.stringify(json);

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
            if(i == '"' || i == "'"){
                inAString = true;
                stringCharacter = i;
                
            }
        }
        
    }
    
    
    

    
    return object;
}

const qoutationMe = (json) =>{
    var inAString = false;
    stringCharacter = null;
    var lookingFor = ":";
    var buffer = "";
    var addToBuffer = false;
    var loopCoutner = 0;
    var cutPoint = 0;
    var loopTwoCounter = 0;

    for (var i of json){
        var object = json;
        loopCoutner ++;
        var skip = false;
        if(inAString){
            if(i === stringCharacter){
                inAString = false;
                stringCharacter = null;
                skip = true;
            }
        }else{
            if(i == lookingFor){
                if(addToBuffer === false){
                    addToBuffer = true
                    cutPointOne = loopCoutner;
                }else{
                    addToBuffer = false
                    for(var ii = 0; ii <= buffer.length +2; ii++){
                        if(ii === 0){
                            object[cutPoint + loopTwoCounter] = '"'
                        }else if(ii === buffer.length+2){
                            object[cutPoint + loopTwoCounter] = '"'
                        }else{
                            object[cutPoint + loopTwoCounter] = buffer[loopTwoCounter];
                        }
                        loopTwoCounter ++;
                    }
                    cutPoint = 0;
                    loopTwoCounter = 0;
                }
                skip = true;
                if(lookingFor = ","){
                    lookingFor = ":"
                }else{
                    lookingFor = ","
                }
            }
        }
        

        if(skip === false){
            if(i == '"' || i == "'"){
                inAString = true;
                stringCharacter = i;
                
            }
            if(addToBuffer === true && i != lookingFor){
                buffer +=i
            }
        }
    }
    return object
}

console.log(qoutationMe(jstring));