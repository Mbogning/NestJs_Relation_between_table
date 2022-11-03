import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";
import { Product } from "../entities/product.entity";

export class CreateProductDto extends PickType(Product, [

    'name',
    'price',
    'discount',
    'description',
    'productImage',
    'createDate',
    'updateDate',
] as const) {}
