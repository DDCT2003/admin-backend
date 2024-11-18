import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";


@Schema()
export class Ropa{
    @Prop({required:true})
    nombre: string;

    @Prop({required:true})
    talla: string; 

    @Prop({required:true})
    precio: string;
    
    @Prop({required:true})
    color: string;   

    @Prop({required:true})
    tipo: string;   
    
    @Prop({required:true})
    stock: string;   

}

export const RopaSchema = SchemaFactory.createForClass(Ropa);