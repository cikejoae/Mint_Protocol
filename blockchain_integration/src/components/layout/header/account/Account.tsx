import { useState } from 'react';
import { useAccount} from '@gear-js/react-hooks';
import { Button as But } from '@chakra-ui/react';
import { AccountsModal } from './accounts-modal';
import { Wallet } from './wallet';

function Account() {
  const { account } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <But colorScheme= "pink" w="150px" h="50px" bg= "#e80b9d"  onClick={openModal}> Connect </But>
      )}
      {isModalOpen && <AccountsModal close={ closeModal}></AccountsModal>}
    </>
  );
}

export { Account };
