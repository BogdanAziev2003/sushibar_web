import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={5}
    width={335}
    height={285}
    viewBox="0 0 335 285"
    backgroundColor="#343434"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="335" height="150" />
    <rect x="10" y="160" rx="5" ry="5" width="115" height="15" />
    <rect x="10" y="180" rx="3" ry="3" width="170" height="10" />
    <rect x="10" y="205" rx="5" ry="5" width="60" height="20" />
    <rect x="10" y="240" rx="9" ry="9" width="315" height="40" />
  </ContentLoader>
);
