# Order Form Popup - WoodSool

## Overview
This feature adds a beautiful, animated popup form that appears when users click on products or the "Add to Cart" button. The form collects customer information and sends it to a backend API.

## Features

### 🎨 Beautiful UI/UX
- **Smooth Animations**: Slide-in from bottom with fade effects
- **Responsive Design**: Works perfectly on mobile and desktop
- **User-Friendly**: Clear form validation and helpful placeholders
- **Interactive Elements**: Hover effects and focus states

### 📱 Form Fields
- **First Name** (required)
- **Last Name** (required)
- **Phone Number** (required) - Pre-filled with +213 Algerian country code
- **Wilaya** (required) - Dropdown with all 58 Algerian wilayas

### 🎯 Trigger Points
1. **New Arrivals Section**: Click on product image or "Add to Cart" button
2. **Top Wood Section**: Click on the main product image

## Technical Implementation

### Components Created
- `OrderFormPopup.jsx` - Main popup form component
- `apiService.js` - API service for backend communication
- Updated `animations.css` - Added smooth animations

### Files Modified
- `NewArrivalsSection.jsx` - Added popup trigger functionality
- `TopWoodSection.jsx` - Added popup trigger functionality
- `index.css` - Imported animation styles

## Backend Integration

### API Endpoint Setup
To connect with your backend, update the `apiService.js` file:

```javascript
const API_BASE_URL = 'https://your-backend-api.com'; // Add your API URL

export const submitOrder = async (orderData) => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit order');
  }
  
  return await response.json();
};
```

### JSON Data Structure
The form sends the following JSON structure to your backend:

```json
{
  "customer": {
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "+213612345678",
    "wilaya": "16"
  },
  "product": {
    "name": "Wood ball",
    "price": "750 Da",
    "img": "path/to/image.png"
  },
  "orderDate": "2024-01-15T10:30:00.000Z",
  "orderId": "ORD-1705312200000"
}
```

### Algerian Wilayas
The form includes all 58 Algerian wilayas with their official codes:
- 01 - Adrar
- 02 - Chlef
- 03 - Laghouat
- ...
- 58 - El Meniaa

## Usage

### For Developers
1. **Enable Backend**: Update `src/utils/apiService.js` with your API endpoint
2. **Customize Styling**: Modify `src/styles/animations.css` for different animations
3. **Add More Fields**: Extend the form in `OrderFormPopup.jsx`

### For Users
1. **Click on any product** in the New Arrivals section
2. **Click "Add to Cart"** button on any product
3. **Click on the main product** in the Top Wood section
4. **Fill out the form** with your information
5. **Submit** to complete your order

## Features in Detail

### Animations
- **Backdrop**: Fade-in overlay
- **Popup**: Slide-in from bottom with scale effect
- **Form Inputs**: Subtle lift effect on focus
- **Buttons**: Hover animations with shadow effects

### Validation
- **Required Fields**: All fields are mandatory
- **Phone Format**: Automatically formats Algerian phone numbers
- **Wilaya Selection**: Dropdown with all 58 wilayas

### User Experience
- **Loading States**: Button shows "Submitting..." during API call
- **Success/Error Messages**: Clear feedback to users
- **Auto-close**: Popup closes automatically after successful submission
- **Click Outside**: Close popup by clicking outside the form

## Customization

### Styling
- Colors: Orange theme (`orange-400`, `orange-500`)
- Animations: Customizable in `animations.css`
- Responsive: Mobile-first design

### Form Fields
- Add new fields in the `formData` state
- Update the `handleInputChange` function
- Modify the JSON structure sent to backend

### API Integration
- Replace the mock API call in `apiService.js`
- Add authentication headers if needed
- Handle different response formats

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Performance
- Lightweight animations using CSS transforms
- Efficient state management with React hooks
- Minimal bundle size impact 