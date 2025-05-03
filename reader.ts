const jsonSource= "sample.json";
//const myJson=await fetch('sample.json')

const getrawData = async () => {
    const res = await fetch(jsonSource); //works on server but not on local file
    const data = await  res.json();
    return data
}

const myArray=getrawData()
const myData=myArray[0]



console.log(myArray)
