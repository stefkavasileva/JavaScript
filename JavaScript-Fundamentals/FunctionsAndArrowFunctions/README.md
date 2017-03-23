# Lab: Functions and Arrow Functions

Problems for in-class lab for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/306](https://judge.softuni.bg/Contests/306).

## 1.Triangle of Stars

Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.

The **input** comes as an array with one string element in it, which needs to be parsed to a number.

The **output** is a series of lines printed on the console, forming a triangle of variable size.

### Examples

| **Input** | **Output** |   
| --- | --- | 
| 1 | \* |   
| 2 | \* <br/> \*\* <br/> \* | 
|5 | \* <br/> \*\* <br/> \*\*\* <br/> \*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\* <br/> \*\*\* <br/> \*\* <br/> \* |

## 2.Rectangle of Stars

Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.

The **input** comes as an array with one string element in it, which needs to be parsed to a number.

The **output** is a series of lines printed on the console, forming a rectangle of variable size

### Examples

| **Input** | **Output** | 
| --- | --- | 
| 1 | \* | 
|2 | \*\* <br/> \*\* | 
|5 | \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* |  

## 3.Palindrome

Write a JS function that checks if an input string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

The **input** comes as an array with a single string element.

The **output** is the return value of your function. It should be **true** if the string is a palindrome and **false** if it&#39;s not.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| haha | false |   
| racecar | true |
| unitinu | true |

## 4.Day of the Week

Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.

The **input** comes as an array with one string element in it.

The **output** should be returned as a result of your program.

### Examples

| **Input** | **Output** |  
| --- | --- |
| Monday | 1 |
| Friday | 5 | 
|Frabjoyousday | error |

## 5.Functional Calculator

Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator. Store the different functions in variables and pass them to your calculator.

The **input** comes as an array of three strings – two need to be parsed as numbers, and one is the operator.

The **output** should be printed on the console.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| [&#39;2&#39;, &#39;4&#39;, &#39;+&#39;] | 6 |
| [&#39;3&#39;, &#39;3&#39;, &#39;/&#39;] | 1 |
| [&#39;18&#39;, &#39;-1&#39;, &#39;\*&#39;] | -18 |

## 6.Aggregate Elements

Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:

- **Sum(ai)** - calculates the sum all elements from the input array
- **Sum(1/ai)** - calculates the sum of the inverse values (1/ai) of all elements from the array
- **Concat(ai)** - concatenates the string representations of all elements from the array

The **input** comes as an array of elements that must be parsed as numbers, where necessary.

The **output** should be printed on the console on a new line for each of the operations.

### Examples

| **Input** | **Output** |
| --- | --- | 
| [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;] | 6  <br/> 1.8333 <br/> 123 | 
|[&#39;2&#39;, &#39;4&#39;, &#39;8&#39;, &#39;16&#39;] | 30 <br/> 0.9375 <br/> 24816 |

## 7.\*Words Uppercase

Write a JS program that **extracts all words** from a passed in string and converts them to **upper case**. The extracted words in upper case must be printed back on a single line concatenated by **&quot;, &quot;**.

The **input** comes as an array of strings with only one entry - the text from which to extract and convert the words.

The **output** should be a single line containing the converted string.

### Examples

| **Input** | **Output** |   
| --- | --- | 
| [&#39;Hi, how are you?&#39;] | HI, HOW, ARE, YOU  |
| [&#39;hello&#39;] | HELLO  |

### Hints

- You may need to use a [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) or alternatively check for all delimiters that can be found in a sentence (ex. &quot;,&quot;, &quot; &quot;, &quot;!&quot;, &quot;?&quot; and so on).