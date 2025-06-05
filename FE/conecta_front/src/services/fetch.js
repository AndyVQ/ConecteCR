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

async function getData(endpoint,id="") {
    try {
        const response = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
export {postData, getData}