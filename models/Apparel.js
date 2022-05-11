export default class {
  constructor(
    id,
    title,
    imageUrl,
    price,
    collection,
    sizes = [],
    images = [],
    sale = false,
    discountPrice = null,
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.collection = collection;
    this.sizes = sizes;
    this.images = images;
    this.sale = sale;
    this.discountPrice = discountPrice;
  }
}
