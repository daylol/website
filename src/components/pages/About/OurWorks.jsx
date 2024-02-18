import React from 'react';
import { WHYWE } from '../../utils/constants';
import Job from './Job';

const OurWorks = () => {
  return (
    <section>
      {WHYWE.map((work, i) => (
        <Job {...work} key={i} />
      ))}
    </section>
  );
};

export default OurWorks;
