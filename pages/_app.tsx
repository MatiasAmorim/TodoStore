import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";

import { appWithTranslation } from "next-i18next";
import { TodoProvider } from "../stores/store";
import { TodoStoreImpl, TodoStoreMobx } from "../stores/storemobx";
import TodoListMobx from "../components/TodoListMobx";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <TodoProvider>
          <TodoListMobx todoStore={new TodoStoreImpl}></TodoListMobx>
          <Box maxWidth="8xl" margin="auto" p={5}>
            <Component {...pageProps} />;
          </Box>
        </TodoProvider>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
