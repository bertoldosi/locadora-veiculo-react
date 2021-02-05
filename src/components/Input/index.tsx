/* eslint-disable react/jsx-indent */
import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { IconBaseProps } from 'react-icons/lib';
import { FiXCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isError={!!error} isFilled={isFilled} isFocused={isFocused}>
      <span>{Icon && <Icon size={20} />}</span>
      <div>
        <input
          ref={inputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="registerTip">{error}</Tooltip>}
        >
          <FiXCircle data-tip data-for="registerTip" size={20} />
        </OverlayTrigger>
      </div>
    </Container>
  );
};

export default Input;
