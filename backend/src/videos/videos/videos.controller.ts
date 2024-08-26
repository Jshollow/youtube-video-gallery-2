import { Controller, Get, Post } from '@nestjs/common';

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
      id: 2,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 3,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 4,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 5,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 6,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 7,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 8,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 9,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
    {
      id: 10,
      name: "Can You Feel Me?",
      url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
      artist: "Childish Gambino",
      thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
      updatedAt: "2024-08-26T18:53:08.422Z",
      createdAt: "2024-08-26T18:53:08.422Z",
    },
  ];

type Video = {
  id: number;
  name: string;
  url: string;
  artist: string;
  updatedAt: string;
  createdAt: string;
};

@Controller('videos')
export class VideosController {
  @Get()
  get(): Video[] {
    return testData;
  }

  @Post()
  post(): Video {
    return testData[0];
  }
}
