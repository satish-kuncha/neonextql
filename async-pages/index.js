import Button from '../components/Button';
import dynamic from 'next/dynamic';


// const RemoteButton = dynamic(() => import('remote/Button'), {
//   ssr: false,
// });

import graphProps from './graphProps';
import pieProps from './pieProps';
import barProps from './barProps';

const ReactRemoteComponent = dynamic(() => import('remoteNeodash/RemoteHeader'), {
  ssr: false,
});


const RemoteComponentSingle = dynamic(() => import('remoteNeodash/RemoteSingle'), {
  ssr: false,
});

const RemoteComponentGraph = dynamic(() => import('remoteNeodash/RemoteGraph'), {
  ssr: false,
});

const RemoteComponentBar = dynamic(() => import('remoteNeodash/RemoteBar'), {
  ssr: false,
});

const RemoteComponentPie = dynamic(() => import('remoteNeodash/RemotePie'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
       Remote React Components - Loaded Dynamically via Module Federation
      <ReactRemoteComponent></ReactRemoteComponent>
      <div style={{height:'500px',width:'500px'}} >
        <RemoteComponentPie {...pieProps} />
       </div>

       <div style={{height:'500px',width:'500px'}} >
        <RemoteComponentBar {...barProps} />
       </div>
       </>
  );
}
