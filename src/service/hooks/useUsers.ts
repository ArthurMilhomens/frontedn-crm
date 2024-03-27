import { useQuery } from "react-query";
import { api } from "../api";
import { User } from "../../models/user";

type GetUsersResponse = {
    users: User[];
}

type FilterParams = {
    search?: string
}

export async function getUsers({ search = "" }: FilterParams): Promise<GetUsersResponse> {
    const { data } = await api.get('/users?search=' + search);

    return { users: data }
}

export function useUsers({ search = "" }: FilterParams) {
    return useQuery(['users', search], () => getUsers({ search }));
}