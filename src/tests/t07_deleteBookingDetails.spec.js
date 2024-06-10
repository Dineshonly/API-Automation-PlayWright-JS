// Importing the 'test' module from '@playwright/test' for running tests
const { test } = require("@playwright/test");

// Importing utility functions for API calls
const { postAPICall, generateToken, getAPICall, deleteAPICall } = require("../utils/apiUtils");

// Importing a function to get configuration data
import { getConfig } from '../utils/baseUtils';

// Importing JSON data for API request headers and bodies
const postAPIHeaderRequest = require("../fixtures/postAPI_Header_Request.json");
const getAPIHeaderRequest = require("../fixtures/get_API_Header_Request.json");
const tokenAPIHeaderRequest = require("../fixtures/tokenAPI_Header_Request.json");
const deleteAPIHeaderRequest = require("../fixtures/delete_API_Header_Request.json");


test("Delete Booking Details", async ({ request }) => {

    // Getting API URLs from configuration
    const { API_URL} = getConfig();

    // POST API call and retrieving the booking ID
    const bId = await postAPICall(request, API_URL,postAPIHeaderRequest); 
    console.log("Booking ID:", bId);

    // GET API call to retrieve data using the booking ID
    await getAPICall(request, API_URL, bId, getAPIHeaderRequest); 

    // Generating a token for authorization
    const tokenNo = await generateToken(request, API_URL, tokenAPIHeaderRequest); 
    console.log("Generated token:", tokenNo);

    // DELETE API call to delete the booking using the booking ID and token
    await deleteAPICall(request, API_URL, bId, tokenNo, deleteAPIHeaderRequest);
});
