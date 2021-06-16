# web-crawler-JS
A crawler is a program that starts with a url on the web (ex: http://python.org), fetches the web-page corresponding to that url, and parses all the links on that page into a repository of links. Next, it fetches the contents of any of the url from the repository just created, parses the links from this new content into the repository and continues this process for all links in the repository until stopped or after a given number of links are fetched.

inputs : website link to scrap(as param in doCrawl()), LINKS_LIMIT- number of links to fetch
output in .txt file - storing the #LINKS_LIMIT links with line separated

Web crawler - BFS APPROACH- considering to fetch the number of total nodes = LINKS_LIMIT as input

libraries used :
  => axios : Promise based HTTP client for the browser and node.js
  => cheerio : Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
  => fs : access and interact with file system
  
Steps :
  - Extract HTML from website
  - fetch HTML from response
  - Traverse the DOM and extract the 'a' tags with 'href' attributes and filter required links(http or https)
  - Store in a temporary list data structure
  - once all the LINKS_LIMIT links fetched => save them into .txt file using fs library
