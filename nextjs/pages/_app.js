import { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.5s ease;
  }
`;

const lightTheme = {
  body: '#FFF',
  text: '#000'
};

const darkTheme = {
  body: '#000',
  text: '#FFF'
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;