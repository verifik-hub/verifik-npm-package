
<div id="header" align="center">
  <img src="https://cdn.verifik.co/logo/LogoVerifik.svg" width="180"/>
  
  
  <div id="badges">
    <a href="https://verifik.co">
      <img src="https://img.shields.io/badge/Website-yellow?style=for-the-badge&logo=app&logoColor=white" alt="Website Badge"/>
    </a>
    <a href="https://www.linkedin.com/company/verifik-co/">
      <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
    </a>
    <a href="https://www.youtube.com/@verifik3493">
      <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
    </a>
    <a href="https://api.whatsapp.com/send?phone=573208184565&text=Hola%20he%20visto%20tu%20librer%C3%ADa%20en%20GitHub%2C%20me%20interesa%20contratar%20su%20servicio%20para%20mi%20aplicaci%C3%B3n%0A%0A_______________________%0A%0A%0AHi%2C%20I%20just%20saw%20your%20library%20on%20GitHub%20and%20I%20would%20like%20to%20use%20your%20services%20for%20my%20application%0A%0A%0A">
      <img src="https://img.shields.io/badge/WhatsApp-green?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Badge"/>
    </a>
  </div>
  
   <img src="https://komarev.com/ghpvc/?username=verifik-hub&style=flat-square&color=blue" alt=""/>
  
</div>

<div align="center">
  <img src="https://cdn.verifik.co/readme/imagen-hero1-p-800.png" width="500" height="380"/>
</div>

---

### :man_technologist: About Verifik :

We are a data validation & biometrics company <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> from Latino America with offices in Bogota, Colombia.


- :telescope: Stop fraud with ID & Data Verification. One API to authenticate, validate and verify any type of data.

- :thinking: Unleash the full power of Verifik. Everything you need to verify, authenticate and retain better users.

- :zap: Onboarding aaS. Seamlessly onboard your clients with biometrics.

- :lock: Authentication aaS. Enable password-less logins for your clients.

- :white_check_mark: Compliance aaS. One API source for local and international KYC & AML.

- :disguised_face: 3D Liveness check & face matching.  
 ● User Friendly
 ● Easy integration
 ● Secure passwordless solutions for your customers
 ● 3D liveness detection & anti-spoofing technology
 
 - :id: ID Document verification.  
  ● OCR data extraction & template– Over 700+ supported documents from over 150+ countries
  ● Latin, Arabic, Cyrillic, Hebrew, Thai, Japanese Character Language

 - :heavy_check_mark: KYC & AML.   
   ● One API to verify all types of identifiers (IDs, License Plate Number, VIN, etc)
   ● Over 40 APIs from USA, Mexico, Colombia, Peru, Ecuador, Venezuela, International.
   
   
---

### :fire: Verifik Stats :

[![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=migueltrevinom)](https://git.io/streak-stats)   
   
### Built for developers by developers


```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula',
  headers: {'Content-Type': 'application/json', Authorization: 'situacion-militar'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "1234567890",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "",
      "VERIFIK",
      ""
    ],
    "expeditionDate": "This information has been classified as semi-private and is temporarily unavailable for delivery. - RNEC 2686",
    "expeditionPlace": "This information has been classified as semi-private and is temporarily unavailable for delivery. - RNEC 2686",
    "dateOfBirth": "This information has been classified as semi-private and is temporarily unavailable for delivery. - RNEC 2686"
  },
  "signature": {
    "dateTime": "July 19, 2022 9:37 AM",
    "message": "Certified by Verifik.co"
  }
}
```


```javascript
const verifik = require('./index')('your_token_here');

verifik.colombia.getID('CC', '123456789').then((response) => {
    console.log({
        response
    });
}, (error) => {
    console.log({
        error,
        response: error.response?.data,
    });
})

verifik.requestEndpoint('co/cedula', {
    documentType: 'CC',
    documentNumber: '123456789',
}).then((endpointData) => {
    console.log({
        endpointData,
    });
}, (error) => {
    console.log({
        error,
        response: error.response?.data,
    });
})
```


