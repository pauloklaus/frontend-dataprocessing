import { connection } from "@/plugins/axios";
import ISerialize from "@/data/ISerialize";

class RequesterApi<T extends ISerialize> {

    async insert(url: string, model: T): Promise<T> {
        const res = await connection.post(url, model.toSerialize());
        return new Promise(resolve => resolve(res.data));
    }

}

export default RequesterApi;
