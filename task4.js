// Task 4: delUser(number)

const SERVER_URL = "http://localhost:3000/users";


export async function delUser(id) {
  try {
    const response = await fetch(`${SERVER_URL}/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log(`Usuario con id ${id} eliminado correctamente.`);
    } else {
      console.log(`No se pudo eliminar el usuario con id ${id}.`);
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
}
