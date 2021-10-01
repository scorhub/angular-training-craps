export class DataObject {
    constructor(
        public message:string,
        public status:string,
        public dieA:number,
        public dieB:number,
        public total:number,
        public pay:number,
        public credits:number
        ) {}
}