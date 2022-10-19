import { Rating } from "./rating";

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public category: number,
        public image: string,
        public rating: Rating) {}
}
