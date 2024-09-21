import { ofetch } from "ofetch";

const baseURL = 'https://wapi.autotrac-online.com.br/sandboxasiapi/api/v1/';
const httpClient = ofetch.create({ baseURL });

export default httpClient;
