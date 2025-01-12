/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

// декарируем новый модуль с расширением svg
declare module '*.svg' {
  const content: any; // будет любой контент в нем
  export default content;
}
