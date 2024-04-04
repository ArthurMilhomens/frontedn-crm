import { TypeDeck } from "./deck";

export type User = {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
}

export type UserDetails = {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
    decks: TypeDeck[]
}