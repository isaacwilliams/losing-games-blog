import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./PortraitGenerator'),
  loading: () => <div>Loading...</div>,
});
