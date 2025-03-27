export interface ProductDetailsType {
    productDetailsData: {
        id: number;
        title: string;
        price: number;
        discountPrice?: number;
        keyFeatures: string[];
        productImages: string[];
        specification: {
            specificationName: string;
            specificationData: {
                name: string;
                value: string;
            }[];
        }[];
        description: {
            title: string;
            description: string;
        }[];
    }
}