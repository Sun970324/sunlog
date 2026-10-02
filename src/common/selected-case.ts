/* 메인에서 고른 프로젝트를 주소 대신 탭 안(sessionStorage)에 기억한다. 상세 페이지에서 메인으로 돌아와도 보던 프로젝트가 선택돼 있다. */
const KEY = 'sunlog-selected-case';

export const readSelectedCase = (): string | null => {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
};

export const saveSelectedCase = (id: string) => {
  try {
    sessionStorage.setItem(KEY, id);
  } catch {
    // 저장소를 못 쓰는 환경이면 기억하지 않는다. 선택 자체는 동작한다.
  }
};
