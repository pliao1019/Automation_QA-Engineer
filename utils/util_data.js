export default class DataUtils {
  constructor() {
  }
  getCheckoutInfo() {
    // add-on 5/9, update DDPDAP payload with parameter "shippingTerms" for triggering DDP/DAP. 
    var checkoutinfo_PTE_DDPDAP = {
      "shoppingCountry": "CA",
      "currency": "USD",
      "taxInclusive": false,
      "items": [
        {
          "skuId": "test_02",
          "quantity": 1,
          "price": 5
        }
      ],
      "shipFrom": {
        "address": {
          "country": "US"
        }
      },
      "options": {
        "shippingMethods": [
          {
            "amount": 5,
            "description": "standard(DDP)",
            "serviceLevel": "SG",
            "shippingTerms": "DDP"
          },
          {
            "amount": 15,
            "description": "express(DAP)",
            "serviceLevel": "ND",
            "shippingTerms": "DAP"
          }
        ]
      }
    }

    var checkoutinfo_SYS_HappyPath = {
      "shoppingCountry": "US",
      "currency": "USD",
      "customerType": "individual",
      "taxInclusive": false,
      "items": [
        {
          "skuId": "05a4e459-8ea6-46c5-94ec-48987dce010",
          "quantity": 1,
          "price": 5
        }
      ],
      "shipFrom": {
        "address": {
          "country": "US"
        }
      },
      "options": {
        "shippingMethods": [
          {
            "amount": 5,
            "description": "standard",
            "serviceLevel": "SG"
          },
          {
            "amount": 15,
            "description": "next day",
            "serviceLevel": "ND"
          }
        ]
      }
    }

    var checkoutinfo_PTE_LinkRedirect = {
      "shoppingCountry": "GB",
      "currency": "GBP",
      "customerType": "individual",
      "taxInclusive": true,
      "items": [
        {
          "skuId": "test_01",
          "quantity": 1,
          "price": 5
        }
      ],
      "shipFrom": {
        "address": {
          "country": "US"
        }
      },
      "redirects": {
        "successUrl": "https://www.google.com",
        "cancelUrl": "https://tw.yahoo.com"
      }
    }

    var checkoutinfo_PTE_TaxIdentifier = {
      "currency": "GBP",
      "customerType": "business",
      "taxInclusive": true,
      "items": [
        {
          "skuId": "test_01",
          "quantity": 1,
          "price": 5
        }
      ]
    }

    var checkoutinfo_PTE_SubscriptionOrder = {
      "shoppingCountry": "US",
      "currency": "USD",
      "customerType": "business",
      "taxInclusive": false,
      "customerId": "577895660336", //customerId is mandatory for subscription case, added on 2/23/2023.
      "items": [
        {
          "skuId": "test_03",
          "quantity": 1,
          "price": 5,
          "subscriptionInfo": {
            "planId": "106b3a93-600e-4c3f-ab52-8300eeefea0b",
            "terms": "test"
          }
        }
      ],
      "shipFrom": {
        "address": {
          "country": "US"
        }
      }
    }

    const checkoutInfo = {
      'pk_key_PTE': 'pk_test_3c6e516ff8754ea9901454e8e80e0310',
      'sk_key_PTE': 'sk_test_ae42c441e7b149319949cf5ab641e0e3',
      'pk_key_SYS': 'pk_sys_b47c766459be42e3bb38365a36da45c8',
      'sk_key_SYS': 'sk_sys_5456382f7936478a979e92636b060b14',
      'pk_key_SYS_default': 'pk_sys_6f171b65259f4893b03fd9481f7bfce3',
      'sk_key_SYS_default': 'sk_sys_2a96d9c0cdb5482cba4650afc7b36253',
      'payload_PTE_DDPDAP': JSON.stringify(checkoutinfo_PTE_DDPDAP),
      'payload_SYS_HappyPath': JSON.stringify(checkoutinfo_SYS_HappyPath),
      'payload_PTE_LinkRedirect': JSON.stringify(checkoutinfo_PTE_LinkRedirect),
      'payload_PTE_TaxIdentifier': JSON.stringify(checkoutinfo_PTE_TaxIdentifier),
      'payload_PTE_SubscriptionOrder': JSON.stringify(checkoutinfo_PTE_SubscriptionOrder),
      
      countryList: ['US', 'CA', 'TW', 'HK'],
      customerIdList: ["577895660336", "529948826122"],
      datas: [
        ['PTE', 'pk_test_3c6e516ff8754ea9901454e8e80e0310', 'sk_test_ae42c441e7b149319949cf5ab641e0e3', 'test_02', 'test_01'],
        ['PRD', 'pk_154cb1a9aece4a83bb1890516a5ec443', 'sk_7049f5301b6046baa2d1d78aa5b7d60a', 'drop-in-checkout_PRO_PhySku_001', 'drop-in-checkout_PRO_DigSku_001']
      ],
      addressInfo: [
        {//00_US
          'firstName': 'DR-US',
          'lastName': 'USA',
          'company': 'DigitalRiver',
          'addrLine1': '10451 Gunpowder Falls St',
          'city': 'Las Vegas',
          'country': 'United States of America',
          'countryValue': 'US',
          'state': 'Minnesota',
          'stateValue': 'MN',
          'zipCode': '55129',
          'email': 'drus@dr.com',
          'phone': '7028962624'
        },
        {//01_CA
          'firstName': 'DR-CA',
          'lastName': 'Canada',
          'company': 'DigitalRiver',
          'addrLine1': '10-123 1/2 MAIN STREET NW',
          'city': 'MONTREAL',
          'country': 'Canada',
          'countryValue': 'CA',
          'state': 'Quebec (Québec)',  
          'stateValue': 'QC',
          'zipCode': 'H3Z 2Y7',
          'email': 'drca@dr.com',
          'phone': '9055438570'
        },
        {//02_TW
          'firstName': 'DR-TW',
          'lastName': 'Taiwan',
          'company': 'DigitalRiver',
          'addrLine1': '123 dr street.',
          'city': 'Taipei',
          'country': 'Taiwan',
          'countryValue': 'TW',
          'zipCode': '11656',
          'email': 'drtw@dr.com',
          'phone': '0912345678',
          'VAT': '31830749'
        },
        {//03_HK
          'firstName': 'DR-HK',
          'lastName': 'HongKong',
          'company': 'Bandai',
          'addrLine1': '47 Luen Wo Mkt',
          'city': 'Fanling',
          'country': 'Hong Kong',
          'countryValue': 'HK',
          'state': 'Hong Kong Island',
          'stateValue': 'HK',
          'zipCode': 'CF4 9ZB',
          'email': 'drhk@dr.com',
          'phone': '26757738',
          'VAT': 'GB123456789' // not support
        },
        {//05_UK
          'firstName': 'Helen',
          'lastName': 'Mcclinton',
          'company': 'DigitalRiver',
          'addrLine1': '62 Trinity Crescent',
          'city': 'WHITCHURCH',
          'country': 'United Kingdom',
          'countryValue': 'UK',
          'zipCode': 'CF4 9ZB',
          'email': 'dr@test.com',
          'phone': '07854319925',
          'VAT': 'GB123456789'
        }
      ],
    };
    return checkoutInfo;
  }

  getShippingInfo() {
    const shipInfo = {
      //shipinfo_01_US_individual
      'firstName_01': 'Helen',
      'lastName_01': 'Mcclinton',
      'addrLine1_01': '10451 Gunpowder Falls St',
      'city_01': 'Las Vegas',
      'country_01': 'United States of America',
      'countryValue_01': 'US',
      'state_01': 'Minnesota',
      'stateValue_01': 'MN',
      'zipCode_01': '55129',
      'email_01': 'dr@test.com',
      'phone_01': '7028962624',

      //shipinfo_02_CA_individual
      'firstName_02': 'John',
      'lastName_02': 'Jones',
      'addrLine1_02': '10-123 1/2 MAIN STREET NW',
      'city_02': 'MONTREAL',
      'country_02': 'Canada',
      'countryValue_02': 'CA',
      'state_02': 'Quebec (Québec)', //5/9 update text: Quebec -> Quebec (Québec) 
      'stateValue_02': 'QC',
      'zipCode_02': 'H3Z 2Y7',
      'email_02': 'dr@test.com',
      'phone_02': '9055438570',
    };
    return shipInfo;
  }

  getBillingInfo() {
    const billInfo = {
      //billinfo_01_UK_business  
      'firstName_01': 'Helen',
      'lastName_01': 'Mcclinton',
      'company_01': 'DigitalRiver',
      'addrLine1_01': '62 Trinity Crescent',
      'city_01': 'WHITCHURCH',
      'country_01': 'United Kingdom',
      'countryValue_01': 'UK',
      'zipCode_01': 'CF4 9ZB',
      'email_01': 'dr@test.com',
      'phone_01': '07854319925',
      'VAT_01': 'GB123456789',

      //billinfo_02_US_business
      'firstName_02': 'Ana Bob',
      'lastName_02': 'Cara Dan',
      'company_02': 'DigitalRiver',
      'addrLine1_02': '10451 Gunpowder Falls St',
      'city_02': 'Las Vegas',
      'country_02': 'United States',
      'countryValue_02': 'US',
      'state_02': 'Minnesota',
      'stateValue_02': 'MN',
      'zipCode_02': '55129',
      'email_02': 'dr@test.com',
      'phone_02': '7028962624',
    };
    return billInfo;
  }

  getCreditCardInfo() {
    const currentTime = new Date();
    const year = (currentTime.getFullYear() + 3).toString();
    const expiryData = '01' + year.slice(-2);
    const cardinfo = {
      'cardNo': '4444222233331111',
      'expiry': expiryData,
      'cvv': '123'
    };
    return cardinfo;
  }
}