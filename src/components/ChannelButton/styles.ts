import styled from 'styled-components';
import { HiHashtag } from 'react-icons/hi';
import { MdSettings, MdPersonAdd } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;

  border-radius: 5px;
  background-color: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashIcon = styled(HiHashtag)`
  width: 16px;
  height: 21px;

  color: var(--symbol);
`;

export const InviteIcon = styled(MdPersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;
