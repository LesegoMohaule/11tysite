# Sport Stats


Sport Stats website is a collection of the 2018-2019 English Premier League teams' goals stats. 
Charts of goals conceded and goals scored per 10 minute interval are presented for each team. 
A description of how the site was built is also included. The site was built using the 11ty 
framework and languages such as HTML, Nunjucks and Javascript. CSS and Bootstrap 5 were used 
for styling. Here I document the process of how the site was built.

## Requirements

Install Git from GIT-SCM.com.
Install Nodejs from Nodejs.org.
Open a free Github account at Github.com.
Install npm.

## Getting started

I used Visual Studio Code as a text editor.

1. Open Visual Studio Code.

2. Create a new folder to locate your project. I named my folder 11tysite.

3. Open the folder and create a new file in the folder and name it base.njk.Open base.njk to view the complete code for the page. This will be used as a base template for most of our pages. The first 3 
lines of the page are the front matter enclosed in --- lines. The data from a json file called teams will 
be used in the base template and it will be added later.

4. Create a folder called src and inside it create a folder called _includes. Move the base.njk file 
to the _includes folder. This enables the base template to be included in other pages.  


## Landing page

Create 2 files inside the src folder. One called index.njk and the other one home.njk. 
index.njk is the landing page and home.njk is the home page. The two are exactly the same. 
Open them to view their complete code. In the pages' front matter the layout is specified as 
the base.njk file and the title is Sports Stats.

## About page

Create an about.njk page inside the src folder. Open the about.njk file to view the contents.

## Data

Create a folder called _data inside the src folder. Inside the _data folder create an images folder 
and a stats folder. Paste the team logos inside the images folder. The goals stats inside the stats folder 
were obtained from FootyStats as csv files. Goals data per team were extracted from the csv file into an excel files and the excel files were converted to a json file using a free online xls to json converter. 
Paste the goals json files inside the stats folder. Paste the teams.json file inside the _data folder.

## Installing Eleventy

Eleventy is the static site generator that is used to build the site. Eleventy is simpler to use 
and it gives you what you ask for, nothing more and nothing less.

Open the project folder in VS Code and open the terminal.

Run the following command:

```
npm init--y

```

A package.json file is created in the project folder.

To install eleventy run:

```
npm i --save @11ty/eleventy

```
Eleventy is now installed.

In the project folder create a file called .eleventy.js. This is the configuration file. 
Configure the file as it is in this project's .eleventy.js file.

In the package.json file delete the line with the "test" script and replace it with:

```
"build": eleventy
"start": eleventy --serve
```

This ensures that the build command is executed which runs the install package in node_modules 
and that the eleventy server will run when the application is launched

Run the following command to launch the server and open the site where the localhost url is indicated:

```
npm start
```

Eleventy will generate html pages in the dist folder

## Git

Create a .gitignore file in the project folder so that some items that are not necessary will not 
be included in the build. These are node_modules and dist folders.

Run the following commands to create a Git repository:

```
git init
```
```
git add .
```
```
git commit -m "Initial commit"
```
Push the repo to a new online repository on your Git account.

## Goalstats.njk

Create a new file called Goalstats.njk which will be used to display the charts per team. 
The Goalstats.njk file uses a Google Charts API to display the charts in runtime. 
The markup as it is shows a team's goals chart and the logo of the team with the base.njk 
template.

## Squads

Create a squad.njk layout template which inherits from the base.njk template as shown in the 
_includes folder. Also create a squadslist.njk file in the _includes folder. The markup is 
as it is the files. Create a folder called squads inside the src folder. Inside the squads folder 
create the .md files of each team. The layout is the same. Create a squads.njk file in the src folder. 
This is where the list of the links to the squads will be displayed. 



## References

https://www.encodedna.com/google-chart/create-line-charts-with-dynamic-json-data-using-google-charts.htm

https://github.com/philhawksworth/fcc-1-simply-static

https://www.11ty.dev/
