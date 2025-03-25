const BASE_URL = 'http://localhost:8080/lanes';

export const getLanes = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json(); // No need to access .results
  return data;
};



export const updateLane = async (id, updatedLane) => {
  const response = await fetch(`${BASE_URL}/updateLane/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedLane),
  });

  if (!response.ok) {
    throw new Error(`Failed to update lane with ID ${id}`);
  }

  return await response.json();
};