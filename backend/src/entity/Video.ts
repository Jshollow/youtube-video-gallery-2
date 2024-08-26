import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Video {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    artist: string

    @Column()
    url: string

    @Column()
    thumbnail: string 

    @Column()
    createdAt: string 

    @Column()
    updatedAt: string 

}
