###Installation Guide

1. You must have [Node](https://nodejs.org/en/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed to run this development build.

2. Run the following command on your terminal
>
git clone https://github.com/BleuProfond/the_six_tours

3. cd into the root directory and type the following commands
>
cd site
>npm install
>npm start

4. Go to localhost:8080 through your browser.

## Test Mode

Add the querystring '?test=1' to any route to run the tests for that page and show the results to user.

####General Notes on Node

In Express the order in which the routes and middleware are added is significant. 