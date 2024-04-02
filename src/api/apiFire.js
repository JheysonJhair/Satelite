export const fetchFireLocations = async (latitude, longitude, temperature) => {
  try {
    const response = await fetch(
      "https://satlled.ccontrolz.com/satelite/insert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitud: latitude,
          longitud: longitude,
          temperature: temperature,
        }),
      }
    );

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

export const enviarNotificacion = async (ubicacionExacta) => {
  const url = "https://fcm.googleapis.com/fcm/send";
  const body = {
    to: "/topics/test",
    notification: {
      body: ` ${ubicacionExacta} ¡Toma precauciones!`,
      title: "¡Alerta de Incendio!",
      subtitle: "¡Toma precauciones!",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/188/566/original/fire-png.png",
    },
  };
  const headers = {
    Authorization:
      "key=AAAA7OV-iwM:APA91bHtYo0svwGvsdkI8xdJ-5HhRvJVEb6ffEB9pKWzBjTAMEIfpaGUUKBFHIjGYHfxyYmSIqnV0BbDh1Zi1kPzKR8mqxVHy0V_D3FEUlcTqT6qD9xEKAX8uPeyXnlbGhYUCYegS2G7",
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar la notificación:", error);
    throw error;
  }
};
