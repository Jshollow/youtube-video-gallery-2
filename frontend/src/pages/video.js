import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const testData = {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    artist: "Childish Gambino",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
}

function Video() {
    // get video id from route
    return (
      <div className="h-screen w-full bg-black">
        <div className="w-1/2 pt-8 mx-auto">
        <div className="flex mb-5">
          <Link to="/"><Button>Back</Button></Link>
        </div>
            <h1 className="text-white text-3xl mt-2">{testData.name}</h1>
            <h2 className="text-zinc-300 text-xl mt-2">{testData.artist}</h2>
            <ReactPlayer url={testData.url} />
            </div>
      </div>
    );
  }
  
  export default Video;