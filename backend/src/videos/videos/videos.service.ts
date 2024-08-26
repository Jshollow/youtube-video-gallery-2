import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../../data-source';
import { Video } from '../../entity/Video';
import { VideoDto } from '../dto/video.dto/video.dto';
import { parse } from 'querystring';
import { url } from 'inspector';

@Injectable()
export class VideosService {
  // http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg
  async create(video: VideoDto): Promise<VideoDto> {
    const videoEntity = new Video();
    videoEntity.name = video.name;
    videoEntity.artist = video.artist;
    videoEntity.url = video.url;
    const videoId = parse(video.url).v;
    videoEntity.thumbnail = `http://img.youtube.com/vi/${videoId}/0.jpg`;
    const now = new Date().toISOString();
    videoEntity.createdAt = now;
    videoEntity.updatedAt = now;

    await AppDataSource.manager.save(videoEntity);
    return video;
  }

  async findAll(): Promise<VideoDto[]> {
    const videos = await AppDataSource.manager.find(Video);
    return videos.map((video) => {
      const dto = new VideoDto();
      dto.artist = video.artist;
      dto.name = video.name;
      dto.thumbnail = video.thumbnail;
      dto.url = video.url;
      return dto;
    });
  }

  async findOne(id): Promise<VideoDto> {
    const repo = AppDataSource.getRepository(Video);
    const video = await repo.findOneBy({id});

    if (video) {
        const dto = new VideoDto();
        dto.artist = video.artist;
        dto.name = video.name;
        dto.thumbnail = video.thumbnail;
        dto.url = video.url;
        return dto;
    }
    return null;
  }
}
