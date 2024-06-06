<template>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input class="input" type="text" v-model="formData.fullName" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="formData.email" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="tel" v-model="formData.phoneNumber" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Date Checkin</label>
          <div class="control">
            <input class="input" type="date" v-model="formData.checkinDate" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Date Checkout</label>
          <div class="control">
            <input class="input" type="date" v-model="formData.checkoutDate" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Number of Guests</label>
          <div class="control">
            <input class="input" type="number" v-model.number="formData.numberOfGuests" min="1" max="6" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Stay with Pets</label>
          <div class="control">
            <div class="select">
              <select v-model="formData.stayWithPets">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Comments or Other Requests</label>
          <div class="control">
            <textarea class="textarea" v-model="formData.comments"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <vue-recaptcha @verify="onCaptchaVerified" sitekey="your-site-key"></vue-recaptcha>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit" :disabled="!isCaptchaVerified">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </template>

  <script>
  import { VueReCaptcha } from 'vue-recaptcha-v3';

  export default {
    name: 'BookingForm',
    components: {
      'vue-recaptcha': VueReCaptcha
    },
    data() {
      return {
        formData: {
          fullName: '',
          email: '',
          phoneNumber: '',
          checkinDate: '',
          checkoutDate: '',
          numberOfGuests: 1,
          stayWithPets: 'no',
          comments: ''
        },
        isCaptchaVerified: false,
        captchaToken: ''
      };
    },
    methods: {
        handleSubmit() {
  if (this.isCaptchaVerified) {
    // Enviar los datos al backend
    fetch('/send-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...this.formData,
        captchaToken: this.captchaToken
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert('Error: ' + data.error);
      } else {
        alert('Booking request sent successfully');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert('Please complete the CAPTCHA');
  }
},
      onCaptchaVerified(recaptchaToken) {
        this.captchaToken = recaptchaToken;
        this.isCaptchaVerified = true;
      }
    }
  };
  </script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.booking-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 20px;
}

.field .label {
  font-weight: bold;
}

.control {
  position: relative;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.2s ease-in-out;
}

.input:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.select select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;
}

.select select:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.2s ease-in-out;
}

.textarea:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #0056b3;
}
</style>
