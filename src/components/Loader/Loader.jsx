import { RiseLoader } from 'react-spinners';

export const Loader = ({ isLoading }) => {
  return (
    <RiseLoader
      color="#3f51b5"
      cssOverride={{
        display: 'block',
        margin: '7px auto',
      }}
      margin={7}
      size={15}
      loading={isLoading}
    />
  );
};
