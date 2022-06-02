import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CLEAN_PRODUCTS,
} from "../actions/types";
import { v4 as uuidv4 } from "uuid";

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
      id: "aklshf23480ksjd",
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
      id: "kasfhoi0j934hsayyt3e",
      productName:
        "Top Dog Regular Uncooked Dog Food With Protein Mix Salt Among Other Nutrients",
      productPrice: {
        salePrice: "2280",
        regularPrice: "5490",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/340866/1.jpg?5195",
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
      id: "pweur23oasdmbn,c239csi",
      productName: "Munch & Crunch Pressed Bones - 3 Pieces",
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/457985/1.jpg?0723",
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
      id: "pweur23oasdmbn,c239csi",
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
      id: "sdklfnwer092342i3or209384#uws",
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
      id: "laksdjjw892374yo2i3jklasdai7eq",
      productName:
        "Pawise Dog And Cat Brush With Plastic Teeth For Grooming Of All Short, Medium Or Long-haired Pets",
      productPrice: {
        salePrice: "1550",
        regularPrice: "1800",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/965156/1.jpg?3928",
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
      id: "@#ERwserkj34y5kzhfrwer",
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
      id: "ksjhfiweury#$%#%ertkejryt",
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
      id: "as,kryi23651715^%#^#$askd",
      productName: "Munch & Crunch Pressed Bones - 3 Pieces",
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/457985/1.jpg?0723",
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
      id: "skldfo0w94357n3257b34b5qwe192&6",
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
      id: "ASJKFHWI3B467866585747$%#$%&",
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
      id: "s;aljdowie7r23cbskdjf%^$^%23j4sd",
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
      id: "aslkdflasy&%$bjhdvkdlfgl",
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
      id: "sdm,fnlweuiowe$%^#WErsdlkfns",
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
      id: uuidv4(),
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
      id: uuidv4(),
      productName:
        "Top Dog Regular Uncooked Dog Food With Protein Mix Salt Among Other Nutrients",
      productPrice: {
        salePrice: "2280",
        regularPrice: "5490",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/340866/1.jpg?5195",
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
      id: uuidv4(),
      productName: "Munch & Crunch Pressed Bones - 3 Pieces",
      productPrice: {
        salePrice: "1500",
        regularPrice: "1700",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/457985/1.jpg?0723",
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
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
      productName:
        "Pawise Dog And Cat Brush With Plastic Teeth For Grooming Of All Short, Medium Or Long-haired Pets",
      productPrice: {
        salePrice: "1550",
        regularPrice: "1800",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/965156/1.jpg?3928",
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
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
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
  ],
  productsLength: 0,
  error: null,
  loading: false,
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
    default:
      return state;
  }
}
