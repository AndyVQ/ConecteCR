async function postData(endpoint,data) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const respuesta = peticion.json()
        return respuesta
    } catch (error) {
        console.log(error);
        
    }
    
}
export {postData}