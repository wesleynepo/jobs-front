import axios, { AxiosInstance } from 'axios'
import { env } from '../../config/env'


// Separate instance of axios to keep simple the modules
export const axiosZippia: AxiosInstance = axios.create({
  baseURL: env.apiURI
})