export const saveToStorage = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error("OOPS! Error while saving data to local storage");
  }
};

export const getDataFromStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearStorage = (key: string) => {
  localStorage.removeItem(key);
};
