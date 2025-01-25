'use client';

import { Timeline } from 'react-twitter-widgets';

export default function XFeed() {
  return (
    <div className="my-8">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'nocodeguy_'
        }}
        options={{
          height: '400',
          chrome: 'noheader,nofooter',
          width: '100%'
        }}
      />
    </div>
  );
}
