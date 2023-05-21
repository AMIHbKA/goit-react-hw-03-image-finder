import styled from 'styled-components';

export const LoadMore = styled.button`
  /* display: inline-block; */
  padding: 8px 16px;
  margin-inline: auto;
  width: 200px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0 3px 1px -2px rgba(0 0 0 / 0.2), 0 2px 2px 0 rgb(0 0 0 / 0.14),
    0 1px 5px 0 rgb(0 0 0 / 0.12);

  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
