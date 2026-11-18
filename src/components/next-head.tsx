import clsx from 'clsx';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

const NAME = "Sun's log";
const DESCRIPTION =
  "사용자를 멈춰 세우는 문제는 끝까지 파고들어 해결하는 프론트엔드 개발자 윤선웅의 포트폴리오, Sun's log. 구인구직 서비스의 지도 마커 표시를 30초에서 2초로, 모의 티켓팅 서비스의 모바일 LCP를 6.46초에서 2.29초로, 실시간 대결 앱의 매칭 성공률을 3.5%에서 28.6%로 개선했습니다. Next.js, Flutter.";

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
