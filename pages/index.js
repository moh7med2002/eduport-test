import VideosPlay from "../components/VideosPlay";
import Head from 'next/head'
import React from "react";
import Default from "../components/Demos/HomeDefault/Default";

export default function Home() {
  return (
    <div className="pt-[75px]">
      <Head>
          <title>Home Page</title>
          <meta name="description" content="home page"/>
      </Head>
      <Default/>
    </div>
  )
}
