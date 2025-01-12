/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

// декларируем новый модуль с расширением svg
declare module '*.svg' {
  const content: React.FunctionComponent<>; // будет любой контент в нем
  export default content;
}
