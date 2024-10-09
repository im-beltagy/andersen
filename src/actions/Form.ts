
"use server"

import axios from "axios";
export const SendEmail = async (data: any) => {
  const host = "https://api.webizi.de/send-email"; 
    try {
    const res = await axios.post(host, data)
    return res.data;
  } catch (e) {
    return e;
  }
};
