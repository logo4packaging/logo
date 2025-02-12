import { v4 as uuidv4 } from "uuid";
import type {  IProducts } from "../interfaces";

export const productsOfFoam: IProducts[] = [
  {
    name: "فوم ",
    size: [],
    id: uuidv4(),
    thickness: "1م",
    img: "foam.jpeg",
  },
  {
    name: "فوم ",
    size: [],
    id: uuidv4(),
    thickness: "2م",
    img: "foam.jpeg",
  },
  {
    name: "فوم ",
    size: [],
    id: uuidv4(),
    thickness: "1سم",
    img: "foam.jpeg",
  },
  {
    name: "فوم ",
    size: [],
    id: uuidv4(),
    thickness: "12م",
    img: "foam.jpeg",
  },
  {
    name: "لوح فوم",
    size: [],
    id: uuidv4(),
    thickness: "2سم",
    img: "foam.jpeg",
  },
];
export const productsOfPaper: IProducts[] = [
  {
    name: "كرافت ازرق اسبانى",
    details: " مقاوم للمياه و الحرارة و عليه طبقة بولى ايثيلين",
    size: ["145x1م", " 120x1م "],
    id: uuidv4(),
    thickness: "جرام 100",
    numOfsheets: "6",
    img: "spanishBlue.jpg",
  },
  {
    name: "كرافت بنى اسمنتى",
    details: " ورق مرن عالى الجودة super",
    size: ["120x1م"],
    id: uuidv4(),
    thickness: "جرام 80",
    numOfsheets: "10",
    img: "",
  },
  {
    name: "كرافت ورق زبده",
    details: " ورق للرش و عازل للحرارة و يمنع تماسك الدهان بالورق",
    size: [""],
    id: uuidv4(),
    thickness: "جرام 30",
    numOfsheets: "15",
    img: "",
  },
  {
    name: "ورق مشجر ",
    details: "",
    size: ["3x180"],
    id: uuidv4(),
    thickness: "جرام 35",
    numOfsheets: "18/17",
    img: "gifts.jpg",
  },
  {
    name: "كرافت اسفنجى",
    details: " عليها طبقة سفنج و تحفظ من الرطوبة و سميك و يمتص الصدمات",
    size: ["3x2"],
    id: uuidv4(),
    thickness: "جرام 120",
    numOfsheets: "",
    img: "sponge.jpg",
  },
  {
    name: "كرافت رمادى",
    details: " ",
    size: ["140x1م"],
    id: uuidv4(),
    thickness: "جرام 60",
    numOfsheets: "",
    img: "",
  },
  {
    name: "كرافت سكر",
    details: "مقاوم للمياه و عليه طبقة بولى ايثيلين",
    size: ["130x1م"],
    id: uuidv4(),
    thickness: "جرام 80",
    numOfsheets: "",
    img: "suger.jpg",
  },

  {
    name: " كرافت بنى اسبانى",
    details: " ",
    size: [" 135x1م", "120x1م "],
    id: uuidv4(),
    thickness: "جرام 100",
    numOfsheets: "6",
    img: "spanishBrown.jpg",
  },
  {
    name: "حليبى",
    details: "مقاوم للمياه ورق الحرارة بطبقة نيكل للتصدير",
    size: [" 145x1م"],
    id: uuidv4(),
    thickness: "جرام 110",
    numOfsheets: "4",
    img: "milky.jpg",
  },
  {
    name: "ورق life",
    details: "فضى",
    size: [" 145x1م"],
    id: uuidv4(),
    thickness: "جرام 110",
    numOfsheets: "4",
    img: "life.jpg",
  },
];

export const productsOfStretch: IProducts[] = [
  {
    size: ["50سم"],
    id: uuidv4(),
    img: "stretch.jpg",
    name: "استرتش ",
  },
  {
    size: ["10سم"],
    id: uuidv4(),
    img: "smallStretch.jpg",
    name: "استرتش ",
  },
];
export const productsOfBubbles: IProducts[] = [
  {
    size: ["50سم"],
    id: uuidv4(),
    img: "bubbles.jpg",
    name: "بابلز",
  } 
];
export const productsOfString: IProducts[] = [
  {
    id: uuidv4(),
    img: "mdString.jpg",
    name: "خيط",
    details: "متوسط",
  },
  {
    details: "",
    id: uuidv4(),
    img: "smString.jpg",
    name: "خيط",
  },
  {
    details: "",
    id: uuidv4(),
    img: "bigString.jpg",
    name: "خيط",
  },
  {
    details: "",
    id: uuidv4(),
    img: "ultraString.jpg",
    name: "خيط",
  },
  {
    details: "",
    id: uuidv4(),
    img: "minString.jpg",
    name: "خيط",
  },
];
