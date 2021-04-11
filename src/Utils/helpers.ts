
const auth = {
  get(key:string): string|null {
  
      try {
        const value = localStorage.getItem(key);
        return value;
      } catch (error) {
        return null;
      }
   
  },
  set(key:string, value:string) {
   
    return localStorage.setItem(key, value);
  }
  
};

export default auth;
