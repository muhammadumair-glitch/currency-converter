// let joke = document.querySelector("#joke");
// let but = document.querySelector("button");

// async function func1(){
// let json1 = await fetch("https://api.chucknorris.io/jokes/random");
// //console.log(json1);
// let jsonIntoObject = await json1.json();
// // console.log(jsonIntoObject);
// // console.log(jsonIntoObject.value);


// but.addEventListener("click",()=>{
//    joke.innerText = `${jsonIntoObject.value}`;
//     joke.style.visibility = "visibile";
//     but.removeEventListener("click",()=>{
//    joke.innerText = `${jsonIntoObject.value}`;
//     joke.style.visibility = "visibile";})
//     func1();

// }
// )

// }
// func1();

// let url = "https://httpbin.org/post";
// async function func1(){
// response = await fetch(url//,{
// //    method:"POST",
// //    header:{"content-type":"application/json"},
// //    body: JSON.stringify({title:"practtising api options",body:"this is a post method request",greetings:"saayonaara"})
// // }
// )
// obj = await response.json();
// console.log(obj)
// }


// async function func1(){
// let url = "https://v6.exchangerate-api.com/v6/14a2e368158a0bfea7295081/latest/USD"
// response = await fetch(url);
// obj = await response.json();
// console.log(obj.conversion_rates.PKR)
// }

const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

let selectors = document.querySelectorAll("form select");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let covert = document.querySelector("button");
let input = document.querySelector("#input");
let msg = document.querySelector("#value");
let fromImg = document.querySelector("#fromImg");
let toImg = document.querySelector("#toImg");
console.log(fromImg)

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

for(let selector of selectors){
for (code in countryList){
     currCode = code;
     countryCode = countryList[code];
     option = document.createElement("option");
     option.innerText = currCode;
     option.value = currCode;

     
     if (selector.id === "from" && option.value === "USD") {
      option.selected = "selected";
    } else if (selector.id === "to" && option.value === "USD") {
      option.selected = "selected";
    }
    selector.append(option); 
    selector.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
}



convert.addEventListener("click", ()=>{
     amount = Number(input.value);
     if(amount < 0 || amount == 0){ msg.innerText = "Insert greater than zero"}
     else{func1()}
    }
)


async function func1(){
let url = `https://v6.exchangerate-api.com/v6/14a2e368158a0bfea7295081/latest/${from.value}`;
response = await fetch(url);
obj = await response.json();
parameter = obj.conversion_rates;
for (currCode in parameter){
    if(currCode == to.value){
        rate = Number(parameter[currCode])
        value = amount * rate;
        msg.innerText = `${amount} ${from.value} = ${value} ${to.value}`
    }
}
}
