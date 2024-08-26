import { IsString, IsUrl } from "class-validator";

export class VideoDto {
    @IsString() 
    name: string; 

    @IsString() 
    artist: string; 

    @IsUrl()
    url: string;

    @IsUrl() 
    thumbnail: string;
}
