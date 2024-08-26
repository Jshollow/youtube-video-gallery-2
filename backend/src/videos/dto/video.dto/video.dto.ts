import { IsString, IsUrl } from "class-validator";

export class VideoDto {
    @IsString() 
    name: String; 

    @IsString() 
    artist: String; 

    @IsUrl()
    url: String;

    createdAt: String;

    updatedAt: String;
}
