import clsx from 'clsx';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

const NAME = "Sun's log";
const DESCRIPTION =
  "기획부터 출시까지 끝까지 책임지는 프론트엔드 개발자 윤선웅의 포트폴리오, Sun's log. Flutter, Next.js.";

const NextHead = () => {
  const [routerChange, setRouterChange] = useState(false);

  Router.events.on('routeChangeComplete', () => {
    setRouterChange(true);
    const useTimeout = setTimeout(() => {
      setRouterChange(false);
    }, 100);
    return () => {
      clearTimeout(useTimeout);
    };
  });

  return (
    <Head>
      <title>{NAME}</title>
      <meta
        name='viewport'
        content={clsx('width=device-width, initial-scale=1.0', {
          'maximum-scale=1.0': routerChange,
        })}
      />
      <meta name='description' content={DESCRIPTION} />
      <meta name='format-detection' content='telephone=no' />
      <meta property='og:site_name' content={NAME} />
      <meta property='og:title' content={NAME} />
      <meta property='og:description' content={DESCRIPTION} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.sunslog.com' />
    </Head>
  );
};

export default NextHead;
