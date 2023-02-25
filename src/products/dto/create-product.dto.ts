import { IsArray, IsIn, IsInt, IsNumber, IsOptional,
    IsPositive, MinLength, IsString 
} from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional() 
    stock?: number;

    @IsString({each: true})  // Cada uno de los elementos tiene que cumplir la condicion de ser un string
    @IsArray()
    sizes: string[];

    @IsIn(['men', 'women', 'kid', 'unisex']) // Obliga a que en el arreglo venga con esos valores 
    gender: string;

    @IsString({each: true})
    @IsArray()
    @IsOptional()
    tags: string[];

}    
