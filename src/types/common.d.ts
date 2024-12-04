import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

/** Server Side Request Type */
type ServerSideRequestType = (IncomingMessage & { cookies: NextApiRequestCookies }) | undefined;

/** 각 page component의 getLayout함수를 수용 */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type SelectType<T> = {
  label: string;
  value: T;
};
/** CustomAppProps */
type CustomAppProps = AppProps & { Component: NextPageWithLayout };

type HslaOptions = {
  /** 색조 */
  addHue?: number;
  /** 채도 */
  addSat?: number;
  /** 명도 */
  addLight?: number;
  /** 불투명도 */
  addAlpha?: number;
};

type FileType = {
  file: File | null;
  preview: string;
};
