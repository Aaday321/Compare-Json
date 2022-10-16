const json = {
  "activity":"Volunteer and help out at a senior center",
  "type":"charity",
  "participants":1,
  "price":0,
  "link":"bb",
  "key":"3920096",
  "accessibility":0.1
}


const alsoJson = {
  "activity": "Listen to a new podcast",
  "type": "relaxation",
  "participants": 1,
  "price": 0.05,
  "link": "bb",
  "key": "4124860",
  "accessibility": 0.12
}

class keysAndVals{
  constructor(){
    this.keys = [];
    this.values = [];
  }
}

const compare = (objArray) => {
  const allKeysAndVals = new Array()
  var loopCounter = 0;

  for(var i of objArray){
    allKeysAndVals.push([[],[]])
    allKeysAndVals[loopCounter][0] = Object.keys(i)
    allKeysAndVals[loopCounter][1] = Object.values(i)

    loopCounter++
  }

  //------------------------ dynamically destructing: START -------------------------//

  var allDestructs = []
  for(var i in allKeysAndVals){
    const destruct = new keysAndVals();
    destruct.keys = allKeysAndVals[i][0];
    destruct.values = allKeysAndVals[i][1]
    allDestructs.push(destruct)
  }

  //------------------------ dynamically destructing: END -------------------------//

  for(var i in allDestructs){
    //All Keys
    console.log("\nAll keys");
    console.log(allDestructs[i].keys) 

    //All Values
    console.log("\nAll Values");
    console.log(allDestructs[i].values)
  }
  


}

compare([json, alsoJson, json])