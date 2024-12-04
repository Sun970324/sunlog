import { ServerSideRequestType } from "@/types/common";
import UAParser from "ua-parser-js";

/**
 * SSR중에 디바이스의 타입을 확인하는 함수(Next.js에서만 사용)
 * @param req getServerSideProps의 req
 * @returns 현재 디바이스의 타입
 */
export const getDeviceType = (req?: ServerSideRequestType): string => {
  let userAgent: UAParser.IResult;
  let isCloudfrontMobile = false;

  if (req) {
    userAgent = UAParser(req.headers['user-agent'] || '');
  } else {
    userAgent = new UAParser().getResult();
  }

  if (typeof req?.headers === 'object') {
    if ('cloudfront-is-mobile-viewer' in req.headers) {
      isCloudfrontMobile = req.headers['cloudfront-is-mobile-viewer'] === 'true';
    }
  }

  const deviceType = userAgent?.device?.type || isCloudfrontMobile ? 'mobile' : 'desktop';
  return deviceType;
};