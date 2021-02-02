import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { IconBaseProps } from 'react-icons/lib';
import { FiXCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import ReactTooltip from "react-tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


import { Container } from './styles';

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
    <Container isError={!!error}>
      <span>{Icon && <Icon size={20} />}</span>
      <div>
          <input ref={inputRef} {...rest} />
        <OverlayTrigger placement="top" overlay={<Tooltip id='registerTip'>{ error}</Tooltip>}>
            <FiXCircle data-tip data-for="registerTip" size={20} />
          </OverlayTrigger>
      </div>
    </Container>
  );
};

export default Input;
