import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { Header, ApiLoader } from 'components';
import { withProviders } from 'hocs';
import { useWasm } from 'hooks/context';


function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();
  const wasm = useWasm();
  

  return (
    <>
      <Header isAccountVisible={isAccountReady} />
      <main>{isApiReady && isAccountReady &&  wasm  ? <Routing /> : <ApiLoader />}</main>
    </>
  );
}

export const App = withProviders(Component);
