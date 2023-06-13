//https://api.weatherapi.com/v1/current.json?key=27d835d5d1da47f280693018231306&q=Mumbai&aqi=no

 let target = 'Mumbai'
const fetchResults = async(targetlocation) =>{
    let url=`https://api.weatherapi.com/v1/current.json?key=27d835d5d1da47f280693018231306&q=${targetlocation}&aqi=no`
  
     const res= await fetch(url)
     const data = await res.json()

     console.log(data)


}
fetchResults(target)