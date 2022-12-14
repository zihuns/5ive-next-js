import Layout from "../components/common/Layout";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {Component.name == "admin" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
