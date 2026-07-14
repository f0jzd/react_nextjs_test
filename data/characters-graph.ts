

export interface CharacterInfo {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  image: string;
}

export interface CharactersResponseGraphQL {
  data: {
    characters: {
      edges: CharacterInfo[];
      limit: number;
      offset: number;
      total: number;
    };
  };
}

export async function getCharactersGraphQL(): Promise<CharacterInfo[]> {
  const graphQLQuery = `query MyQuery {
    characters {
    edges {
      id
      name
      gender
      status
      species
      image
    }
    limit
    offset 
    total
  }
}
`;

  //POSTA EN REQUEST TILL URL:n

  const fecthedGraphQLResponse = await fetch(
    "https://futuramaapi.com/graphql",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ query: graphQLQuery }),
    },
  );

  const jsonData = await fecthedGraphQLResponse.json();

  return jsonData.data.characters.edges;

}


