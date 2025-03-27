export interface ProductSpecificationType {
    specification: {
        specificationName: string;
        specificationData: {
            name: string;
            value: string;
        }[];
    }[];
}