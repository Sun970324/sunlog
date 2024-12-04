import clsx from 'clsx';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

const NAME = "Sun's log";

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
      <meta name='description' content={NAME} />
      <meta name='format-detection' content='telephone=no' />
      <meta property='og:site_name' content={NAME} />
      <meta property='og:title' content={NAME} />
      <meta
        property='og:description'
        content='풀스택, 근데 이제 AI를 곁들인 개발자 윤선웅입니다.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://localhost:3000' />
    </Head>
  );
};

export default NextHead;
