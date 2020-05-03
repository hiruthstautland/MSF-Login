import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `${process.env.API_URL}/campaigns/`;

export function getCampaigns() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
