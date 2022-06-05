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
      id: "nklsfi20934klhf",
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
    },
    {
      id: "asjfhasf238ksjdf093",
      productName: "ROYAL CANIN MAXI PUPPY – 15KG",
      productPrice: {
        salePrice: "13050",
        regularPrice: "14170",
      },
      productGallery: {
        productImage:
          "https://petstore.co.ke/wp-content/uploads/2021/10/ROC-SHMX-021-300x300.jpg",
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
          "https://adragna.it/wp-content/uploads/2021/05/breeder-super-premium-2014.png",
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
