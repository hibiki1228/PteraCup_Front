import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "ress";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Component {...pageProps} />
        </AnimatePresence>
    );
}

export default MyApp;
