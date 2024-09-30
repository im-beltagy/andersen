
"use server"

import axios from "axios";
export const SendEmail = async (data: any) => {
console.log(data);
  const host = "http://84.21.171.6/send-email"; 
    try {
    const res = await axios.post(host, data)
    console.log(res.data);
    return res.data;
  } catch (e) {
    return e;
  }
};
