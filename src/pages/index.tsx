import type { NextPage } from 'next';
import Head from 'next/head';
import { TextField } from '@/components/controls';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sample</title>
        <meta name="description" content="Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex flex-col p-4 bg-white rounded-lg">
          <TextField name="mobile" label="Text input mobile" type="tel" />
          <TextField name="name" label="Text area" type="text" multiline />
        </div>
      </div>
    </>
  );
};

export default Home;
