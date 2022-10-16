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

const compare = (obj1, obj2) => {
  let keys1 = Object.keys(obj1)
  let vals1 = Object.values(obj1)
  let keys2 = Object.keys(obj2)
  let vals2 = Object.values(obj2)

  console.log(keys1);
  console.log(keys2);
}

compare(json, alsoJson)