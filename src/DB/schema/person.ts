import { Table, Column, Model } from "sequelize-typescript";

export interface IBook{
  firstname:string,
  lastname:string
}
//@table : در این جا دکورتور فانکشن که پرانتزش توی تی اس کانفیگ برداشته شده 
@Table({
  timestamps:false
})
export default class person extends Model<IBook> {
  @Column
  public firstname!:string;//علامت سوال به معنی پر کردن اجباری این ستون است 

  @Column
  public lastname!:string;
}