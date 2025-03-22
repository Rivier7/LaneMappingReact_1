const BASE_URL = 'http://localhost:8080/lanes';

export const getLanes = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json(); // No need to access .results
  return data;
};
