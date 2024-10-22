import {defineStore} from "pinia";
export const useCarsStore  = defineStore('cars',  () => {
    const runtimeConfig = useRuntimeConfig();
    const {data: cars, refresh: getCars, status} =  useAsyncData(() => $fetch(runtimeConfig.public.api), {immediate: false})
    return {cars, getCars, status}
})