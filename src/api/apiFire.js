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

export const enviarNotificacion = async () => {
  const url = "https://fcm.googleapis.com/fcm/send";
  const body = {
    to: "/topics/test",
    notification: {
      body: "jueanito cloud body",
      title: "eaxaswerick",
      subtitle: "erasesubtitle",
      image:
        "https://images.freeimages.com/images/large-previews/e4f/un-fueguito-little-fire-1190570.jpg",
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
    console.log("Respuesta de FCM:", data);
    return data;
  } catch (error) {
    console.error("Error al enviar la notificación:", error);
    throw error;
  }
};
