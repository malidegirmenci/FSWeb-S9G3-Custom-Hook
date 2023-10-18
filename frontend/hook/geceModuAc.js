
import { useLocaleStorage } from "./localeStorageKullan";

export const useGeceModu = (initialValue) => {
    const [geceModu, setGeceModu] = useLocaleStorage("Gece Modu", initialValue);
    const handleGeceModu = updatedGeceModu => {
        setGeceModu(updatedGeceModu);
    };
    console.log("geceModuAc-geceModu:", geceModu);
    return  [geceModu, setGeceModu, handleGeceModu];
};