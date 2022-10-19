import Identicon from '@polkadot/react-identicon';
import clsx from 'clsx';
import { buttonStyles } from '@gear-js/ui';
import { Button as But } from '@chakra-ui/react';

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, isActive, block }: Props) {
  const className = clsx(
    buttonStyles.button,
    buttonStyles.normal,
    isActive ? buttonStyles.primary : buttonStyles.secondary,
    block && buttonStyles.block,
  );

  return (
    <But colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d" type="button" className={className} onClick={onClick}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      {name}
    </But>
  );
}

export { AccountButton };
