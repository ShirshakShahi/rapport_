export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error(`Error parsing LocalStorage key "${key}":`, error);
      return null;
    }
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const isAuth = (key: string) => {
  const token = getLocalStorage(key);
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const TOKEN_LOCAL_STORAGE = "token";
