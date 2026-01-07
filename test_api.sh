#!/bin/bash
# Replace YOUR_PORT with your actual port number
PORT=3000
PRODUCT_ID="replace_with_real_id"

# 1. Root API
echo "Testing Root API..."
curl http://localhost:$PORT/
echo -e "\n"

# 2. Register User
echo "Testing Register User..."
curl -X POST http://localhost:$PORT/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","username":"testuser","password":"testpass"}'
echo -e "\n"

# 3. Login User
echo "Testing Login User..."
curl -X POST http://localhost:$PORT/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpass"}'
echo -e "\n"

# 4. Add Product
echo "Testing Add Product..."
curl -X POST http://localhost:$PORT/products \
  -H "Content-Type: application/json" \
  -d '{"title":"Chair","price":100,"image":"https://example.com/chair.jpg"}'
echo -e "\n"

# 5. Get All Products
echo "Testing Get All Products..."
curl http://localhost:$PORT/products
echo -e "\n"

# 6. Get Product by ID
echo "Testing Get Product by ID..."
curl http://localhost:$PORT/products/$PRODUCT_ID
echo -e "\n"

# 7. Update Product (hardcoded ID in code)
echo "Testing Update Product..."
curl -X PUT http://localhost:$PORT/products
echo -e "\n"

# 8. Delete Product (hardcoded ID in code)
echo "Testing Delete Product..."
curl -X DELETE http://localhost:$PORT/products
echo -e "\n"

# 9. Get Details with Query
echo "Testing Get Details with Query..."
curl "http://localhost:$PORT/details?location=Goa&age=30"
echo -e "\n"
