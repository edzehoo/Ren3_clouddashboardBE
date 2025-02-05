import { Table, Column, Model, PrimaryKey, IsUUID } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
})
export class Customer extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Column
  public id!: string;

  @Column
  public companyName!: string;

  @Column
  public countryOfOrigin!: string;

  @Column
  public companyRegistrationNumber!: string;

  @Column
  public companySize!: string;

  @Column
  public industry!: string;

  @Column
  public officeAddress!: string;
}
