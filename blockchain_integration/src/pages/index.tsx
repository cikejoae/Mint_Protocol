import { Route, Routes } from 'react-router-dom';
import { OnLogin, InfoText } from 'components';
import { Create } from './create';
import { main } from './main';
import { Home } from './home';
import { NFT } from './nft';

const routes = [
  { path: '/', Page: main },
  { path: 'nft/:id', Page: NFT },
  {  path: 'mint', Page:  Home },
  { path: 'create', Page: Create, isPrivate: true },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page, isPrivate }) => (
      <Route
        key={path}
        path={path}
        element={
          isPrivate ? (
            <OnLogin fallback={<InfoText text="In order to use all features, please login" />}>
              <Page />
            </OnLogin>
          ) : (
            <Page />
          )
        }
      />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
