import { defineStore } from 'pinia';
interface Developer {
  baseURL: string;
}

const useDeveloperStore = defineStore('developer', {
  state: (): Developer => ({
    baseURL: 'http://150.158.14.110:8081/',
  }),
  persist: true,
});

export default useDeveloperStore;
