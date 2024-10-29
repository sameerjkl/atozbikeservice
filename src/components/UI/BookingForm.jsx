import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button } from "reactstrap";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    bookingDate: "", 
    bookingSlot: "",
    address: "", 
    additionalInfo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData); // Log all form data to the console

    const apiUrl =
      "https://prod-03.centralindia.logic.azure.com:443/workflows/94fa92a5576b4bc3b39ea1df0d4b090f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WRnfQ4CD_S2_uWzXZLPYGtAg30c0djZvBxlkEIi8fjU"; // Replace with your actual API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify({ check: "bookingdetails", data: formData }), // Convert form data to JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log("Success:", data); // Log success message

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        bookingDate: "", 
        bookingSlot: "",
        address: "", 
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error); // Log error message
    }
  };

  // Define available time slots
  const timeSlots = [
    "09:00 AM to 10:00 AM",
    "10:00 AM to 11:00 AM",
    "11:00 AM to 12:00 PM",
    "12:00 PM to 01:00 PM",
    "01:00 PM to 02:00 PM",
    "02:00 PM to 03:00 PM",
    "03:00 PM to 04:00 PM",
    "04:00 PM to 05:00 PM",
    "05:00 PM to 06:00 PM",
    "06:00 PM to 07:00 PM",
  ];

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="bookingDate" // Updated to match the state variable
          value={formData.bookingDate}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="bookingSlot" // Updated to match the state variable
          value={formData.bookingSlot}
          onChange={handleChange}
          required
          className="time__picker"
        >
          <option value="" disabled>Select Booking Slot</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="address" // Updated to match the casing
          className="textarea"
          placeholder="Address"
          value={formData.address} // Updated to match the casing
          onChange={handleChange}
          required
        ></textarea>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="additionalInfo"
          className="textarea"
          placeholder="Write"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </FormGroup>

      {/* Submit Button */}
      <Button type="submit" className="mt-3">Book Now</Button>
    </Form>
  );
};

export default BookingForm;
