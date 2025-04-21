🚀 Frontend Integration Guide (Angular + Node.js Backend)
🌐 Base API URL
bash
Copy
Edit
http://localhost:5000/api
🔐 Authentication
➕ Register
css
Copy
Edit
POST /auth/register
Body: {
  "username": "user1",
  "email": "user@example.com",
  "password": "yourpassword"
}
🔑 Login
css
Copy
Edit
POST /auth/login
Body: {
  "email": "user@example.com",
  "password": "yourpassword"
}
Response: {
  token: "JWT_TOKEN"
}
🔸 Store this token in localStorage and send it as a Bearer token in headers for authenticated requests:

ts
Copy
Edit
headers: {
  Authorization: 'Bearer ' + localStorage.getItem('token')
}
🅿️ Parking Slots - Admin Only
🚗 Create Car Slots
pgsql
Copy
Edit
POST /admin/create-car-slots
Headers: Authorization: Bearer <admin_token>
Body: {
  "numberOfSlots": 20
}
🏍️ Create Bike Slots
pgsql
Copy
Edit
POST /admin/create-bike-slots
Headers: Authorization: Bearer <admin_token>
Body: {
  "numberOfSlots": 15
}
📌 This will add or remove slots to match the specified number. If booked slots are being deleted, admin will be warned.

📋 View Available Slots (User)
🚗 View Car Slots
sql
Copy
Edit
GET /user/available-car-slots
Headers: Authorization: Bearer <user_token>
🏍️ View Bike Slots
sql
Copy
Edit
GET /user/available-bike-slots
Headers: Authorization: Bearer <user_token>
✅ Book Slot (User)
🚗 Book Car Slot
sql
Copy
Edit
PUT /user/book-car-slot/:slotId
Headers: Authorization: Bearer <user_token>
🏍️ Book Bike Slot
sql
Copy
Edit
PUT /user/book-bike-slot/:slotId
Headers: Authorization: Bearer <user_token>
❌ Exit Booking (User)
🚗 Exit Car Slot Booking
pgsql
Copy
Edit
PUT /user/exit-car-booking/:slotId
Headers: Authorization: Bearer <user_token>
🏍️ Exit Bike Slot Booking
pgsql
Copy
Edit
PUT /user/exit-bike-booking/:slotId
Headers: Authorization: Bearer <user_token>
Only the user who booked the slot can exit the booking.

👥 Admin Credentials
Admin is predefined in the backend. To log in:

makefile
Copy
Edit
Email: admin@example.com
Password: admin123
📌 These values can be modified in the backend authController.js or .env.

