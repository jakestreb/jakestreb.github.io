# [Urban Harvest](http://jakestreb.github.com/urbanharvest/)

Sample restaurant website to show off data embedding from Grist using Vue JS.

## Usage

Sample data is loaded via tableIds in each HTML page. For example, in [index.html](index.html) blog entries are retrieved and inserted into the news element via:
```
loadDataUsingVue('Blog', 'news');
```

To modify embedded data, [download the Grist doc](urbanharvest.grist). Select the section containing the desired data and click Export > Embed. You will receive a new basketId for your copy of the data.

Replace the pre-filled basketId in util.js with yours and you're all set.
