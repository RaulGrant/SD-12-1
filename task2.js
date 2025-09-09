// Task 2: listUsers()


const SERVER_URL = "http://localhost:3000/users";

export async function listUsers() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}
