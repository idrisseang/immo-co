import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const formatDate = (dateString) => {

  const date = new Date(dateString);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return date.toLocaleDateString('fr-FR', options);
}


export const getDataFromCockpitModel = async (modelType, cockpitModelName) => {

  const field = modelType.toLowerCase() === 'singleton' ? 'item' : 'items';
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_COCKPIT_API_ENDPOINT}/content/${field}/${cockpitModelName}`, {
      headers: {"api-key" : import.meta.env.VITE_COCKPIT_API_KEY}
    });
    return data;
  } catch (error) {
    throw error;
  }
}