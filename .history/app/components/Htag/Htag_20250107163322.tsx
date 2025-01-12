import { JSX } from 'react';

import React from 'react';
import { HtagProps } from './Htag.props';

function Htag({ tag, children }: HtagProps) {
  return (
    <>
    {tag === 'h1' }
    </>
  );
}

export default Htag;
