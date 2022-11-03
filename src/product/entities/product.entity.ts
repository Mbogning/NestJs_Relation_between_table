import { Type } from "class-transformer";
import { IsDate } from "class-validator";
import { TimeColumns } from "src/common/time-columns";
import { Rating } from "src/rating/entities/rating.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends TimeColumns{
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

    // @OneToMany(type => Rating, rating => rating.products, {eager: true})
    // ratings: Rating[];

    @OneToMany(type => Rating, rating => rating.product, {eager: true})
    ratings: Rating[];
}


