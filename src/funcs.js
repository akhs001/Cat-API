export const loadData =async (url)=>
{
    const response  = await fetch(url , {
        method: "GET",
        headers: {   
            "x-api-key" : process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json"
        }
      })

      const result = await response.json();


      return result;
}




