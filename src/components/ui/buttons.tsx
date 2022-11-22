import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons/faFloppyDisk';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button/Button';
import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled(Button)`
  padding-left: 1.625rem;
  padding-right: 1.625rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;

  > .MuiButton-startIcon {
    > svg {
      font-size: 1.125rem;
    }
  }
`;

export default DefaultButton;

//

export const AddButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton variant='contained' startIcon={<FontAwesomeIcon icon={faAdd} />} {...props}>
    {children}
  </DefaultButton>
);

export const SaveButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton type='submit' variant='contained' startIcon={<FontAwesomeIcon icon={faFloppyDisk} />} {...props}>
    {children}
  </DefaultButton>
);

export const ContinueButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton type='submit' variant='contained' startIcon={<FontAwesomeIcon icon={faArrowRight} />} {...props}>
    {children}
  </DefaultButton>
);

export const BackButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton variant='outlined' startIcon={<FontAwesomeIcon icon={faArrowLeft} />} {...props}>
    {children}
  </DefaultButton>
);

export const CancelButton: React.FC<ButtonProps> = ({ children = 'Cancel', ...props }) => (
  <DefaultButton color='error' variant='outlined' startIcon={<FontAwesomeIcon icon={faBan} />} {...props}>
    {children}
  </DefaultButton>
);

export const EditButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton variant='outlined' startIcon={<FontAwesomeIcon icon={faEdit} />} {...props}>
    {children}
  </DefaultButton>
);

export const UploadButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <DefaultButton variant='contained' startIcon={<FontAwesomeIcon icon={faUpload} />} {...props}>
    {children}
  </DefaultButton>
);
