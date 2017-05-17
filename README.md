Requirement:

Implement an Angular 2 SPA (single page application) using TypeScript that would provide a welcome screen, a product list page, and a product detail page. A menu at the top of the page should allow the users to navigate to the welcome screen and the product list page. Users should be able to add/remove products for the in-memory loaded data (no persistence of changed data is required) in the product list page, and also navigate to the product detail page if the product id is clicked.

The solution can use the attached json file as its data source and need not worry about implementing a backend service to supply the product data. There should be at least once service component that would load the json data using an http GET call.

The solution should include a jasmine unit test for the detail page component (at a minimum) and use routing to load components in the SPA based on user interaction. Use this plunk as the base for this solution https://plnkr.co/edit/bxBKAuXfu38AOMfuhXVe?p=preview and note additional javascript libraries may need to be added for the functionality requested for the unit test to work.

Limit the time spent on this exercise to 90 minutes. Assessment will be based on methodology and design, as opposed to completion of the solution. Focus should be on design of the Angular modules, separation of concerns, and proper use of routing and other Angular 2 capabilities, as well as good coding style using TypeScript.


 products.json {
  "products": {
    "product": [
      {
      "id": "1",
      "name": "Product 1",
      "description": "Product 1 description"
      },

      {
      "id": "2",
      "name": "Product 2",
      "description": "Product 2 description"
      },

      {
      "id": "3",
      "name": "Product 3",
      "description": "Product 3 description"
      }
    ]
    }
}
