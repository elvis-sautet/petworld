import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CLEAN_PRODUCTS,
  FETCH_VIEWED_PRODUCTS_SUCCESS,
  FETCH_VIEWED_PRODUCTS_FAILURE,
  ADD_NEW_VIEWED_PRODUCT_SUCCESS,
} from "../actions/types";
import { v4 as uuidv4 } from "uuid";

export const LOCAL_STORAGE_CACHED_DATABASE = "viewedProducts";
// an async function that returns fetches all the viewed products from the local storage
// if the local storage 'viewedProducts' is empty then it returns an empty array, if the local storage is not empty then it returns the array of viewed products
async function getViewedProducts() {
  const viewedProducts = await JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_CACHED_DATABASE)
  );
  return viewedProducts || [];
}

const initialState = {
  products: [
    {
      id: "Eryx-w423kjhsd324j-23424klsfi20934klhf",
      productName: "erix active",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage: require("../images/erics/erix active.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "60",
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
    },
    {
      id: "Eryx-234kashdjashdlashd",
      productName: "erix daily chicken 3 kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily chicken 3 kg.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "42",
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
    },
    {
      id: "Eryx-kashdjashdlauuyt",
      productName: "erix daily chicken",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily chicken.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "32",
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
    },
    {
      id: "Eryx-jkhsj-345bwkashdjashdlauuytnajskdna",
      productName: "erix daily fish",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily fish.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
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
    },
    {
      id: "Eryx-kashdjashdlauuytnajskdnajqwkqjwe",
      productName: "erix daily lamb 3 kg",
      productPrice: {
        salePrice: "1800",
        regularPrice: "1900",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily lamb 3 kg.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
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
    },
    {
      id: "Eryx-kashdjashdlauuytnajsjqwslkflaksf",
      productName: "erix daily lamb",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2200",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily lamb.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
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
    },
    {
      id: "Eryx-354nbkashdjashdlauuy213fsjqwsa234c3aksf",
      productName: "erix daily puppy junior 3 kg",
      productPrice: {
        salePrice: "1800",
        regularPrice: "2200",
      },
      productGallery: {
        productImage: require("../images/erics/erix daily puppy junior 3 kg.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
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
    },
    {
      id: "Eryx-kashdjashdlauuy213fsjqwsa234c3aksf",
      productName: "erix dailyfish 3 kg",
      productPrice: {
        salePrice: "1600",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/erics/erix dailyfish 3 kg.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Eryx",
        subCategoryName: "Eryx",
      },
      productBrand: "Eryx",
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
    },
    // dog&co wellness
    {
      id: "dogco-wellness-kashdjashdla234uy213fsjqwsa234c3aksf",
      productName: "Wellness chicken",
      productPrice: {
        salePrice: "1300",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/dog&co wellness/Wellness chicken.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wellness",
        subCategoryName: "wellness",
      },
      productBrand: "dog&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "dogco-wellness-kashdjashdla234buy21378623wsa234c3aksf",
      productName: "Wellness fish",
      productPrice: {
        salePrice: "1300",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/dog&co wellness/Wellness fish.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wellness",
        subCategoryName: "wellness",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-wellness-kashdAJKHashdla234uy21378623wsa234c3aksf",
      productName: "Wellness Lamb",
      productPrice: {
        salePrice: "1300",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/dog&co wellness/Wellness Lamb.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wellness",
        subCategoryName: "wellness",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-wellness-kashdAJKHashdla234uy68-21378623wsa234c3aksf",
      productName: "Wellness Puppy",
      productPrice: {
        salePrice: "1600",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/dog&co wellness/Wellness Puppy.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wellness",
        subCategoryName: "wellness",
      },
      productBrand: "dog&co",
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
    },
    // dog-dry
    {
      id: "c-kashduthAJdog-juniorKHashdla234uy68-21378623wsa234c3aksf",
      productName: "dog-junior",
      productPrice: {
        salePrice: "1700",
        regularPrice: "2000",
      },
      productGallery: {
        productImage: require("../images/dog&co dry/dog-junior.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co dry",
        subCategoryName: "dry",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-dog-mantenimento-juniorKHashdla234uy68-21378623wsa234c3aksf",
      productName: "dog-mantenimento",
      productPrice: {
        salePrice: "1900",
        regularPrice: "2300",
      },
      productGallery: {
        productImage: require("../images/dog&co dry/dog-mantenimento.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co dry",
        subCategoryName: "dry",
      },
      productBrand: "dog&co",
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
    },
    // dog&co wer
    {
      id: "dogco-dog-wet-jhfwlejf-21378623wsa234c3aksf",
      productName: "pollo tachino chicken & turkey",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog_co-bocc-pollo_tacchino.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-dog-wet-jhfwlejf-jksdfjkkh-hkkhkhkj",
      productName: "bocc coniglio anatra",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog_co-bocc-coniglio_anatra.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-dog-wet-jhfsdfwlejf-2137skdjf8623wsa234c3aksf",
      productName: "bocc manzo anatra",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog_co-bocc-manzo.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-dog-wet-jhfsdfskdfk768wlejf-2137skdjf8623wsa234c3aksf",
      productName: "coniglio anatra rabbit & duck",
      productPrice: {
        salePrice: "2400",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog-pate╠Ç-1.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
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
    },
    {
      id: "dogco-dog-wet-jhfsdfskdfk768wlejf-ashdashdasdd",
      productName: "co manzo beaf",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog-pate╠Ç-2.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "63",
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
    },
    {
      id: "dogco-dog-wet-jhf88876878fskdfk768wlejf-2137skdjf8623wsa234c3aksf",
      productName: "pollo e tachino chicken & turkey",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog-pate╠Ç-3.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "55",
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
    },
    {
      id: "dogco-dog-wet-jhf8xck8876878fskdfk768wlejf-2137skdjf8623wsa234c3aksf",
      productName: "puppy & Junior",
      productPrice: {
        salePrice: "1000",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/dog&co wet/dog-pate╠Ç-4.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "dog&co wet",
        subCategoryName: "wet",
      },
      productBrand: "dog&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "55",
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
    },
    {
      id: "cat-co-wet-jhf8xck8h324876878fskdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "conniglio anatra rabbit & duck",
      productPrice: {
        salePrice: "2000",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-coniglioanatra400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "32",
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
    },
    {
      id: "cat-co-wet-jhf2342324876878fskdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "Manzo beef",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-manzo400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "32",
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
    },
    {
      id: "cat-co-wet-jhf2342324876878fsasdkdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "pollo tachino",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-pollotacchino400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "32",
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
    },
    {
      id: "cat-co-wet-jhf23423h24872345892378fsasdkdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "salmon",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-salmone400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "cat-co-wet-jhf23423h24872345892378fsasdkdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "salmon",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-salmone400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "cat-co-wet-jhf23423h24872345892378fsasdkdfknmbsd76lejf-2137skdjf8623wsa234c3aksf",
      productName: "salmon",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-salmone400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "cat-co-wet-kdjakjsdkajs-2137skdjf8623wsa234c3aksf",
      productName: "selvaggina game",
      productPrice: {
        salePrice: "2700",
        regularPrice: "2500",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/bocc-selvaggina400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "cat-co-wet-ajhsd-2137skdjf8623wsa234c3aksf",
      productName: "coniglio e anatra",
      productPrice: {
        salePrice: "2800",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/pate-coniglioanatra400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "12",
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
    },
    {
      id: "cat-co-wet-ajhsd-ksjhdjkashfkhj-2137skdjf8623wsa234c3aksf-2137skdjf8623wsa234c3aksf",
      productName: "manzo beef",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/pate-manzo400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "40",
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
    },
    {
      id: "cat-co-wet-ajhsd-ksjhdjkashfkhj-2137skdjf8623wsa234c3aksf-2137skdjf8623wsa234c3aksf",
      productName: "pollo e tachino",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/pate-pollotacc400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "40",
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
    },
    {
      id: "cat-co-wet-ajhsd-ksjhdjkamashshfkhj-kasdkj-mjhgkasdgk",
      productName: "Tonno Tuna",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/pate-tonno400.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "80",
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
    },
    {
      id: "cat-co-wet-ajhsd-ksjhdjjjkamashshfkhj-kasdkj-mjhgkasdgk",
      productName: "Concoligio e anatra",
      productPrice: {
        salePrice: "2600",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/cat-pate╠Ç-1.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "80",
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
    },
    {
      id: "cat-co-wet-ajhsd-ksjh2345jjkamashshfkhj-kasdkj-mjhgkasdgk",
      productName: "Con manzo beef",
      productPrice: {
        salePrice: "2600",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/cat-pate╠Ç-2.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "cat-co-wet-ajhsd-iisd7q3au-kasdkj-mjhgkasdgk",
      productName: "Con pollo e tachino chicken & turkey",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/cat-pate╠Ç-3.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "cat-co-wet-ajhsd-kjashrkwejrhk-kasdkj-mjhgkasdgk",
      productName: "Con Tono Tuna",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/cat&co wet/cat-pate╠Ç-4.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "cat&co wet",
        subCategoryName: "wet",
      },
      productBrand: "cat&co",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "adregna-ajhsd-asfasfasrfwerzdfsdf-kasdkj-mjkkhgkasdgk",
      productName: "breeder super premium",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2900",
      },
      productGallery: {
        productImage: require("../images/adregna/breeder super premium.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "adregna",
        subCategoryName: "adregna",
      },
      productBrand: "adregna",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "60",
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
    },
    {
      id: "adregna-ajhsd-sdfsaasfdfsdfwersdfsrwe-kaskkdkj-mjhgkasdgk",
      productName: "breeder-premium",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/adregna/breeder-premium.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "adregna",
        subCategoryName: "adregna",
      },
      productBrand: "adregna",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },

    // brit here!!
    {
      id: "brit-ajd3srh2sekje-ertj-41jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "fresh chicken with potato",
      productPrice: {
        salePrice: "1500",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/brit/fresh chicken with potato.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "brit",
        subCategoryName: "brit",
      },
      productBrand: "brit",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "brit-aj09d3srh2sekje-ertj-41jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "fresh duck with millet",
      productPrice: {
        salePrice: "1600",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/brit/fresh duck with millet.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "brit",
        subCategoryName: "brit",
      },
      productBrand: "brit",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "brit-aj09d3srh2sekje-ertj-41jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zjksdhrsfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "juniour large breed",
      productPrice: {
        salePrice: "1100",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/brit/juniour large breed.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "brit",
        subCategoryName: "brit",
      },
      productBrand: "brit",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "brit-premium-by-nature-ertj-41jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zjksdhrsfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "premium by nature",
      productPrice: {
        salePrice: "900",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/brit/premium by nature.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "brit",
        subCategoryName: "brit",
      },
      productBrand: "brit",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajhsd-sdfsaasfdfsdfwejjrsdfsrwe-kaskkdkj-mjhgkasdgk",
      productName: "adult maxi coniglio-e-agrumi",
      productPrice: {
        salePrice: "2300",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-maxi-coniglio-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "40",
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
    },
    {
      id: "naxos-ajhsd-sdfsaas,jgffdfsdfwejjrsdfsrwe-kaskkdkj-mjhgkasdgk",
      productName: "adult maxi-pesce-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-maxi-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "20",
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
    },
    {
      id: "naxos-ajhsd-sdfsaas,jgffdfsdfwejjrsdfsnnrwe-kaskkdkj-mjhgkasdgk",
      productName: "adult maxi-pesce-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-maxi-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "60",
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
    },
    {
      id: "naxos-ajhsd-sdfsaas,jgffdfsdfwejjrsdfsnnrwe-kaskkdjjkj-mjhgkasdgk",
      productName: "adult maxi pollo-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-maxi-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "40",
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
    },
    {
      id: "naxos-ajhsd-sdfsaas,jgffdfsdfwejjrsdfsnnrwe-kaskjkkdjjkj-mjhgkasdgk",
      productName: "adult-medium-coniglio-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-medium-coniglio-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "40",
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
    },
    {
      id: "naxos-ajh2sd-sdfsaas,jgffdfsdfwejjrsdfsnnrwe-kasloljjkj-mjhgkasdgk",
      productName: "adult medium coniglio-e-agrumiadult-medium-maiale-e-agrumi",
      productPrice: {
        salePrice: "1900",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-medium-maiale-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajh2sd-sdfsaas,jgffdfsdfwejjrsdfsnnsdfrwe-kasloljjkj-mjhgkasdgk",
      productName: "adult medium pesce-e-agrumi",
      productPrice: {
        salePrice: "1900",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-medium-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajh2sd-sdfsaas,jgffdfs34jrsdfsnnsdfrwe-kasloljjkj-mjhgkasdgk",
      productName: "adult medium pollo-e-agrumi",
      productPrice: {
        salePrice: "1900",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-medium-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajh256sd-sdfsaas,jgffdfs34jrsdfsnnsdfrwe-kasloljjkj-mjhgkasdgk",
      productName: "adult mini coniglio-e-agrumi",
      productPrice: {
        salePrice: "2000",
        regularPrice: "2100",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-mini-coniglio-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajh256sd-sdfsaas,jgffdfs34jrsdfsnnsdfrwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "adult mini maiale-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-mini-maiale-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajd3h2456sd-sdfsaas,jgffdfs34jrsdfsnnsdfrwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "adult mini pesce-e-agrumi",
      productPrice: {
        salePrice: "2200",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-mini-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajd3h2456sd-sdfsayyas,jgffdfs34jrsdfsnnsdfrwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "adult mini pollo-e-agrumi",
      productPrice: {
        salePrice: "2000",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/adult-mini-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajd3h24543536sd-sdfsayyas,jgffdfs34jrsdfsnnsdfrwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "junior maxi pollo-e-agrumi",
      productPrice: {
        salePrice: "2100",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/junior-maxi-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "10",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsnnsdfrwe-kaslyyoljjkjsdf-mjhgkasdgk",
      productName: "mature medium maxi pollo-e-agrumi",
      productPrice: {
        salePrice: "1800",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/mature-medium-maxi-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsn45345-35345rwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "mature mini pollo-e-agrumi",
      productPrice: {
        salePrice: "1400",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/mature-mini-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsn459345-35345rwe-kaslasdasdyyoljjkj-mjhgkasdgk",
      productName: "puppy maxi pollo-e-agrumi",
      productPrice: {
        salePrice: "1600",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/puppy-maxi-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsn459345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgk",
      productName: "puppy medium maxi pesce-e-agrumi",
      productPrice: {
        salePrice: "1600",
        regularPrice: "2400",
      },
      productGallery: {
        productImage: require("../images/naxos/puppy-medium-maxi-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsn459345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgk-djfksjdhfksjdhfs",
      productName: "puppy mini pollo e-agrumi",
      productPrice: {
        salePrice: "1800",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/naxos/puppy-mini-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "70",
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
    },
    {
      id: "naxos-ajd3h241231236sd-sdfsayyas,jgffdfs34jrsdfsn45zfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "puppy mini pesce-e-agrumi",
      productPrice: {
        salePrice: "1600",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/naxos/puppy-mini-pesce-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "70",
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
    },
    {
      id: "naxos-ajd3h241jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "sterilight medium maxi pollo-e-agrumi",
      productPrice: {
        salePrice: "1600",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/naxos/sterilight-medium-maxi-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
    {
      id: "naxos-ajd3h2sekje-ertj-41jkhgkd453231236sd-sdfsayyas,jgffdfs34jrsdfsn45zfsf9345-3skndfksjf5345rwe-kaslyyoljjkj-mjhgkasdgkskndfksjf",
      productName: "sterilight mini pollo-e-agrumi",
      productPrice: {
        salePrice: "1600",
        regularPrice: "1800",
      },
      productGallery: {
        productImage: require("../images/naxos/sterilight-mini-pollo-e-agrumi.webp"),
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "naxos",
        subCategoryName: "naxos",
      },
      productBrand: "naxos",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "50",
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
    },
  ],
  productsLength: 0,
  error: null,
  loading: false,
  // viewed products, these are the products that are the user has viewed and has been cached in the browser
  viewedProducts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsLength: action.payload.length,
        error: null,
        loading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAN_PRODUCTS:
      return {
        ...state,
        products: [],
        productsLength: 0,
        error: null,
        loading: false,
      };
    case FETCH_VIEWED_PRODUCTS_SUCCESS:
      return {
        ...state,
        viewedProducts: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_VIEWED_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_NEW_VIEWED_PRODUCT_SUCCESS:
      const payloadData = action.payload;

      // check if the payload is an array, if it is, then add the new product to the array
      if (Array.isArray(payloadData)) {
        // loop through the payload array and check if the product id is in the viewedProducts array
        return payloadData.forEach((product) => {
          if (state.viewedProducts.some((item) => item.id === product.id)) {
            // if the product id is in the viewedProducts array, then do nothing
          } else {
            // if the product id is not in the viewedProducts array, then add it to the array
            return {
              ...state,
              viewedProducts: [...state.viewedProducts, product],
            };
          }
        });
      }

      return {
        ...state,
        viewedProducts: action.payload,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
}

/*
{
      id: "aklshf23480ksjd",
      productName: "ROYAL CANIN MAXI ADULT – 15KG",
      productPrice: {
        salePrice: "11475",
        regularPrice: "13480",
      },
      productGallery: {
        productImage:
          "https://petstore.co.ke/wp-content/uploads/2021/12/Royal-Canin-Maxi-Adult-01-300x300.jpg",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "2",
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
    },
    {
      id: "alksjdlaksqw0934q2",
      productName: "Vitabiotics SUPERDOG JOINT&BONES 60TABLETS TIN",
      productPrice: {
        salePrice: "2240",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/641925/1.jpg?2823",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "38",
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
    },
    {
      id: "ansdkajs284klksjdf23",
      productName: "ROYAL CANIN MAXI ADULT – 10KG",
      productPrice: {
        salePrice: "1470",
        regularPrice: "2200",
      },
      productGallery: {
        productImage:
          "https://petstore.co.ke/wp-content/uploads/2021/12/Royal-Canin-Maxi-Adult-01-300x300.jpg",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "2",
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
    },

    {
      id: "kasfhoi0j934hsayyt3e",
      productName:
        "SPECTRUM ULTRA PREMIUM PUPPY FOOD – PUPPY STARTER30 SMALL / MEDIUM BREED 3KG",
      productPrice: {
        salePrice: "2280",
        regularPrice: "5490",
      },
      productGallery: {
        productImage:
          "https://petstore.co.ke/wp-content/uploads/2019/02/Puppy30-01.jpg",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "42",
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
    },
    {
      id: "pweur23oasdmbnfc239csi",
      productName: "Adragna Professional Breeder",
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/breeder-super-premium-2014.webp",
        productImages: [],
      },
      productDescription: `Professional Breeder Super Premium is a complete dog food, able to satisfy the different nutritional needs and tastes of dogs of all sizes and according to the various stages of life.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },
    {
      id: "pweur23oasdmjkc239csi",
      productName: "ADRAGNA BREEDER PREMIUM",
      productPrice: {
        salePrice: "3150",
        regularPrice: "4600",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/breeder-premium-2014-400x400.png",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },
    {
      id: "sdklfnwer092342i3or20938400uws",
      productName: `NAXOS
ADULT MAXI
PORK AND CITRUS`,
      productPrice: {
        salePrice: "650",
        regularPrice: "800",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/adult-medium-bufalo-e-agrumi-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },

    {
      id: "laksdjjw892374yo2i3jklasdai7eq",
      productName: `DOG&CO WELLNESS
ADULT MEDIUM/MAXI
FISH AND RICE`,
      productPrice: {
        salePrice: "1550",
        regularPrice: "1800",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/adult-medium-maxi-pesce-e-riso-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },
    {
      id: "asdfhkasuyd928374ymxkvck34",
      productName:
        "Truly Calcium Bone Is A Unique And Irresistibly Combination Of Pieces Of Chicken Filet And Chew Bones, With Extra Calcium For Strong Bones",
      productPrice: {
        salePrice: "850",
        regularPrice: "1000",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/404476/1.jpg?3301",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "74",
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
    },
    {
      id: "2323ERwserkj34y5kzhfrwer",
      productName:
        "Truly Chicken Filet Is A 100% Natural Snack Made From Fresh Chicken Filets. Good For The Teath And An All-round Great Chew",
      productPrice: {
        salePrice: "2240",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/404476/1.jpg?3303",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "65",
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
    },
    {
      id: "pwerou349057bv4c9527b4234",
      productName:
        "Generic Flea And Tick Collar For Cat, Made With Natural Plant Based Essential Oil, Safe And Effective Repels Fleas And Ticks, Waterproof",
      productPrice: {
        salePrice: "469",
        regularPrice: "999",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/554506/1.jpg?2816",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "56",
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
    },

    {
      id: "ksjhfiweury3457567ertkejryt",
      productName:
        "Generic CAT COLLAR (8 MONTHS PROTECTION FROM FLEA, TICK & PEST)",
      productPrice: {
        salePrice: "490",
        regularPrice: "700",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/674716/1.jpg?2289",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "42",
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
    },
    {
      id: "as00kryi236517155656bnmaskd",
      productName: `CAT&CO
      CAT&CO PATÈ
      CHICKEN AND TURKEY`,
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/pate-pollotacc400-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },
    {
      id: "skldfo0w94357n3257b34b5qwe1925675676",
      productName: "King Plus Adult Dog Food – Beef 15kg",
      productPrice: {
        salePrice: "3150",
        regularPrice: "4600",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/527585/1.jpg?7746",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },
    {
      id: "sfkajsw342309842akjs384skdj",
      productName:
        "Truly Bone Snacks Is A Unique And Irresistible Combination Of Rawhide And Delicious Chicken Pieces",
      productPrice: {
        salePrice: "650",
        regularPrice: "800",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/244476/1.jpg?4182",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },
    {
      id: "fireonfire",
      productName:
        "Reflex Plus REFLEX PREMIUM ADULT CAT FOOD – HAIRBALL & INDOOR SALMON 1.5KG",
      productPrice: {
        salePrice: "2240",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/997606/1.jpg?0432",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "42",
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
    },
    {
      id: "aslkdflasy945845945bjhdvkdlfgl",
      productName:
        "King High Quality Plus Adult Cat Food – Adult Premium Fish 1.5kg",
      productPrice: {
        salePrice: "760",
        regularPrice: "1000",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/221385/1.jpg?1570",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "2",
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
    },
    {
      id: "ert456dfhgr64ydfyetrw345edfhrtu",
      productName: `CAT&CO
CAT&CO CHUNCKS
GAME`,
      productPrice: {
        salePrice: "2240",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/bocc-selvaggina400-400x400.png",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "38",
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
    },
    {
      id: "5345idjkfghdf0892340923409kdhgksjd",
      productName:
        "Reflex Plus REFLEX PREMIUM ADULT CAT FOOD HAIRBALL & INDOOR SALMON 1.5KG",
      productPrice: {
        salePrice: "1470",
        regularPrice: "2200",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/997606/1.jpg?0432",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "2",
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
    },

    {
      id: "3423lloiswq9999459fger823hkjsdf",
      productName:
        "Uncooked Dog Food With Protein Mix Salt Among Other Nutrients",
      productPrice: {
        salePrice: "2280",
        regularPrice: "5490",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/puppy-medium-pollo-e-agrumi-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "42",
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
    },
    {
      id: "KLSDJFLSKDJFL8923KSJDFH",
      productName: `CAT&CO
CAT&CO MAINTENANCE
MIX BEEF AND CHICKEN`,
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/pack-catco-manzo-20-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },
    {
      id: "IASJFHIO38945NMDFGLKDbd094",
      productName: `DOG&CO
DOG&CO CHUNCKS
CHICKEN AND TURKEY`,
      productPrice: {
        salePrice: "3150",
        regularPrice: "4600",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/dogco-bocc-pollotacchino-400x400.png",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },
    {
      id: "OIUOGH093845NZXCE20873Q231YZSGDJ",
      productName: `ERYX
ERYX DAILY
CHICKEN`,
      productPrice: {
        salePrice: "650",
        regularPrice: "800",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/eryx-daily-pollo-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "45",
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
    },

    {
      id: "JSDHFASPROWEUPT5W9EUSDKJH34509xkfghklhe4SDGRIW12314",
      productName: `CAT&CO WELLNESS
ADULT STERILIZED
CHICKEN AND BARLEY`,
      productPrice: {
        salePrice: "1550",
        regularPrice: "1800",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/sterilized-10-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "70",
      // quantity of items left in stock
      productsLeftInStock: "30",
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
    },
    {
      id: "QIUTRYMXZZAWIRBDKITMZ2858732erte3",
      productName: `CAT&CO
PATÈ
TUNA`,
      productPrice: {
        salePrice: "850",
        regularPrice: "1000",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/pate-tonno400-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "74",
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
    },
    {
      id: "lkmlvnlt090093-34jhgdfs",
      productName: `DOG&CO
DOG&CO PUPPY & JUNIOR`,
      productPrice: {
        salePrice: "2240",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/dog-junior-400x400.png",
        productImages: [],
      },
      productDescription: `SuperDog Joints & Bones pet supplements contain a unique all-in-one combination of joint health ingredients as well as essential vitamins to promote overall wellbeing, help maintain flexibility and keep your dog active.

For those long walks and playtime antics, it’s important to make sure your dog’s joint and bone health is at its best. Like humans, dogs need to look after their joints as they get older, and often larger dogs and certain breeds need to take greater care.

SuperDog Joints & Bones is an additional dietary supplement that provides your dog with advanced nutritional support to safeguard their diet and help keep their joints, bones and teeth healthy.

With 50 years’ experience in vitamin and nutritional research, as the UK’s No1 vitamin company, we are proud to have used this unique expertise to develop the SuperDog range.  Providing expert-level care for your special companion with truly comprehensive, carefully developed formulas and working alongside canine health specialists.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "100",
      // quantity of items left in stock
      productsLeftInStock: "65",
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
    },
    {
      id: "lkmlvnl444t-090093-34jhgdfs",
      productName: `ERYX
ERYX PUPPY
CHICKEN`,
      productPrice: {
        salePrice: "469",
        regularPrice: "999",
      },
      productGallery: {
        productImage:
          "https://adragna.it/wp-content/uploads/2021/05/eryx-daily-junior-400x400.png",
        productImages: [],
      },
      productDescription: `Reflex Plus Adult Cat – Hairball & Indoor Salmon is a premium cat food for all adult breeds (over 12 months old) prone to hairballs, like long-haired breeds and indoor cats. With salmon protein and psyllium husk to help pass digested hairballs, formulated by cat / dog nutritionists to meet your cat’s daily nutritional needs.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "90",
      // quantity of items left in stock
      productsLeftInStock: "56",
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
    },
    */
