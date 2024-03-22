import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={335}
    height={285}
    viewBox="0 0 335 285"
    backgroundColor="#ffffff"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="335" height="150" />
    <rect x="-1" y="160" rx="5" ry="5" width="115" height="15" />
    <rect x="0" y="180" rx="5" ry="5" width="50" height="10" />
    <rect x="0" y="200" rx="5" ry="5" width="104" height="20" />
    <rect x="10" y="240" rx="9" ry="9" width="315" height="40" />
  </ContentLoader>
);
