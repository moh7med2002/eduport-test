import VideosPlay from "../components/VideosPlay";
import Head from 'next/head'
import React from "react";

export default function Home() {
  const LazyLayout=React.lazy(()=> import('../components/Demos/HomeDefault/Default'));
  return (
    <div className="pt-[75px]">
      <Head>
          <title>Home Page</title>
          <meta name="description" content="home page"/>
      </Head>
      <React.Suspense fallback="loading...">
        <LazyLayout/>
      </React.Suspense>
    </div>
  )
}
