const jsonSource= "sample.json";
//const myJson=await fetch('sample.json')

//this converts the json into an array type object that is useful for operations
const getrawData = async () => {
    const res = await fetch(jsonSource); //works on server but not on local file
    const data = await  res.json();
    return data
}

//this is mean to store the array but the source of the json is causing problems 
const myArray=getrawData()
const myData=myArray[0]



console.log(myArray)
