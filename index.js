const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const LIMIT_LINKS = 50;
var links = [];
var index = 0;

const doCrawl = (url) => {
  console.log("Calling doCrawl");
  axios.get(url).then(
    (res) => {
      const $ = cheerio.load(res.data);
      $("a").each((index, el) => {
        const link = $(el).attr("href");
        if (
          link !== null &&
          link !== undefined &&
          link.slice(0, 4) === "http" &&
          links.length < LIMIT_LINKS
        ) {
          links.push(link);
        }
        if (links.length === LIMIT_LINKS) {
          return false;
        }
      });
      console.log(links);
      if (links.length < LIMIT_LINKS) {
        doCrawl(links[index++]);
      } else {
        fs.writeFile("data2.txt", links.join("\n"), function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        });
      }
    },
    (err) => console.log(err)
  );
};

doCrawl("http://www.python.org");

