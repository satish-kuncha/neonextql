import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from "@nextui-org/react";
import dynamic from 'next/dynamic';
import propX from './propsExample';

const ReactRemoteComponent = dynamic(() => import('remoteNeodash/RemoteHeader'), {
  ssr: false,
});

const RemoteComponentSingle = dynamic(() => import('remoteNeodash/RemoteSingle'), {
  ssr: false,
});

const RemotePie = dynamic(() => import('remoteNeodash/RemotePie'), {
  ssr: false,
});


// localhost:3000
const Home: NextPage = () => {
  const passingVal = propX;
  console.log(passingVal);

  return (
    <RemotePie />
  )
}

export default Home
