# [Urban Harvest](http://jakestreb.github.com/urbanharvest/)

Sample restaurant website to show off data embedding from Grist using Vue JS.

## Usage

Sample data is loaded via pre-filled Embed IDs in each HTML page. For example, in [menu.html](menu.html) menu items are retrieved via:
```
grist.loadDataUsingVue('e6I4O2O6X88J4', 'menu');
```

To modify embedded data, [download the Grist doc](urbanharvest.grist). Select the section containing the desired data and click Export > Embed. You will receive a new Embed ID for your copy of the data.

Replace the pre-filled Embed ID with yours and you're all set.
