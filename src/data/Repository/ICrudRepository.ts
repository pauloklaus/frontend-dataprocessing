import ISerialize from "@/data/ISerialize";

interface ICrudRepository<T extends ISerialize> {
    insert(model: T): Promise<T>;
}

export default ICrudRepository;
