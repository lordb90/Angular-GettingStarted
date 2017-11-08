import { IProduct } from './iproduct';

export class Product implements IProduct {

    constructor
    (
        public productId,
        public productName: string,
        public productCode,
        public releaseDate,
        public price,
        public description,
        public starRating,
        public imageUrl
    ) {}

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}
