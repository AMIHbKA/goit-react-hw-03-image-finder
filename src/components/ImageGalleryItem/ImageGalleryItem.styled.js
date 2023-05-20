import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 1px 0 rgb(0 0 0 / 0.14),
    0 2px 1px -1px rgb(0 0 0 / 0.12);

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
  }
`;
