export const CloseButtonIcon = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    {
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z M390.8,390.8c-74.3,74.3-195.3,74.3-269.6,0c-74.3-74.3-74.3-195.3,0-269.6s195.3-74.3,269.6,0C465.2,195.5,465.2,316.5,390.8,390.8z" />
        <polygon points="340.2,160 255.8,244.2 171.8,160.4 160,172.2 244,256 160,339.8 171.8,351.6 255.8,267.8 340.2,352 352,340.2 267.6,256 352,171.8" />
      </svg>
    }
  </svg>
);

export const SearchButtonIcon = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    }
  </svg>
);
