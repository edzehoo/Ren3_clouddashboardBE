import { Table, Column, Model, PrimaryKey, IsUUID } from 'sequelize-typescript';

@Table({
  tableName: 'subscriptions',
})
export class Subscription extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Column
  public subId!: string;

  @Column
  public subPlanRef!: string;

  @Column
  public customerRef!: string;

  @Column
  public startDate!: string;

  @Column
  public endDate!: string;

  @Column
  public terminationDate!: string;

  @Column
  public status!: string;

}
