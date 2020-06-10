import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#46AD8D",
    },
    background: {
      default: "#F5F5F5"
    },
  },
});

export default function withTheme(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <WrappedComponent/>
        </ThemeProvider>
      );
    }
  };
}
