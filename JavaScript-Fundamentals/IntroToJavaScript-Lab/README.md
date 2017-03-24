# Lab: Introduction to JavaScript

Problems for in-class lab for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/287/.](https://judge.softuni.bg/Contests/287/)

## 1.Sum 3 Numbers

Write a JS function that takes three numbers as input and outputs their sum.

The **input** comes as array of string elements that need to be parsed as numbers.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |  
| --- | --- |
| [&#39;2&#39;, &#39;3&#39;, &#39;4&#39;] | 9 |   
| [&#39;1.5&#39;, &#39;1.5&#39;, &#39;-1&#39;] | 1 |

## 2.Sum And VAT

Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).

The **input** comes as array of string elements that need to be parsed as numbers. The number of elements will be different every time.

The **output** should be printed to the console on a new line for every entry.

| **Input** | **Output** |
| --- | --- |
| [&#39;1.20&#39;, &#39;2.60&#39;, &#39;3.50&#39;] | sum = 7.3 <br/> VAT = 1.46 <br/>  total = 8.76 |
| [&#39;3.12&#39;, &#39;5&#39;, &#39;18&#39;, &#39;19.24&#39;, &#39;1953.2262&#39;, &#39;0.001564&#39;, &#39;1.1445&#39;] | sum = 1999.732264 <br/>  VAT = 399.94645280000003 <br/>  total = 2399.6787168 |

## 3.Letter Occurrences In String

Write a JS function that counts how many times a specific letter occurs in a given string.

The **input** comes as array of string elements. The first element is the string to check and the second element is the letter to count.

The **output** should be returned as a result of your function.

| **Input** | **Output** |  
| --- | --- | 
| [&#39;hello&#39;, &#39;l&#39;] | 2 |  
 | [&#39;panther&#39;, &#39;n&#39;] | 1 |

## 4.Filter By Age

Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.

The **input** comes as array of string elements. The first element is the minimum age. The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. The three age parameters need to be parsed as numbers.

The **output** should be printed to the console.

| **Input** | **Output** |
| --- | --- |
| [&#39;12&#39;, &#39;Ivan&#39;, &#39;15&#39;, &#39;Asen&#39;, &#39;9&#39;] | { name: &#39;Ivan&#39;, age: 15 } |

## 5.String Of Numbers 1…N

Write a JS function that read a number **n** as input and prints all numbers from 1 to **n** , concatenated as a single string.

The **input** comes as array of one string element that needs to be parsed as a number.

The **output** should be returned as a result of your function.

| **Input** | **Output** |
| --- | --- |
| [&#39;11&#39;] | &#39;1234567891011&#39; |

## 6.Figure Area

Write a JS function that calculates the area of the figure on the right by given values for **w** , **h** , **W** and **H**. The lower right corner is always common for the two rectangles.

The **input** comes as array of string elements that need to be parsed as numbers.

The **output** should be returned as a result of your function.

### Examples

| **Input** | **Output** |   
| --- | --- | 
| [&#39;2&#39;, &#39;4&#39;, &#39;5&#39;, &#39;3&#39;] | 17 |   
| [&#39;13&#39;, &#39;2&#39;, &#39;5&#39;, &#39;8&#39;] | 56 |

## 7.Next Day

Write a JS function that calculates the date of the next day by given year, month and day.

The **input** comes as array of three string elements that need to be parsed as numbers. The first element is the year, the second is the month and the third is the day.

The **output** should be returned as a result of your function.

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;2016&#39;, &#39;9&#39;, &#39;30&#39;] | 2016-10-1 |

## 8.Distance between Points

Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.

The **input** comes as array of four string elements in the format **[x1, y1, x2, y2]** that need to be parsed as numbers. Each pair of elements are the coordinates of a point in 2D space.

The **output** should be returned as a result of your function.

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;2&#39;, &#39;4&#39;, &#39;5&#39;, &#39;0&#39;] | 5 |
| [&#39;2.34&#39;, &#39;15.66&#39;, &#39;-13.55&#39;, &#39;-2.9985&#39;] | 24.50778901186315 |