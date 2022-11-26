import Layout from "./containers/Layout";
import {Normalize} from "styled-normalize";
import {RoutesSwitch} from "./Routes";
import {client} from "./apollo-provider";
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import UserProvider from './containers/UserProvider';
import { CartProvider } from './containers/CartProvider';
import { FavoriteProductsProvider } from './containers/FavoriteProductsProvider';

function App() {
  return (

  <ApolloProvider client={client}>
  <RecoilRoot>
  <UserProvider>
    <CartProvider>
      <FavoriteProductsProvider>
        <Layout>
        <RoutesSwitch/>
        <Normalize/>
        </Layout>
      </FavoriteProductsProvider>
    </CartProvider>
  </UserProvider>
  </RecoilRoot>
  </ApolloProvider>)

}

export default App;