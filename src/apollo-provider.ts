import {setContext} from "@apollo/client/link/context";
import Cookie from "js-cookie";
import {ApolloClient,InMemoryCache} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";

const httpLink = createUploadLink({
    uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = Cookie.get('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getComments: {
            keyArgs: ['dto'],
  
            // @ts-ignore
            merge(existing, incoming, { args: { skip = 0 }}) {
              console.log('existing', existing);
              // @ts-ignore
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i];
              }
              return merged;
            },
          },
          getReviews: {
            keyArgs: ['dto'],
  
            // @ts-ignore
            merge(existing, incoming, { args: { skip = 0 }}) {
              // @ts-ignore
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i];
              }
              return merged;
            },
          }
        }
      }
    }
  })

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
});