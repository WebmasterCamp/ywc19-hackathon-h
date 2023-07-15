import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@ywc19/utils/api";
import "@ywc19/styles/globals.css";
import MotionLazyContainer from "@ywc19/components/animate/MotionLazyContainer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MotionLazyContainer>
        <Component {...pageProps} />
      </MotionLazyContainer>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
