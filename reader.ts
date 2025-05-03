const jsonSource= "sample.json";
//const myJson=await fetch('sample.json')

const getrawData = async () => {
    const res = await fetch(jsonSource); //works on server but not on local file
    const data = await  res.json();
    return data
}

const myArray=getrawData()
const myData=myArray[0]


async function areafilter() { 
   

    const payload = await myData;
    //seperates arrays in json into seperate objects
   //filters will be tweaked to suit ideal parameters
    let filterList = payload.filter((eventData) => {
        eventData.AREAS.length() >1; { return eventData}   
    })
    return filterList;
    }

 async function timeFilter() { 
   

        const payload = await areafilter();
        //seperates arrays in json into seperate objects
       //filters will be tweaked to suit ideal parameters
        let filterList = payload.filter((eventData) => {
            eventData.TIMES.excludes("Time"); { return eventData}   
        })
        return filterList;
        }
    
    
const filteredList=timeFilter()
console.log(filteredList)
