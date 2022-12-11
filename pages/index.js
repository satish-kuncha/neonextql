import dynamic from 'next/dynamic';
const Page = dynamic(
  async () => {
    return import('../async-pages/index');
  },
  {
    ssr: false,
  },
);

function Home() {
  return <Page />;
}

export default Home;