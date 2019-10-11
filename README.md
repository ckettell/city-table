# Cities Task

## How to start

Clone this repository

npm install

npm start

In your browser, visit http://localhost:3000/City

You can change the URL to sort by country or city. Simply add:
Country
100m+
150m+
200m+
300m+

## How I built it

To import the CSV file I used d3. I decided on this instead of PapaParse after researching the two.

From here, I passed the data to my table component.

Here, I used React Table. This was the most popular of all the options. Along with the high number of downloads, the GitHub issues are relatively low.

After some research, I found I needed column names. To do this, I mapped through the data passed down from CityData. Alternatively, I could have used Object.keys here.

With this function, I was able to form the table.

To pass the relevant parameters, I used React Router Dom. This is something I have used in the past and am familiar with.

A little later on, I was able to introduce a function parsing relevant data to integers. Found in the Table component, this iterates over the array of cities and then uses Object keys. On each iteration over the objects, it parses the relevant data to integers. 

## To improve on

I would like to introduce tests.
