import { of } from "rxjs";
import { IMenuItem } from "../libs/models/menu-item";
import { ValidatorService } from "./validator.service";

let dataServiceMock: any;
let validatorService: ValidatorService;

const appTypeRBO = "RBO";
const targetProductId = "service-rbo-products";

const rboData: IMenuItem[] = [
  {
    id: "service-rbo-products",
    sensesShowWhen: "",
    translations: {
      en: {
        header: "Products",
      },
      nl: {
        header: "Products em NL",
      },
    },
    menuItems: [
      {
        id: "item-payment-and-savings-account",
        sensesShowWhen: "user:hasProduct_Payment;user:isCustomerType_Retail",
        routing: {
          path: "/service/betaal-en-spaarrekening",
        },
        translations: {
          en: {
            header: "Payment and Savings Account",
            description: "Payment and Savings Account desc",
          },
          nl: {
            header: "Payment and Savings Account em NL",
            description: "Payment and Savings Account desc em NL",
          },
        },
        menuItems: [
          {
            id: "service-rbo-limieten",
            sensesShowWhen: "",
            translations: {
              en: {
                header: "Limits",
              },
              nl: {
                header: "Limieten",
              },
            },
            menuItems: [
              {
                id: "item-Ondertekenmethode-bij-betalingen",
                sensesShowWhen: "user:isUser18OrOlder",
                routing: {
                  path: "/service/limiet-overboeken",
                },
                translations: {
                  en: {
                    header: "Signing method in payments",
                    description: "Signing method in payments desc",
                  },
                  nl: {
                    header: "Ondertekenmethode bij betalingen",
                    description: "Ondertekenmethode bij betalingen desc",
                  },
                },
                menuItems: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

describe("ValidatorService", () => {
  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj("dataServiceMock", ["getData"]);
    dataServiceMock.getData.and.returnValue(of(rboData));
    validatorService = new ValidatorService(dataServiceMock);
  });

  it("should fetch rbo data", (done) => {
    validatorService.getData(appTypeRBO).subscribe((data) => {
      expect(data).toEqual(rboData);
      expect(data[0].id).toEqual(targetProductId);
      done();
    });
  });
});
