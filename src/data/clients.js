export async function getClients() {
    const res = await fetch(import.meta.env.VITE_URL_API);
    const data = await res.json();

    return data;
}

export async function getClient(id) {
    const url = import.meta.env.VITE_URL_API + `/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export async function postClients(data) {
    try {
        const res = await fetch(import.meta.env.VITE_URL_API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        })

        await res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function putClient(data, id){
    try {
        const res = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        })

        await res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteClient(id){
    try {
        const res = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
            method: 'DELETE'
        })

        await res.json();
    } catch (error) {
        console.log(error);
    }
}