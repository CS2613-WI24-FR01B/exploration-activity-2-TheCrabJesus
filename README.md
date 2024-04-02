[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RPDAFNpj)
# EA2 - Data to Graphs/Charts

## 1. Package/Library

This program was created using the Chart.js library for Javascript. It it used for creating interactive (very minimal, but still present) charts that represent data from input CSV (or JSON, but I kept it simple with limiting it to CSV) files.

## 2. How to run the program

- Clone the repository to a directory of your choosing
- Open the index.html file in your browser of choice

This program should work in any browser (has been tested in Microsoft Edge, Chrome, Mozilla Firefox, and Opera GX). There are no extra steps to it, simply opening it in your browser will run the program.

## 3. Program's Purpose

This program is used to be able to see a visual representation of CSV data through various different charts. Having a large set of data can sometimes be hard to interpret when all you see is numbers, and so being able to put it in a visually pleasing and easy to assess format is very valuable.

As long as you're able to provide the data (I've provided some sample data to use to show functionality), the rest gets done for you.

## 4. Sample Input/Output

All input for this program needs to be in CSV format. Although the program will only take in the data from the first 2 columns, it will accept files with more than 2 columns of data, but will simply not use the rest of the data (see example 3). Also note that the data must be numerical, and that I have not set it up to correctly read in date/time format and will convert the date/time to a float(see example 3).

Generating all charts from input with few data
[![Image](/Screenshots/Screenshot02.png)"Example 1: All Charts"]

Generating all charts from input with many data
[![Image](/Screenshots/Screenshot03.png)"Example 3: All Charts]

Removing bar chart from all charts
[![Image](/Screenshots/Screenshot04.png)"Example 3: Removed bar chart]

Generating Line Chart
[![Image](/Screenshots/Screenshot05.png)"Example 3: Generate Line Chart]