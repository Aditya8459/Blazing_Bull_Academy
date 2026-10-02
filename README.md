# Blazzing Bull Academy

This is a Vite/React frontend. Contact enquiries and registrations are sent from the browser through EmailJS; no Node.js API server or MongoDB database is required.

## Run locally

Run `npm run install:all`, create `client/.env` from `client/.env.example`, add your EmailJS service ID, template ID and public key, then run `npm run dev`. The site runs at http://localhost:5173. Restart Vite after changing environment variables.

Set the EmailJS template recipient to the academy inbox. The template should include these variables so both enquiry and registration submissions are fully included:

`{{submission_type}}`, `{{full_name}}`, `{{date_of_birth}}`, `{{mobile_number}}`, `{{whatsapp_number}}`, `{{email}}`, `{{city}}`, `{{state}}`, `{{trading_experience}}`, `{{trading_knowledge}}`, `{{course}}`, `{{learning_mode}}`, `{{source}}`, `{{message}}`, `{{consent}}`.

## Site assets

Edit content in `client/src/config/site.ts`. The logo is `client/public/logo.jpg`; mentor photos are in `client/public/mentors/`.

## Build and deploy

Run `npm run build` to build the frontend. Deploy the client to Vercel, Netlify or another static frontend host, and configure the three `VITE_EMAILJS_*` environment variables in the hosting dashboard. EmailJS handles form delivery; form submissions are no longer stored in MongoDB.
