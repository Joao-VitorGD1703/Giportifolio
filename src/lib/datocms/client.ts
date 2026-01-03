import { GraphQLClient } from 'graphql-request';

// Instale as dependências necessárias:
// npm install graphql-request graphql dotenv

// Configure suas variáveis de ambiente no arquivo .env:
// VITE_DATOCMS_API_TOKEN=seu_token_api_aqui

// Usando process.env conforme configurado no vite.config.ts com dotenv
const API_TOKEN = process.env.VITE_DATOCMS_API_TOKEN;

type RequestOptions = {
    query: string;
    variables?: Record<string, any>;
    preview?: boolean;
};

export async function request({ query, variables, preview }: RequestOptions) {
    const endpoint = preview
        ? 'https://graphql.datocms.com/preview'
        : 'https://graphql.datocms.com/';

    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${API_TOKEN}`,
        },
    });

    return client.request(query, variables);
}
