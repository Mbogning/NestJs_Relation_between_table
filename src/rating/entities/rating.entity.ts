import { Product } from "src/product/entities/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    // @OneToMany(type => Product, product => product.ratings, {eager: false})
    // products: Product;

    @ManyToOne(type => Product, product => product.ratings, { eager: false })
    product: Product;


}
