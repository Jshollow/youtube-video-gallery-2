import { IsString, IsUrl } from "class-validator";

export class VideoDto {
    @IsString() 
    name: String; 

    @IsString() 
    artist: String; 

    @IsUrl()
    url: String;

    @IsUrl() 
    thumbnail: String;

    createdAt: String;

    updatedAt: String;
}
