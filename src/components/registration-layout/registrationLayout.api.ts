import axios from "axios";

export const createOrder = async (data: any) => {
    const response = await axios.post("/public/api/orders", data);
    return response;
};