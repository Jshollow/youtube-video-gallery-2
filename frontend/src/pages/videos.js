import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import Modal from "../components/modal";

const testData = [
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    artist: "Childish Gambino",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
];

function Videos() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-screen w-full bg-black">
      <div className="w-10/12 pt-8 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-white text-5xl">YouTube Videos</h1>
          <Button onClick={() => setShowForm(true)}>Create</Button>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-4 justify-between">
          {testData.map((video) => (<Link to={`/video/${video.id}`}>
            <div>
              <img className="pt-0" src={video.thumbnail} />
              <h3 className="text-white text-xl mb-0 pb-0">{video.name}</h3>
              <h4 className="text-zinc-300">{video.artist}</h4>
            </div>
            </Link>
          ))}
        </div>
      </div>
      {showForm && (<Modal title={"Add YouTube Video"} onClose={() => setShowForm(false)}>
        <Form name="basic"
          labelCol={{ span: 8}}
          wrapperCol={{ span: 16}}
          style={{maxWidth: 600}}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input the video name',
                },
              ]}
              >
                <Input />
            </Form.Item>
            <Form.Item
              label="Artist"
              name="artist"
              rules={[
                {
                  required: true,
                  message: 'Please input the video artist',
                },
              ]}
              >
                <Input />
            </Form.Item>
            <Form.Item
              label="Url"
              name="url"
              rules={[
                {
                  required: true,
                  message: 'Please input the video url',
                },
              ]}
              >
                <Input />
            </Form.Item>
        </Form>
      </Modal>)}
    </div>
  );
}

export default Videos;
