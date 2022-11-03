import { 
    BaseEntity, 
    CreateDateColumn, 
    DeleteDateColumn, 
    UpdateDateColumn 
} from 'typeorm';


export abstract class TimeColumns extends BaseEntity {

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public readonly createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public readonly updatedAt!: Date;

    @DeleteDateColumn()
    public readonly deletedAt!: Date;
}
