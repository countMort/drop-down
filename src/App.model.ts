import { startingList } from "./parameters";

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export declare type ListItem = ArrayElement<typeof startingList>