// Task 3: addUser(first_name, last_name, email)

const SERVER_URL = "http://localhost:3000/users";

export async function addUser(first_name, last_name, email) {
  try {
    const newUser = {
      first_name,
      last_name,
      email
    };

    const postResponse = await fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    const result = await postResponse.json();
    console.log("Usuario agregado:", result);
  } catch (error) {
    console.error("Error al agregar usuario:", error);
  }
}
