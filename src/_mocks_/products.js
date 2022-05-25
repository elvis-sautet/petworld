import { faker } from "@faker-js/faker";
// create a array of objects of pet food products of an e-commerce
// Language: javascript
import { v4 as uuidv4 } from "uuid";

const ProductMOCK = [...Array(20)].map((_, i) => ({
  id: uuidv4(),
  productName: "Reflex Kitten Food -Chicken & Rice 2kg",
  productPrice: {
    salePrice: "1740",
    regularPrice: "1840",
  },
  productGallery: {
    productImage:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
    productImages: [],
  },
  productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
  productCategory: {
    categoryName: "Food",
    subCategoryName: "Cat Food",
  },
  productBrand: "Reflex",
  // productStock is the product quantity in stock or the original quantity.
  productStock: "10",
  // quantity of items left in stock
  productsLeftInStock: "6",
  productDetails: {
    productReviews: [
      {
        reviewId: uuidv4(),
        fullName: "John Doe",
        review: "This is a review",
        rating: "5",
        date: "2020-01-01",
      },
    ],
    productSpecifications: [
      {
        specificationId: uuidv4(),
        specificationName: "Weight",
        specificationValue: "2kg",
      },
      {
        specificationId: uuidv4(),
        specificationName: "Size",
        specificationValue: "2kg",
      },
    ],
    productLikes: [
      {
        likeId: uuidv4(),
        fullName: "John Doe",
      },
    ],
  },
  // product rating between 1 to 5
}));

export default ProductMOCK;
