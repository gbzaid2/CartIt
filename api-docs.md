# Project Greenfield API

### Current Host

The API can currently be found at http://localhost:3000/.

### The different data services for this api are

1. [Products](https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-products_api-md)
2. [Reviews](https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-reviews_api-md)
3. [Questions & Answers](https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-questions_api-md)
4. [Cart](https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-cart_api-md)
5. [Interactions](https://gist.github.com/trentgoing/409c2d76ce8e187e2132e45d9bed4605#file-interactions_api-md)

### Use of Parameters

In an HTTP GET request, parameters are sent as a query string:

`http://example.com/page?parameter=value&also=another`

In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body. Parameters noted for each route below follow this standard.

---

# Cart API

### Get Cart

Retrieves list of products added to the cart by a user.

`GET /cart/:user_token`

Parameters

| Parameter  | Type    | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| user_token | integer | Identifier for the user session for which the cart should be pulled |

Response

`Status: 200 OK`

```json
[
  {
    "id": 1,
    "user_session": 1234,
    "product_id": 1,
    "active": 1
  },
  {
    "id": 2,
    "user_token": 1234,
    "sku_id": 4,
    "active": 1
  }
  // ...
]
```

### Add to Cart

Adds a product to the cart.

`POST /cart/`

Body Parameters

| Parameter  | Type | Description                                |
| ---------- | ---- | ------------------------------------------ |
| user_token | int  | Integer identifying the user session       |
| sku_id     | int  | ID for the product being added to the cart |

Response

`Status: 201 CREATED`

---

# Interactions API

### Log an Interaction

Adds a interaction to the db.

`POST /interactions/`

Body Parameters

| Parameter | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| element   | string | Required.  Selector for the element which was clicked        |
| widget    | string | Required. Name of the module/widget in which the click occured |
| time      | string | Required.  Time the interaction occurred                     |

Response:

Success: `Status: 201 CREATED `

Invalid parameters:`Status: 422 UNPROCESSABLE ENTITY`

---

# Products API
### List Products

`GET /products/list`
Retrieves the list of products.

Parameters

| Parameter | Type    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| page      | integer | Selects the page of results to return.  Default 1.        |
| count     | integer | Specifies how many results per page to return. Default 5. |

Response

`Status: 200 OK `

```json
[
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  },
  {
    "id": 2,
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69"
  },
  {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40"
  },
  // ...
]
```



### Product Information

Returns all product level information for a specified product id.

`GET /products/:product_id`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
  "features": [
    {
      "feature": "Sole",
      "value": "Rubber"
    },
    {
      "feature": "Material",
      "value": "FullControlSkin"
    },
    // ...
  ],
}
```



### Product Styles

Returns the all styles available for the given product.

`GET /products/:product_id/styles`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
  "product_id": "1",
  "results": [
    {
      "style_id": 1,
      "name": "Forest Green & Black",
      "original_price": "140",
      "sale_price": "0",
      "default?": 1,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        },
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        }
        // ...
      ],
    "skus": {
      "XS": 8,
      "S": 16,
      "M": 17,
      "L": 10,
      "XL": 15
    }
  },
  {
    "style_id": 2,
    "name": "Desert Brown & Tan",
    "original_price": "140",
    "sale_price": "0",
    "default?": 0,
    "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
      ],
    "skus": {
      "S": 16,
      "XS": 8,
      "M": 17,
      "L": 10,
      "XL": 15,
      "XXL": 6
      }
  },
  // ...
}
```



### Related Products

Returns the id's of products related to the product specified.

`GET /products/:product_id/related`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
[
  2,
  3,
  8,
  7
],
```

---

# Questions and Answers API
### List Questions

`GET /qa/:product_id`
Retrieves a list of questions for a particular product.  This list *does not* include any reported questions.

Parameters

| Parameter  | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| product_id | integer | Specifies the product for which to retrieve questions.    |
| page       | integer | Selects the page of results to return.  Default 1.        |
| count      | integer | Specifies how many results per page to return. Default 5. |

Response

`Status: 200 OK `

```json
{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": 0,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": 0,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}
```



### Answers List

Returns answers for a given question. This list *does not* include any reported answers.

`GET /qa/:question_id/answers`

Parameters

| Parameter   | Type    | Description                                               |
| ----------- | ------- | --------------------------------------------------------- |
| question_id | integer | Required ID of the Question requested                     |
| page        | integer | Selects the page of results to return.  Default 1.        |
| count       | integer | Specifies how many results per page to return. Default 5. |

Response

`Status: 200 OK `

```json
{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    // ...
  ]
}
```



### Add a Question

Adds a question for the given product

`POST /qa/:product_id`

Parameters

| Parameter  | Type    | Description                                         |
| ---------- | ------- | --------------------------------------------------- |
| product_id | integer | Required ID of the Product to post the question for |

Body Parameters

| Parameter | Type | Description                      |
| --------- | ---- | -------------------------------- |
| body      | text | Text of question being asked     |
| name      | text | Username for question asker      |
| email     | text | Email address for question asker |

Response

`Status: 201 CREATED `



### Add an Answer

Adds an answer for the given question

`POST /qa/:question_id/answers`

Parameters

| Parameter   | Type    | Description                                        |
| ----------- | ------- | -------------------------------------------------- |
| question_id | integer | Required ID of the question to post the answer for |

Body Parameters

| Parameter | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| body      | text   | Text of question being asked                        |
| name      | text   | Username for question asker                         |
| email     | text   | Email address for question asker                    |
| photos    | [text] | An array of urls corresponding to images to display |

Response

`Status: 201 CREATED `



### Mark Question as Helpful

Updates a question to show it was found helpful.

`PUT /qa/question/:question_id/helpful`

Parameters

| Parameter   | Type    | Description                           |
| ----------- | ------- | ------------------------------------- |
| question_id | integer | Required ID of the question to update |

Response

`Status: 204 NO CONTENT `



### Report Question

Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

`PUT /qa/question/:question_id/report`

Parameters

| Parameter   | Type    | Description                           |
| ----------- | ------- | ------------------------------------- |
| question_id | integer | Required ID of the question to update |

Response

`Status: 204 NO CONTENT `



### Mark Answer as Helpful

Updates an answer to show it was found helpful.

`PUT /qa/answer/:answer_id/helpful`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| answer_id | integer | Required ID of the answer to update |

Response

`Status: 204 NO CONTENT `



### Report Answer

Updates an answer to show it has been reported.  Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

`PUT /qa/answer/:answer_id/report`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| answer_id | integer | Required ID of the answer to update |

Response

`Status: 204 NO CONTENT `

---

# Reviews API

### List Reviews
Returns a list of reviews for a particular product.  This list *does not* include any reported reviews.
`GET /reviews/:product_id/list`

Parameters

| Parameter  | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| product_id | integer | Specifies the product for which to retrieve reviews.         |
| page       | integer | Selects the page of results to return.  Default 1.           |
| count      | integer | Specifies how many results per page to return. Default 5.    |
| sort       | text    | Changes the sort order of reviews to be based on "newest", "helpful", or "relevant" |

Response

`Status: 200 OK `

```json
{
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": 0,
      "response": "",
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": 0,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}
```



### Get Review Metadata

Returns review metadata for a given product.

`GET /reviews/:product_id/meta`

Parameters

| Parameter  | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| product_id | integer | Required ID of the product for which data should be returned |

Response

`Status: 200 OK `

```json
{
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
    // ...
  },
  "recommended": {
    0: 5
    // ...
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
    // ...
}
```



### Add a Review

Adds a review for the given product.

`POST /reviews/:product_id`

Parameters

| Parameter  | Type    | Description                                       |
| ---------- | ------- | ------------------------------------------------- |
| product_id | integer | Required ID of the product to post the review for |

Body Parameters

| Parameter       | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| rating          | int    | Integer (1-5) indicating the review rating                   |
| summary         | text   | Summary text of the review                                   |
| body            | text   | Continued or full text of the review                         |
| recommend       | bool   | Value indicating if the reviewer recommends the product      |
| name            | text   | Username for question asker                                  |
| email           | text   | Email address for question asker                             |
| photos          | [text] | Array of text urls that link to images to be shown           |

> characteristics - object - Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

Response

`Status: 201 CREATED `

### Mark Review as Helpful

Updates a review to show it was found helpful.

`PUT /reviews/helpful/:review_id`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| reveiw_id | integer | Required ID of the review to update |

Response

`Status: 204 NO CONTENT `



### Report Review

Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.

`PUT /reviews/report/:review_id`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| review_id | integer | Required ID of the review to update |

Response

`Status: 204 NO CONTENT `
