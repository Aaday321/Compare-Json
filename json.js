//
//Almost-proud author: Adeyemi Ritchards 😎
//

//Purpose
/*
    The compare function can take any 2 JSON objects and return them in an ultra readable way

    The program is meant to be ran in the console (specifially zsh) using node
    to runn program user Node <File_path>/json.js
*/

//CURRENT ISSUES/ BUGS
/*
    Right now, it will not read the last value of the second object.
    (Meaing the object with index 1 in the OBJ_ARRY)
    I don't know why!!!!

    What's really interesting is the if you use obj2 instead of obj1 on line 67
     then it can read the last value of the second object, but not of the first

    In really hope this issue doesn't have to do with objects being only semi-iterable
    cuz that would mean the entire aproach of the project is off... I don't think that
    that is the case... just thinking outloud here
*/

//NEXT STEPS:
/*
    Right now the code only works with 2 objects, in the future,
    I would like it to work with any number of objects

    Once the code is ready to ship, the last thing that I will do is make
    it be able to read from standard input to be passed any number of json files
*/


const json = {"activity":"Volunteer and help out at a senior center","type":"charity","participants":1,"price":0,"link":"","key":"3920096","accessibility":0.1,
obj1: "v1"
}


const alsoJson = {
    "activity": "Listen to a new podcast",
    "type": "relaxation",
    "participants": 1,
    "price": 0.05,
    "link": "",
    "key": "4124860",
    "accessibility": 0.12,
    obj2: "v2"
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
const compare = (obj1, obj2) =>{

    console.clear();
    console.log(`\n`);
    var counter = 0
    
    for(prop in obj1){

        const KEY_1 = Object.keys(obj1)[counter]
        const VALUE_1 = obj1[prop]
        const KEY_2 = Object.keys(obj2)[counter]
        const VALUE_2 = obj2[prop]

       
        
        if (Object.keys(obj1)[counter] === Object.keys(obj2)[counter]) { //if keys match
       

            if (obj1[prop] == obj2[prop]) { // if values also match
                console.log(`${counter+1})${GREEN} KEY & VALUE MATCH: ${CLEAR}`)
                
                printItem({
                    TYPE: KEY,          //<- Field or Vlaue
                    DATA_1: KEY_1,      //<- Data from first obj
                    KEY_COLOR: BLUE,    //<- Feild Colorer
                    DATA_COLOR: YELLOW, //<- Data Colorer
                    END: NOTEND         //<- Don't make new line 
                })   //Prints Feild

                printItem({
                    TYPE: VALUE,        //<- Field or Vlaue
                    DATA_1: VALUE_1,    //<- Data from first obj
                    KEY_COLOR: BLUE,    //<- Feild Colorer
                    DATA_COLOR: YELLOW, //<- Data Colorer
                    END: END            //<- Make new line
                })   //Prints
    
            }else if(obj1[prop] !== obj2[prop]){

                console.log(`${counter+1}) KEY MATCH ONLY: `)

                printItem({
                    TYPE: KEY,          //<- Field or Vlaue
                    DATA_1: KEY_1,      //<- Data from first obj
                    KEY_COLOR: BLUE,    //<- Feild Colorer
                    DATA_COLOR: YELLOW, //<- Data Colorer
                    END: NOTEND         //<- Don't make new line
                })   //Prints Feild
               
                printItem({
                    TYPE: VALUE,         //<- Field or Vlaue
                    DATA_1: VALUE_1,     //<- Data from first obj
                    DATA_2: VALUE_2,     //<- Data from second obj
                    KEY_COLOR: BLUE,     //<- Feild Colorer
                    DATA_COLOR: YELLOW,  //<- Data Colorer
                    END: END             //<- New line feature
                }) 
            }else{
                console.log(`this test failed\n`);
            }
        }else{
            console.log(`${counter}) KEY MISMATCH:`);

            printItem({
                TYPE: KEY,              //<- Field or Vlaue
                DATA_1: KEY_1,          //<- Data from first obj
                DATA_2: KEY_2,          //<- Data from second obj
                KEY_COLOR: RED,         //<- Feild Colorer
                DATA_COLOR: YELLOW,     //<- Data Colorer
                END: NOTEND             //<- New line feature
            }) 
            
            printItem({
                TYPE: VALUE,            //<- Field or Vlaue
                DATA_1: VALUE_1,        //<- Data from first obj
                DATA_2: VALUE_2,        //<- Data from second obj
                KEY_COLOR: RED,         //<- Feild Colorer
                DATA_COLOR: YELLOW,     //<- Data Colorer
                END: NOTEND             //<- New line feature
            }) 
        }
        counter++
    }
    console.log(`\n\n`);  
}

//Returns the index of the longer obj 
//BREAKS ENTIRE FILE TO USE ARRAY OF OBJS
/*
const getLongerIndex = (OBJ_ARRY) =>{
    var counter1 = 0
    var counter2 = 0
    for(k in obj1)counter1++
    for(k in obj2)counter2++
    
    if(counter1 < counter2){
        return 1
    }else{
        return 0
    }
}
*/

//Handles ALL output😎
const printItem = (PARAMS) =>{

    /*
        here data can be a key or a value.
        meaning that PARAMS.DATA gets passed a key sometimes and a value other times.
    */

    var shortTAB=""
    var twoItemTAB=""
    var s = ""
    var item2 = ""

    if(PARAMS.DATA_2){twoItemTAB = "\t| "; s="\b\bS: "; item2 = PARAMS.DATA_2}
    if(PARAMS.DATA_1=="")PARAMS.DATA="*EMPTY*"
    if(PARAMS.DATA)if(PARAMS.DATA_1.length < 3)TAB = "\t"

    console.log(
        `  ${
            PARAMS.KEY_COLOR         //<- Color of Key
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

compare(json, alsoJson)