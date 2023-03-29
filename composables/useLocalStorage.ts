// // Needs extending for edge cases, i.e. for SSR, wrap with api
export function useLocalStorage(key, val = null) {
  //   if (typeof window !== 'undefined') {
  //     let storedVal = read();
  //     if (storedVal) {
  //       val = ref(storedVal);
  //     } else {
  //       val = ref(val);
  //       write();
  //     }
  //     watch(val, write, { deep: true });
  //     function read() {
  //       return JSON.parse(localStorage.getItem(key));
  //     }
  //     function write() {
  //       if (val.value === null || val.value === '') {
  //         localStorage.removeItem(key);
  //       } else {
  //         localStorage.setItem(key, JSON.stringify(val.value));
  //       }
  //     }
  //     return val;
  //   }
}
