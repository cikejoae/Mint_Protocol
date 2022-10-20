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
    <But className="aumento"  colorScheme= "pink" w="150px" h="50px" bg= "#e80b9d" type="button" onClick={onClick}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      {name}
    </But>
  );
}

export { AccountButton };
