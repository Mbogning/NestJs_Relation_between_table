import { Type } from "class-transformer";
import { IsDate } from "class-validator";
import { Rating } from "src/rating/entities/rating.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column('text', {nullable: false, select: false})
    description: string;

    @Column('varchar', {nullable: true, select: false})
    productImage!: string;

    @IsDate()
    @Type(() => Date)
    @Column('datetime', {nullable: true, select: false})
    createDate!: Date;

    @IsDate()
    @Type(() => Date)
    @Column('datetime', {nullable: true, select: false})
    updateDate!: Date;

    // @OneToMany(type => Rating, rating => rating.products, {eager: true})
    // ratings: Rating[];

    @OneToMany(type => Rating, rating => rating.product, {eager: true})
    ratings: Rating[];
}


