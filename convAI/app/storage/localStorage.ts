export const storeData = async (key:string, value:any) => {
  try {
    if (typeof value === "object") {
      const jsonValue = JSON.stringify(value);
      await localStorage.setItem(key, jsonValue);
    } else {
      await localStorage.setItem(key, value);
    }
  } catch (error) {
    //console.log(error);
  }
};

export const getData = async (key:any) => {
  try {
    const value:any = await localStorage.getItem(key);
    if (typeof value === "object") {
      return JSON.parse(value);
    }
    return value;
  } catch (error) {
    //console.log(error);
  }
};

export const removeData = async (key:any) => {
  try {
    await localStorage.removeItem(key);
  } catch (error) {
    //console.log(error);
  }
};