import axios from "axios";
/*
* Endpoints used to communicate with server. These are usually called inside the action functions defined in  docOverviewAPI. 
*/
const apiKey = "RGAPI-85e2f67d-69de-491e-9e53-2f7d53002297";

export const loadDataAPI = async () => {
  const { data } = await axios({
    method: "GET",
    url: "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Heika%20?api_key=" + apiKey,
  });
  return data;
};