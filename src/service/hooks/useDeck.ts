import { useQuery } from "react-query";
import { api } from "../api";
import { TypeDeck } from "../../models/deck";

type GetDecksResponse = {
    decks: TypeDeck[];
}

export async function getDecks(): Promise<GetDecksResponse> {
    const { data } = await api.get('/decks/user');

    return { decks: data }
}

export function useDecks() {
    return useQuery(['decks'], () => getDecks(), {
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
}