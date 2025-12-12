import React from "react";
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLocation,
} from "react-router";
import {Box, Code, ColorSchemeScript, Container, mantineHtmlProps, MantineProvider, Text, Title} from "@mantine/core";
import type { Route } from "./+types/root";
import "./app.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { AppTheme } from "~/app-theme";
import {HeaderMenu} from "~/components/HeaderMenu";
import {FooterLinks} from "~/components/FooterLinks";
import { createTheme, Input } from '@mantine/core';
import classes from '~/styles/Root.module.css';

const theme = createTheme({
    cursorType: 'pointer',
    components: {
        Input: Input.extend({
            classNames: {
                input: classes.input,
            },
        }),
    },
});

export function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    // List of paths where you want to hide Header/Footer
    const hideHeaderFooter = ['/rendeles'];
    const shouldHide = hideHeaderFooter.includes(location.pathname);

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
          <title>Szarvasi Levendula Birtok</title>
      </head>

      <body>
        <MantineProvider theme={theme}>

            {!shouldHide && (<HeaderMenu />)}

            <main>
                <AppTheme>{children}</AppTheme>
            </main>

            {!shouldHide && (<FooterLinks />)}

        </MantineProvider>

        <ScrollRestoration />
        <Scripts />
      </body>

    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Container component='main' pt='xl' p='md' mx='auto'>
      <Title>{message}</Title>
      <Text>{details}</Text>
      {(stack) && (
        <Box component='pre' w='100%' style={{ overflowX: 'auto' }} p='md'>
          <Code>{stack}</Code>
        </Box>
      )}
    </Container>
  );
}
