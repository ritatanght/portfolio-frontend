const baseUrl = "/api/projects";

export const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
