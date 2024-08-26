import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { VideoDto } from './dto/video.dto/video.dto';

@Module({
    controllers: [VideosController],
    providers: [VideosService]
})
export class VideosModule {

    create(video: VideoDto): VideoDto {
        return null;
    }

    fetch(): VideoDto[] {
        return []
    }
}
