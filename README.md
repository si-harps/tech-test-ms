# Simon Harper - M&S Tech Test

This directory contains the technical test submission for "Senior Software Engineer" position with M&S.

### Time taken

2 Hours 15 mins

### How to run this application

```npm install```
```npm build```
```npm start```

### How to test this application

Rather than adding a comprehensive test suite, I have added 2 tests which demonstrate how I would handle integration testing across a Next.js application using Jest. This is far from a production test suite. 

To invoke the suite, simply run...

```npm run test```

### Alternatively

To run a pre-build containerized version of the application, simply run...

```docker-compose up -d```

### Unexpected Issues

I have bundled 2 screenshots to highlight an issue with ```offer_ids``` using the "product" GQL query. When selecting a product by it's ```id```, ```offer_ids``` is always a null value.

For the purposes of this test I have mocked ```offer_ids``` as hardcoded values within the ```product/[id].tsx``` component and added the expected behaviour outlined in the test requirements.