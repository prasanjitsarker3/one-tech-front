export interface ProductCardType {
    productCardData: {
        id: number;
        title: string;
        price: number;
        discountPrice?: number;
        discountPercentage?: number;
        imageUrl: string;
    }
}