import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <span>{Icon && <Icon size={20} />}</span>
      <div>
        <input ref={inputRef} {...rest} />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </div>
    </Container>
  );
};

export default Input;
