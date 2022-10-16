//
/*

    Collaborators:
        Adeyemi Ritchards
        Rider Cogswell

*/


//PURPOSE
/*
    The compare function can take any 2 JSON objects and return them in an ultra readable way

    The program is meant to be ran in the console (specifially zsh) using node
    to runn program user Node <File_path>/json.js
*/


//NEXT STEPS:
/*
    Right now the code only works with 2 objects, in the future,
    I would like it to work with any number of objects

    Once the code is ready, the last thing that I will do is make
    it be able to read from standard input and be passed any number of json files
*/


const json = {
    "activity":"Volunteer and help out at a senior center",
    "type":"charity",
    "participants":1,
    "price":0,
    "link":"",
    "kesy":"3920096",
    "accessibility":0.1,
    "obj1": "v1"
}


const alsoJson = {
    "activity": "Listen to a new podcast",
    "type": "relaxation",
    "participants": 1,
    "price": 0.05,
    "link": "",
    "key": "4124860",
    "accessibility": 0.12,
    "obj2": "v2"
}

//Colors
const YELLOW = `\x1b[36m\x1b[0m\x1b[33m\x1b[1m`
const BLUE = "\x1b[36m"
const RED = "\x1b[31m"
const CLEAR="\x1b[0m"
const GREEN="\x1b[32m"

//New line controllers
const END = `\n`
const NOTEND = ""

//Feild strings
const KEY = "KEY: "
const VALUE = "VALUE: "





//Main function
const compare = (objArray) =>{
    
    console.clear();
    console.log(`\n`);
    var counter = 0;

    
    
    const K_V = makeObjArray(objArray)
    

    /*
        For every object in the object array,
        make a an array that holds 2 arrays. 1 of keys. the other of values.
    */
    
    for(var i = 0; i < getLongerIndex(K_V); i++){
        
        //------------------------K_V ARRAY KEY------------------------//
        /*
              [OBJ]             [KEYS or Values]              [item]
        [iterate Objects]     [0: Keys, 1: Values]    [iterate through Items]
        */
       
        if (K_V[0][0][i] == K_V[1][0][i]) { //if keys match
            
            if (K_V[0][1][i] == K_V[1][1][i]) { // if values also match
                console.log(`${counter+1})${CLEAR} KEY & VALUE MATCH: ${CLEAR}`)
                
                //PRINT KEYS
                printItem({
                    TYPE: KEY,               //<- Field or Vlaue
                    DATA_1: K_V[0][0][i],    //<- Key from first obj
                    KEY_COLOR: BLUE,         //<- Feild Colorer
                    DATA_COLOR: YELLOW,      //<- Data Colorer
                    END: NOTEND              //<- Don't make new line 
                })

                //PRINT VALUES
                printItem({
                    TYPE: VALUE,              //<- Field or Vlaue
                    DATA_1: K_V[0][1][i],     //<- Value from first obj
                    KEY_COLOR: BLUE,          //<- Feild Colorer
                    DATA_COLOR: YELLOW,       //<- Data Colorer
                    END: END                  //<- Make new line
                })
    
            }else{ //if values does not match

                console.log(`${counter+1}) KEY MATCH ONLY: `)

                //PRINT KEYS
                printItem({
                    TYPE: KEY,               //<- Field or Vlaue
                    DATA_1: K_V[0][0][i],    //<- Key from first obj
                    KEY_COLOR: BLUE,         //<- Feild Colorer
                    DATA_COLOR: YELLOW,      //<- Data Colorer
                    END: NOTEND              //<- Don't make new line
                })
                

                //PRINT VALUES
                printItem({
                    TYPE: VALUE,              //<- Field or Vlaue
                    DATA_1: K_V[0][1][i],     //<- Data from first obj
                    DATA_2: K_V[1][1][i],     //<- Data from second obj
                    KEY_COLOR: BLUE,          //<- Feild Colorer
                    DATA_COLOR: YELLOW,       //<- Data Colorer
                    END: END                  //<- New line feature
                }) 
            }
        }else{
            console.log(`${counter}) KEY MISMATCH:`); // If Keys do not match

            //PRINT KEYS
            printItem({
                TYPE: KEY,                     //<- Field or Vlaue
                DATA_1: K_V[0][0][i],          //<- keeys from first obj
                DATA_2: K_V[1][0][i],          //<- kwys from second obj
                KEY_COLOR: RED,                //<- Feild Colorer
                DATA_COLOR: YELLOW,            //<- Data Colorer
                END: NOTEND                    //<- New line feature
            }) 
            
            //PRINT VALUES
            printItem({
                TYPE: VALUE,                    //<- Field or Vlaue
                DATA_1: K_V[0][1][i],           //<- Data from first obj
                DATA_2: K_V[1][1][i],           //<- Data from second obj
                KEY_COLOR: RED,                 //<- Feild Colorer
                DATA_COLOR: YELLOW,             //<- Data Colorer
                END: END                        //<- New line feature
            }) 
        }
        counter++
    }
    console.log(`\n\n`);  
}




//Returns the index of the longer obj 
const getLongerIndex = (objs_converted) =>{

//------------------------K_V ARRAY KEY------------------------//
/*
     [OBJ]              [KEYS or Values]              [item]
[iterate Objects]     [0: Keys, 1: Values]    [iterate through Items]
*/

    var counter1 = new Number(0);
    var counter2 = new Number();
    for(var k in objs_converted[0][0])counter1++
    for(var k in objs_converted[1][0])counter2++

    if(counter1 < counter2){
        return counter1
    }else{
        return counter2
    }
}




//Handles ALL output😎
const printItem = (PARAMS) =>{


    /*
        Here "DATA" can be either a key or a value.
        meaning that PARAMS.DATA gets passed a key sometimes and a value other times.
    */

    var shortTAB = "";
    var twoItemTAB = "";
    var s = "";
    var item2 = "";

    if(PARAMS.DATA_2){twoItemTAB = "\t| "; s="\b\bS: "; item2 = PARAMS.DATA_2}

    //Empty checking is not working 😭
        //if(PARAMS.DATA_1=="")PARAMS.DATA_1="*EMPTY*"
        //if(item2)if(item2=="")item2="*EMPTY*"

    if(PARAMS.DATA)if(PARAMS.DATA_1.length < 3)TAB = "\t"

    console.log(
        `  `+
            `${PARAMS.KEY_COLOR      //<- Color of Key
            }${PARAMS.TYPE           //<- Prints the word Value or Feild
            }${s                     //<- prints "S:" if prular
            }${PARAMS.DATA_COLOR     //<- Color of data
            }${shortTAB              //<- Tabs if less than 3 data characters
            }${PARAMS.DATA_1         //<- Prints Value or Feild
            }${twoItemTAB            //<- Tabs if there are two items
            }${item2                 //<- Prints Item 2 if there are 2 items
            }${PARAMS.END            //<- Prints new line character or prints nothing
            }${CLEAR                 //<- Clear Formatting
        }`
    );
}





const makeObjArray = (objArray) =>{


//------------------------K_V ARRAY KEY------------------------//
/*
    [OBJ]             [KEYS or Values]              [item]
[iterate Objects]     [0: Keys, 1: Values]    [iterate through Items]
*/

    var K_V = new Array();
    var lCntr = new Number();

    for(var i of objArray){
        
        K_V.push(

            [
                [/* Keys */],
                [/* Values */]
            ]
        )

        K_V[lCntr][0] = Object.keys(i);   // Pull key from object and add it to array
        K_V[lCntr][1] = Object.values(i); // Pull value from object and add it to array
        lCntr++;
    }

    return K_V;
}

compare([json, alsoJson])