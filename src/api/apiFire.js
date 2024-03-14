export const fetchFireLocations = async (latitude, longitude, temperature) => {
    try {
        const response = await fetch("https://satlled.ccontrolz.com/satelite/insert", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitud: latitude,
                longitud: longitude,
                temperature: temperature
            })
        });

        if (response.ok) {
            return "termino";
        } else {
            throw new Error(`Error en la solicitud POST: ${response.status}`);
        }
    } catch (error) {
        console.error("Error al enviar la solicitud POST:", error);
        throw error;
    }
};
