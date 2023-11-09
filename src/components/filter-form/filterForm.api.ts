import axios from "axios";
import { ICitiesData, ITourPacksData } from "../../interface";

export async function getCities() {
    const response = await axios.get(`/public/api/cities`) as ICitiesData;
    return response;
}

export function getTourPacks(city_id: number | undefined) {
    return async () => {
        if (city_id) {
            const response = (await axios.get(
                `/public/api/tour-pack?city_id=${city_id}`
            )) as ITourPacksData;
            return response;
        }
        const data: ITourPacksData = { data: { data: [], total: 0 } };
        return Promise.resolve(data);
    };
}