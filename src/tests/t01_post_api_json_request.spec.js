// Importing the 'test' module from '@playwright/test' for running tests
const { test } = require("@playwright/test");

// Importing utility functions for API calls
const { postAPICall} = require("../utils/apiUtils");

// Importing a function to get configuration data
import { getConfig } from '../utils/baseUtils';

// Importing JSON data for API request headers and bodies
const postAPIHeaderRequest = require("../fixtures/postAPI_Header_Request.json");

test("Delete Booking Details", async ({ request }) => {

    // Getting API URLs from configuration
    const { API_URL} = getConfig();

    // POST API call and retrieving the booking ID
    const bId = await postAPICall(request, API_URL,postAPIHeaderRequest); 
    console.log("Booking ID:", bId);
});
