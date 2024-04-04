import { useQuery } from "react-query";
import { api } from "../api";
import { User, UserDetails } from "../../models/user";

type GetUsersResponse = {
    users: User[];
}

type GetUserDetialsResponse = {
    user: UserDetails;
}

type FilterParams = {
    search?: string
}

export async function getUsers({ search = "" }: FilterParams): Promise<GetUsersResponse> {
    const { data } = await api.get('/users?search=' + search);

    return { users: data }
}

export async function getUserDetails(id: string): Promise<GetUserDetialsResponse> {
    const { data } = await api.get('/users/details?id=' + id);

    return { user: data }
}

export function useUsers({ search = "" }: FilterParams) {
    return useQuery(['users', search], () => getUsers({ search }));
}