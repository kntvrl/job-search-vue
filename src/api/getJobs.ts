import axios from "axios";

import { Job } from "@/api/types";

const getJobs = async () => {
  const baseURL = process.env.VUE_APP_API_URL;
  const response = await axios.get<Job[]>(`${baseURL}/jobs`);
  return response.data;
};
export default getJobs;
