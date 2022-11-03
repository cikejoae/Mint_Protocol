import { Button, Input } from '@gear-js/ui';
import minus from 'asset/images/form/minus.svg';
import { FieldArrayWithId, UseFormRegister } from 'react-hook-form';
import styles from './Attributes.module.scss';

type Props = {
  register: UseFormRegister<any>;
  fields: FieldArrayWithId[];
  onRemoveButtonClick: (index: number) => void;
};

function Attributes({ register, fields, onRemoveButtonClick }: Props) {
  const getFields = () =>
    fields.map(({ id }, index) => (
      <div key={id} className={styles.input}>
        <div className={styles.input}>
          <Input label="Key" className={styles.input} {...register(`attributes.${index}.key`, { required: true })} />
          <Input 
            label="Value"
            className={styles.input}
            {...register(`attributes.${index}.value`, { required: true })}
          />
        </div>
        {index !== 0 && (
          <Button className="btn"
            icon={minus}
            
            onClick={() => onRemoveButtonClick(index)}
            
          />
        )}
      </div>
    ));

  return <div>{getFields()}</div>;
}

export { Attributes };
