# Exercises: Conditional Statements and Loops

Problems for exercises and homework for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/300](https://judge.softuni.bg/Contests/300).

In this homework you are supposed to **write program logic** using expressions, conditions and loops in JavaScript. You will practice working with arithmetic operators, **expressions** and calculations, using **conditional statements** ( **if** , **if** - **else** , multiple **if** - **else** - **if** - **else** -… and **s**** witch **-** case**) and working with**loop statements**(like**for **,** while **,** do **-** while **and** for **-** of**) and**nested loops**, combined with conditional statements and calculations.

## 1.Biggest of 3 Numbers

Write a JS function that finds the **biggest of 3 numbers**.

The **input** comes as array of strings, where each element holds a number.

The **output** is the biggest from the input numbers.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| 5 <br/> -2 <br/> 7 | 7 |   
| 130 <br/> 5 <br/> 99 | 130 |
| 43 <br/> 43.2 <br/> 43.1 | 43.2 | 
|5 <br/> 5 <br/> 5 | 5 |
| -10 <br/> -20 <br/> -30 | -10 |

### Hints

Read the input and parse them to numbers:

```JavaScript
function biggestNumber(input) {
	let num1 = Number(inpit[0]);
	let num2 = // TODO
	let num3 = // TODO
}
```

Note: If you don&#39;t parse the input strings to numbers and you compare them by **if** -condition, your code will compare the string values instead the number values and thus 5 might be bigger than 11.

You may use **Math.max(num1,****num2,****num3)** to find the biggest number. It will automatically convert strings to numbers, so parsing the input elements to number might not be obligatory. Your code might look like this:

 ```JavaScript
function biggestNumber(input) {
	let num1 = Number(inpit[0]);
	let num2 = // TODO
	let num3 = // TODO
	console.log(Math.max(num1, num2, num3));
}
```

**Test** the above code **locally** by invoking the **biggestNumber()** function like this:

```JavaScript
biggestNumber(['5', '-2', '7']);
biggestNumber(['130', '5', '99']);
biggestNumber(['43', '43.2', '43.1']);
```
**Test** the above code **locally** in your Web browser.

Finally, submit your code in the judge system: [https://judge.softuni.bg/Contests/Practice/Index/300](https://judge.softuni.bg/Contests/Practice/Index/300).

Note: the above code might be shortened like this:
 ```JavaScript
function biggestNumber([num1, num2, num3]) {
	console.log(Math.max(num1, num2, num3));
}
```

The above code takes the input as array of 3 string variables **num1** , **num2** and **num3**. Then the function **Math.max(…)** converts its string arguments to numbers and returns the biggest of them.

You may shorten further your solution by making it an **arrow function** like the shown below:

 ```JavaScript
 
 ([num1, num2, num3]) => console.log(Math.max(num1, num2, num3));

```

The **judge** system will **accept** the above solution as correct.

In the judge you can also **return the expected result** instead of printing it at the console, so the following solution will also be accepted by the judge, as well:

 ```JavaScript
 
 ([num1, num2, num3]) => Math.max(num1, num2, num3);

```

The above code could be even further shortened like this:

  ```JavaScript
 (nums) => console.log(Math.max(nums[0], nums[1], nums[2]));
```
The judge system will accept the above arrow function as correct solution, passing all the tests.

Enjoy!

## 2.Point in Rectangle

Write a JS function that takes as input 6 numbers **x** , **y** , **xMin** , **xMax** , **yMin** , **yMax** and prints whether the point { **x** , **y** } is **inside** the rectangle or **outside** of it. If the point is at the rectangle **border** , it is considered **inside**.

The **input** comes as array of strings. Its holds the string representations of **x** , **y** , **xMin** , **xMax** , **yMin** , **yMax**. All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that **xMin** &lt; **xMax** and **yMin** &lt; **yMax**.

The **output** is a single line holding &quot; **inside**&quot; or &quot; **outside**&quot;.

### Examples

| **Input** | **Output** |
| --- | --- | 
| 8 <br/> -1 <br/> 2 <br/> 12 <br/> -3 <br/> 3 | inside |
| 12.5 <br/> -1 <br/> 2 <br/> 12-3 <br/> 3 | outside |

### Hints

First write a JS function to **read the input numbers**** x **,** y **,** xMin **,** xMax **,** yMin **and** yMax **from the array of 6 strings, passed as input parameter** input **. The numbers should be taken from the array elements** input[0] **,** input[1]**, … and should be parsed from string to number as follows:

```JavaScript
function pointInRect(input){
	let x = Number(input[0]);
	let y = Number(input[1]);
	let xMin = Number(input[2]);
	let xMax = Number(input[3]);
	let yMin = Number(input[4]);
	let yMax = Number(input[5]);
	// TODO
}
```
The above code could be significantly shortened by using a JS language feature called &quot; **destructuring assignment**&quot; + **mapping** the input string array to an array of numbers through the function **Number** like this:

```JavaScript
function pointInRect (input) {
	let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
	// TODO
}
```
Next, write **if** - **else** statement to check whether the point { **x** , **y** } is inside the rectangle. A **point is inside a rectangle** if and only if both of the following conditions are fulfilled:

- its **x** coordinate is between **xMin** and **xMax**
- its **y** coordinate is between **yMin** and **yMax**

The code may look like this:

```JavaScript
if(x >= xMin && x <= xMax && y >= yMin && y <= yMax)
	console.log('inside');
else 
	console.log('outside');
```
Now **test the function locally** on your computer. Invoke the above function like this:

```JavaScript
pointInRect(['8', '-1', '2', '12', '-3', '3']);
pointInRect(['12.5', '-1', '2', '12', '-3', '3']);
```
Note that the function takes its input as **array of 6 strings** (not numbers, not string holding number, not an array of numbers). You may test your code in your IDE, in the console (with Node.js) or in your Web browser&#39;s JS console.
The screenshot below shows the above function, invoked in **Chrome JavaScript Console** :
The screenshot below shows the above code in the **Node.js REPL console** :
Now you are ready to submit your solution in the **judge system**. Open the judge contest for this homework and submit your code: [https://judge.softuni.bg/Contests/Practice/Index/300](https://judge.softuni.bg/Contests/Practice/Index/300). It should look like this:
The judge system should **accept your solution** as correct:

## 3.Odd Numbers 1 to N

Write a JS function that reads an integer **n** and prints all **odd numbers** from **1** to **n**.

The **input** comes as array of strings. Its first element holds the string representation of **n**. The number **n** will be an integer in the range [1 … 100 000].

The **output** should hold the expected odd numbers, each at a separate line.

### Examples

| **Input** | **Output** |
| --- | --- | 
| 5 | 1 <br/> 3 <br/> 5 |   
| 4 | 1 <br/> 3 | 
|7 | 1 <br/> 3 <br/> 5 <br/> 7 |

### Hints

First write a JS function to read the input number **n** from an array of strings, passed as parameter **input**. The number **n** should be taken from the first array element **input[0]** and should be parsed from string to number:

```JavaScript
function nums(input) {
	let n = Number(input[0]);
	// TODO: print all odd numbers in range [1...n]
}
```
Next, write a **for** -loop from **1** to **n** with **step**** 2**:

```JavaScript
for (let i=1; i<=n; i+=2) {
	
}
```
Finally, print the number **i** at each iteration of the **for** -loop. The entire function should look like this:

```JavaScript
function nums(input) {
	let n = Number(input[0]);
	for(let i=1; i<=n; i+=2) {
		console.log(i);
	}
}
```

Now **test the function locally** on your computer. Invoke the above function like this:

```JavaScript
nums(['7']);
``` 

## 4.Triangle of Dollars

Write a JS function that prints a triangle of **n** lines of &quot; **$**&quot; characters like shown in the examples.

The **input** comes as array of strings. Its first element holds the number **n** ( **0** &lt; **n** &lt; **100** ).

The **output** consists of **n** text lines like shown below.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| 3 | $ <br/> $$ <br/> $$$ |   | 2 | $ <br/> $$ | 4 | $ <br/> $$ <br/> $$$ <br/> $$$$ |

### Hints

Variant 1: use **nested loops** and for each row collect the &#39; **$**&#39; characters in a string and then print it:

```JavaScript
let line = '';
for (let col = 1; col<= row; col++)
	line +='$';
console.log(line)
```
Variant 2: use a simple loop **row** = **1** … **n** and print **row** dollars this way:

```JavaScript
console.log(new Array(row+1).join('$'))
```

Variant 3: you can print **row** dollars by **repeating** the &#39; **$**&#39; string **row** times:

```JavaScript
console.log('$'.repeat(row));
```

## 5.Movie Prices

Movie ticket **prices** in a big retro-cinema depend on the **movie title** and on the **day of week** as shown below:

| **Movie Title** | **Monday** | **Tuesday** | **Wednesday** | **Thursday** | **Friday** | **Saturday** | **Sunday** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **The Godfather** | 12 | 10 | 15 | 12.50 | 15 | 25 | 30 |
| **Schindler&#39;s List** | 8.50 | 8.50 | 8.50 | 8.50 | 8.50 | 15 | 15 |
| **Casablanca** | 8 | 8 | 8 | 8 | 8 | 10 | 10 |
| **The Wizard of Oz** | 10 | 10 | 10 | 10 | 10 | 15 | 15 |

Write a JS function that **calculate the ticket price** by movie title and day of week.

The **input** comes as array of 2 strings. The first string holds the **movie title**. The second string holds the **day of week**.

The **output** should hold the **ticket price** or &quot; **error**&quot; if the title or day of week is invalid.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| The Godfather <br/> Friday | 15 | 
|casablanca <br/> sunday | 10 | 
|Schindler&#39;s LIST  <br/>  monday | 8.50 | 
|SoftUni <br/> Nineday | error |

### Hints

- Turn all input values to **lowercase** to avoid character casing mistakes.
- **Check the movie title** in **if** - **else** - **if** statement.
- For each movie title check the price in a **switch** - **case**.
- Beware of **invalid** movie titles and invalid days of week. Show &quot; **error**&quot; in such cases.

You may follow the **code example** below:

```JavaScript
function moviePrices([title, day]){
	//TODO: make title and day lowercase
	if(title == "the godfather"){
		switch(day){
			case "monday": return 12;
			//TODO: check the other days..
			default: return "error";
		}
	}else if (title === "schindler's list"){
		switch (day){
			//TODO: return the price by day
		}
	//TODO: check the other movie titles...
	}else {
		return "error";
	}
}
```
You may **test your code** locally like this:

```JavaScript
console.log (moviePrices(["The Godfather", "Friday"]));
console.log (moviePrices(["casablanca", "sunday"]));
console.log (moviePrices(["Schindler&#39 LIST", "monday"]));
console.log (moviePrices(["SoftUni", "Nineday"]));
```
## 6.Quadratic Equation

Write a JS function to **solve a quadratic equation** by given in standard form as its coefficients: **a** , **b** , **c**. You may learn more about quadratic equations here: [https://www.mathsisfun.com/algebra/quadratic-equation.html](https://www.mathsisfun.com/algebra/quadratic-equation.html).

The **input** comes as array of strings. Its holds the string representations of 3 real numbers: **a** , **b** and **c**. The value of **a** will be non-zero.

The **output** depends on the equation:

- It holds two numbers **x1** and **x2** if the equation has two different solutions (roots): **x1** and **x2**.
  - First print the smaller root, then the greater.
- It holds a single number **x** if the equation has only one solution (root): **x**.
- It holds the text &quot; **No**&quot; if the equation has no solutions (no real roots).

### Examples

| **Input** | **Output** |
| --- | --- | 
| 6 <br/> 11 <br/> -35 | -3.5 <br/> 1.66667  | 
| 1 <br/> -12 <br/> 36 | 6 |
| 5 <br/> 2 <br/> 1 | No | 
### Hints

- Search for &quot; **solving quadratic equation**&quot; in Internet.
- Use **if** -conditions and expressions to calculate the **discriminant** and the equation **roots** (if any).

## 7.Multiplication Table

Write a JS function to print a **math multiplication table** of size **n** , formatted as **HTML table**.

The **input** comes as array of strings. Its first element holds the number **n** ( **0** &lt; **n** &lt; **100** ).

The **output** consists of **n+3** text lines like shown below.

### Examples

| **Input** | 5 |
| --- | --- |
| **Output** |<pre> &lt;table border=&quot;1   &quot;&gt;<br/>  &lt; **tr** &gt;&lt;th&gt; **x** &lt;/th&gt;&lt;th&gt; **1** &lt;/th&gt;&lt;th&gt; **2** &lt;/th&gt;&lt;th&gt; **3** &lt;/th&gt;&lt;th&gt; **4** &lt;/th&gt;&lt;th&gt; **5** &lt;/th&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **1** &lt;/th&gt;&lt;td&gt; **1** &lt;/td&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **2** &lt;/th&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **3** &lt;/th&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **9** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **4** &lt;/th&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **16** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **5** &lt;/th&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;td&gt; **25** &lt;/td&gt;&lt;/ **tr** &gt; <br/> &lt;/table&gt; |


### Hints

- Create a function **multiplicationTable([n]) { … }**. It will return a table of size **n**.
- First, print the &quot; **&lt;table**** border=&#39;1&#39;&gt;**&quot; opening tag.
- Using a simple loop, print the **heading row**.
  - It should hold **&lt;tr&gt;** + &quot; **x**&quot; + the numbers **1** … **n** (all surrounded in **&lt;td&gt;&lt;/td&gt;** ) + **&lt;/tr&gt;**.
- Print the **next**** n ****lines** using nested loops.
  - For each line start with **&lt;tr&gt;** , then append its elements in a loop (all surrounded in **&lt;td&gt;&lt;/td&gt;** ) and finally append **&lt;/tr&gt;**.
- After the loops, at the end, print the &quot; **&lt;/table&gt;**&quot; closing tag.
- You may visualize your code&#39;s output in the browser like this:

```JavaScript
document.body.innerHTML = mutiplicationTable(['5'])
```
## 8.Figure of 4 Squares

Write a JS function to print a **figure of 4 squares** of size **n** like shown in the examples below.

The **input** is an integer number **n** in the range [2 … 200].

The **output** consists of **n** lines for **odd**  **n** and **n-1** lines for **even**** n **. Each line holds** 2\*n-1**characters (**+ **or** | **or** space**) as shown in the examples. The figure is fully symmetric (horizontally and vertically).

### Examples

| **Input** | **Output** |  
| --- | --- |
| 4 | +--+--+ <br/>  +--+--+ <br/> +--+--+ | 
|5 | +---+---+ <br/> \|&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;\| <br/> +---+---+ <br/> \|&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;\| <br/> +---+---+ |   
| 6 | +----+----+ <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> +----+----+ <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> +----+----+ |
| 7 | +-----+-----+ <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> +-----+-----+ <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> \|&ensp;&ensp;&ensp;&ensp;&ensp;\|&ensp;&ensp;&ensp;&ensp;&ensp;\| <br/> +-----+-----+ |

### Hints

- Use **nested loops** and **if** -statements. Try to figure out the **logic of construction** of the above figures.

## 9.\*\* Monthly Calendar

Note: this problem is for champions only!

Write a JS function **calendar([day,****month,****year])** that returns a **monthly calendar as HTML**** table**(like in the examples below) by given**day **,** month **and** year **. Weeks start by &quot;** Sun**&quot; (Sunday) and end by &quot;**Sat**&quot; (Saturday).

The **input** comes as array of 3 strings, holding the following numbers:

- **day** (1 ≤ **day** ≤ 31)
- **month** (1 ≤ **month** ≤ 12)
- **year** (1900 ≤ **year** ≤ 2100)

The **output** should be an **HTML table** , holding the calendar rows and columns, like in the examples below. Display the **weeks** as table rows: **&lt;tr&gt;…&lt;/tr&gt;**. Display the **days** as table cells: **&lt;td&gt;…&lt;/td&gt;**. Display the days of the previous month with CSS class &quot; **prev-month**&quot;, the days of the next month with CSS class &quot; **next-month**&quot; and the current day with CSS class &quot; **today**&quot;. See the examples below.

### Examples

| **Input** | **Output** | 
| --- | --- |
| 24 <br/> 12 <br/> 2012 |<pre> &lt;table&gt; <br/>  &lt;tr&gt;&lt;th&gt; **Sun** &lt;/th&gt;&lt;th&gt; **Mon** &lt;/th&gt;&lt;th&gt; **Tue** &lt;/th&gt;&lt;th&gt; **Wed** &lt;/th&gt;&lt;th&gt; **Thu** &lt;/th&gt;&lt;th&gt; **Fri** &lt;/th&gt;&lt;th&gt; **Sat** &lt;/th&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **25** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **26** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **27** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **28** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **29** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **30** &lt;/td&gt;&lt;td&gt; **1** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **7** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **9** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;td&gt; **11** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **13** &lt;/td&gt;&lt;td&gt; **14** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **16** &lt;/td&gt;&lt;td&gt; **17** &lt;/td&gt;&lt;td&gt; **18** &lt;/td&gt;&lt;td&gt; **19** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;td&gt; **21** &lt;/td&gt;&lt;td&gt; **22** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **23** &lt;/td&gt;&lt;td class=&quot; **today**&quot;&gt; **24** &lt;/td&gt;&lt;td&gt; **25** &lt;/td&gt;&lt;td&gt; **26** &lt;/td&gt;&lt;td&gt; **27** &lt;/td&gt;&lt;td&gt; **28** &lt;/td&gt;&lt;td&gt; **29** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **30** &lt;/td&gt;&lt;td&gt; **31** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt;1&lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **2** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **3** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **4** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **5** &lt;/td&gt;&lt;/tr&gt; <br/> &lt;/table&gt; |

### HTML Skeleton

To simplify your work, use the below HTML code and write the missing code in the **calendar()** function:

```HTML
<!DOCTYPE html>
< html >
< head >
    < title >Monthly Calendar</ title >
    < style >
        . prev-month , . next-month { color: #CCC }
        . today { font-weight: bold ; background: DDD ; }
        . title { background: AAAAFF ; margin: 10 px 0 ; padding:5 px }
         table { border: 1 px solid  #CCC ;}
         td { text-align: center ; }
         #calendarCode { width: 100%; }
    </ style >
    < script >
         function _calendar_([day, month, year])
        {            _//_ TODO: return the HTML text holding the calendar table         }
    </ script >
</ head >

< body >
    Day: < input id= "day" type= "number" value= "4" />
    Month: < input id= "month" type= "number" value= "9" />
    Year: < input id= "year" type= "number" value= "2016" />
    < input type= "button" value="Show"
         onclick=" let calendarHTML =
            _calendar_([ document.getElementById( 'day' ). value ,
                 document.getElementById( 'month' ). value ,
                 document.getElementById( 'year' ). value ]);
             document.getElementById( 'calendar' ). innerHTML = calendarHTML ;
             document.getElementById( 'calendarCode' ). innerText = calendarHTML" />
    < div class= "title" >Calendar:</ div >
    < div id= "calendar" >Calendar will be shown here</ div >
    < div class= "title" >HTML:</ div >
    < textarea rows= "12" id= "calendarCode" ></ textarea >
</ body >

</ html >
```

### Hints

- Printing a calendar in JS without using an external library is not as simple as the previous problems in this exercise! It may take a few hours or even more to implement it correctly.
- Play with the class [**Date**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript and make some calculations.
- You may also search in Google, e.g. try &quot; **JavaScript calendar code example**&quot;.
- Print the calendar table **headings** + days.
- Print the days from the **previous month** (if any).
  - Find the day of week for the first day of the input date.
  - If it is not Sunday, days from the previous month exist.
  - Go back a few days in the previous month to find the closest Sunday (first week day).
  - Start from it and print the days until the end of the previous month.
- Print the days from the **current month**.
  - Print the days, one after another.
  - Create a new table row after the last week day (Saturday).
- Print the days from the **next month** (if any).
  - Stop when you reach Saturday (the last week day).
- You may start from this code template:

```JavaScript
function calendar ([day, month, year])
{
	//Print the calendar table header
	let html = '<table>\n';
	//TODO: finish this code
	
	//Print the days of the previous month
	//TODO: finish this code
	
	//Print the days of the current month
	//TODO: finish this code
	
	//Print the days of the next month
	//TODO: finish this code
	
	html += '</table>';
	return html;
}
```