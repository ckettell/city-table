Cities Task

# How to start

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

# How I built it

To import the CSV file I used d3. I decided on this instead of PapaParse after researching the two.

From here, I passed the data to my table component.

Here, I used React Table. This was the most popular of all the options. Along with the high number of downloads, the GitHub issues are relatively low.

After some research, I found I needed column names. To do this, I mapped through the data passed down from CityData.

Alternatively, I could have used Object.keys here. 

With this function, I was able to form the table.

# To improve on

I did not have time to parse the relevant columns to integers. This means that the columns do have a funny ordering. This is something I am going to look into later instead of hardcoding them in as integers
