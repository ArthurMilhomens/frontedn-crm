export type TypeDeck = {
  id: string;
  name: string;
  colors: string[];
  userId: string;
  cards: CardDetails[];
};

type CardDetails = {
    card: TypeCard;
    qtd: string;
};

export type TypeCard = {
  qtd: string;
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  name: string;
  scryfall_uri: string;
  highres_image: boolean;
  image_status: string;
  image_uris: string;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  legalities: string[];
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  rulings_uri: string;
  rarity: string;
  flavor_text: string;
  card_back_id: string;
  prices: string;
};
