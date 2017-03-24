# Lab: Objects and Associative Arrays

Problems for in-class lab for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/315/](https://judge.softuni.bg/Contests/315/).

## 1.Towns to JSON

You&#39;re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes **&quot;|&quot;** and optionally spaces. The table will consist of exactly 3 columns **&quot;Town&quot;** , **&quot;Latitude&quot;** and **&quot;Longitude&quot;**. The **latitude** and **longitude** columns will always contain **valid numbers**. Check the examples to get a better understanding of your task.

The **input** comes as an array of strings - the first string contains the table&#39;s headings, each next string is a row from the table.

The **output** should be printed on the console - for each entry row in the input print the object representing it.

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;\| Town \| Latitude \| Longitude \|&#39;,&#39;\| Sofia \| 42.696552 \| 23.32601 \|&#39;,&#39;\| Beijing \| 39.913818 \| 116.363625 \|&#39;]; |[{&quot;Town&quot;:&quot;Sofia&quot;,&quot;Latitude&quot;:42.69,&quot;Longitude&quot;:23.32},{&quot;Town&quot;:&quot;Beijing&quot;,&quot;Latitude&quot;:39.91,&quot;Longitude&quot;:116.36}] |
| [&#39;\| Town \| Latitude \| Longitude \|&#39;,&#39;\| Veliko Turnovo \| 43.0757 \| 25.6172 \|&#39;,&#39;\| Monatevideo \| 34.50 \| 56.11 \|&#39;] | [{&quot;Town&quot;:&quot;Veliko Turnovo&quot;,&quot;Latitude&quot;:43.0757,&quot;Longitude&quot;:25.6172},{&quot;Town&quot;:&quot;Monatevideo&quot;,&quot;Latitude&quot;:34.5,&quot;Longitude&quot;:56.11}] |

## 2.Score to HTML

You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects. The table should have 2 columns **&quot;name&quot;** and **&quot;score&quot;** , each object in the array will also have these keys.

Any text elements must also be **escaped** in order to ensure no dangerous code can be passed.

You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.

The **input** comes as an array of strings containing a single string - the array of objects as a JSON.

The **output** should be printed on the console - a table with 2 columns - **&quot;name&quot;** and **&quot;score&quot;** , containing the values from the objects as rows.

| **Input** | **Output** |
| --- | --- |
| [{&quot;name&quot;:&quot;Pesho&quot;,&quot;score&quot;:479},{&quot;name&quot;:&quot;Gosho&quot;,&quot;score&quot;:205}] | <pre> &lt;table&gt; <br/>   &lt;tr&gt;&lt;th&gt;name&lt;/th&gt;&lt;th&gt;score&lt;/th&gt;&lt;/tr&gt; <br/>   &lt;tr&gt;&lt;td&gt;Pesho&lt;/td&gt;&lt;td&gt;479&lt;/td&gt;&lt;/tr&gt; <br/>   &lt;tr&gt;&lt;td&gt;Gosho&lt;/td&gt;&lt;td&gt;205&lt;/td&gt;&lt;/tr&gt; <br/> &lt;/table&gt; |
| [{&quot;name&quot;:&quot;Pesho &amp; Kiro&quot;,&quot;score&quot;:479},{&quot;name&quot;:&quot;Gosho, Maria &amp; Viki&quot;,&quot;score&quot;:205}] |<pre> &lt;table&gt; <br/>   &lt;tr&gt;&lt;th&gt;name&lt;/th&gt;&lt;th&gt;score&lt;/th&gt;&lt;/tr&gt; <br/>   &lt;tr&gt;&lt;td&gt;Pesho &amp;amp; Kiro&lt;/td&gt;&lt;td&gt;479&lt;/td&gt;&lt;/tr&gt; <br/>   &lt;tr&gt;&lt;td&gt;Gosho, Maria &amp;amp; Viki&lt;/td&gt;&lt;td&gt;205&lt;/td&gt;&lt;/tr&gt; <br/> &lt;/table&gt; |

## 1.From JSON to HTML Table

You&#39;re tasked with creating an HTML table of students and their scores. You will receive a single string representing an **array of objects** , the **table&#39;s headings** should be equal to the **objects&#39; keys** , while **each object&#39;s values** should be a **new entry** in the table. Any **text values** in an object should be **escaped** , in order to avoid introducing dangerous code into the HTML.

Object&#39;s keys will always be the **same.**

The **input** comes as an array of strings containing a single string - the array of objects.

The **output** should be printed on the console - for each entry row in the input print the object representing it.

### HTML

You are provided with an HTML file to test your table in the browser.

```HTML
<!DOCTYPE html >
< html  lang="en">
< head >
    < meta  charset="UTF-8">
    < title >FromJSONToHTMLTable</ title >
    < style >
         table , th {
             border : groove ;
             border-collapse : collapse ;
        }
         td {
             border : 1 px solid black ;
        }
         td , th {
             padding : 5 px ;
        }
    </ style >
</ head >
< body >
    < div  id="wrapper">
    </ div >
    < script >
         function _fromJSONToHTMLTable_(input){
            _//Write your code here
        _ }
         window.onload = function (){
             let container = document.getElementById( 'wrapper' );
            container. innerHTML = _fromJSONToHTMLTable_(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
        };
    </ script >
</ body >
</ html >
```

### Examples

| **Input** | **Output** |
| --- | --- |
| [{&quot;Name&quot;:&quot;Tomatoes &amp; Chips&quot;,&quot;Price&quot;:2.35},{&quot;Name&quot;:&quot;J&amp;B Chocolate&quot;,&quot;Price&quot;:0.96}] | <pre> &lt;table&gt; <br/>    &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Price&lt;/th&gt;&lt;/tr&gt; <br/>    &lt;tr&gt;&lt;td&gt;Tomatoes &amp;amp; Chips&lt;/td&gt;&lt;td&gt;2.35&lt;/td&gt;&lt;/tr&gt; <br/>    &lt;tr&gt;&lt;td&gt;J&amp;amp;B Chocolate&lt;/td&gt;&lt;td&gt;0.96&lt;/td&gt;&lt;/tr&gt; <br/> &lt;/table&gt; |
| [{&quot;Name&quot;:&quot;Pesho &lt;div&gt;-a&quot;,&quot;Age&quot;:20,&quot;City&quot;:&quot;Sofia&quot;}, {&quot;Name&quot;:&quot;Gosho&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Plovdiv&quot;},{&quot;Name&quot;:&quot;Angel&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Veliko Tarnovo&quot;}] |<pre> &lt;table&gt; <br/>    &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;th&gt;City&lt;/th&gt;&lt;/tr&gt; <br/>    &lt;tr&gt;&lt;td&gt;Pesho &amp;lt;div&amp;gt;-a&lt;/td&gt;&lt;td&gt;20&lt;/td&gt;&lt;td&gt;Sofia&lt;/td&gt;&lt;/tr&gt; <br/>    &lt;tr&gt;&lt;td&gt;Gosho&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;Plovdiv&lt;/td&gt;&lt;/tr&gt; <br/>    &lt;tr&gt;&lt;td&gt;Angel&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;Veliko Tarnovo&lt;/td&gt;&lt;/tr&gt; <br/> &lt;/table&gt; |

## 2.Sum by Town

You&#39;re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings representing towns and their incomes, every **even** index will be a **town** and every **odd** index will be an **income** belonging to that town. Create an object that will hold all the **towns as keys** and their **total income** (the sum of their incomes) **as values** to those keys and print it as a JSON.

The **input** comes as an array of strings - each even index is the name of a town and each odd index is an income belonging to that town.

The **output** should be printed on the console - JSON representation of the object containing all towns and their total incomes.

### Examples

| **Input** | **Output** |
| --- | --- |
| Sofia  <br/> 20 <br/> Varna <br/> 3 <br/> Sofia <br/> 5 <br/> Varna <br/> 4 | {&quot;Sofia&quot;:25,&quot;Varna&quot;:7} |
| Sofia <br/> 20 <br/> Varna <br/> 3 <br/> sofia <br/> 5 <br/> varna <br/> 4 | {&quot;Sofia&quot;:20,&quot;Varna&quot;:3,&quot;sofia&quot;:5,&quot;varna&quot;:4} |

## 3.Count Words in a Text

You are tasked to count the number of words in a text using an object as an associative array, any combination of letters, digits and \_ (underscore) should be counted as a word. The words should be stored in the object as properties - the **key** being the **word** and the **value** being the **amount of times the word is contained**** in the text**.

The **input** comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.

The **output** should be printed on the console - the JSON representation of the object containing the words.

### Examples

| **Input** | **Output** |
| --- | --- |
| Far too slow, you&#39;re far too slow. | {&quot;Far&quot;:1,&quot;too&quot;:2,&quot;slow&quot;:2,&quot;you&quot;:1,&quot;re&quot;:1,&quot;far&quot;:1} |
| JS devs use Node.js for server-side JS.-- JS for devs | {&quot;JS&quot;:3,&quot;devs&quot;:2,&quot;use&quot;:1,&quot;Node&quot;:1,&quot;js&quot;:1,&quot;for&quot;:2,&quot;server&quot;:1,&quot;side&quot;:1} |

## 4.Count Words with Maps

You are tasked to count the number of words in a text using a Map, any combination of letters, digits and \_ (underscore) should be counted as a word. The words should be stored in a Map - the **key** being the **word** and the **value** being the **amount of times the word is contained**** in the text **. The matching should be** case insensitive **. Print the words in a** sorted order**.

The **input** comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.

The **output** should be printed on the console - print each word in the map in the format **&quot;&#39;&lt;word&gt;&#39; -&gt; &lt;count&gt; times&quot;** , each on a new line.

### Examples

| **Input** |
| --- |
| Far too slow, you&#39;re far too slow. |
| **Output** |
| &#39;far&#39; -&gt; 2 times <br/> &#39;re&#39; -&gt; 1 times <br/> &#39;slow&#39; -&gt; 2 times <br/> &#39;too&#39; -&gt; 2 times <br/> &#39;you&#39; -&gt; 1 times |
| JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs -- | &#39;devs&#39; -&gt; 3 times <br/> &#39;for&#39; -&gt; 2 times& <br/> #39;js&#39; -&gt; 6 times <br/> &#39;node&#39; -&gt; 1 times& <br/> #39;server&#39; -&gt; 1 times <br/> &#39;side&#39; -&gt; 1 times <br/> &#39;use&#39; -&gt; 2 times |

## 5.Populations in Towns

You have been tasked to create a register for different **towns** and their **population**.

The **input** comes as array of strings. Each element will contain data for a town and its population in the following format:

&quot; **{townName} &lt;-&gt; {townPopulation}**&quot;

If you receive the same town twice, **you should add** the **given population** to the **current one**.

As **output** , you must print all the towns, and their population.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| Sofia &lt;-&gt; 1200000 <br/> Montana &lt;-&gt; 20000 <br/> New York &lt;-&gt; 10000000 <br/> Washington &lt;-&gt; 2345000 <br/> Las Vegas &lt;-&gt; 1000000 | Sofia : 1200000 <br/> Montana : 20000 <br/> New York : 10000000 <br/> Washington : 2345000 <br/> Las Vegas : 1000000 |   
| Istanbul &lt;-&gt; 100000 <br/> Honk Kong &lt;-&gt; 2100004 <br/> Jerusalem &lt;-&gt; 2352344 <br/> Mexico City &lt;-&gt; 23401925 <br/> Istanbul &lt;-&gt; 1000 | Istanbul : 101000 <br/> Honk Kong : 2100004 <br/> Jerusalem : 2352344 <br/> Mexico City : 23401925 |

## 6.City Markets

You have been tasked to follow the sales of products in the different towns. For every town you need to keep track of all the products sold, and for every product, the amount of total income.

The **input** comes as array of strings. Each element will represent data about a product and its sales. The format of input is:

{town} -&gt; {product} -&gt; {amountOfSales} : {priceForOneUnit}

The **town** and **product** are both **strings**. The **amount of sales** and **price for one unit** will be **numbers**. Store all towns, for every town, store its products, and for every product, its amount of **total income**. The total income is calculated with the following formula - **amount of sales \* price for one unit**. If you receive as input a town you already have, you should just **add** the **new product** to it.

As **output** you must print every town, its products and their total income in the following format:

&quot;Town – {townName}

 $$${product1Name} : {productTotalIncome}

 $$${product2Name} : {productTotalIncome}

 ...&quot;

The **order of output** for each of those entries is – by **order of entrance**.

### Examples

| **Input** | **Output** |
| --- | --- |
| Sofia -&gt; Laptops HP -&gt; 200 : 2000 <br/> Sofia -&gt; Raspberry -&gt; 200000 : 1500 <br/> Sofia -&gt; Audi Q7 -&gt; 200 : 100000 <br/> Montana -&gt; Portokals -&gt; 200000 : 1 <br/> Montana -&gt; Qgodas -&gt; 20000 : 0.2 <br/> Montana -&gt; Chereshas -&gt; 1000 : 0.3 | Town - Sofia <br/> $$$Laptops HP : 400000 <br/> $$$Raspberry : 300000000 <br/> $$$Audi Q7 : 20000000 <br/> Town - Montana <br/> $$$Portokals : 200000 <br/> $$$Qgodas : 4000 <br/> $$$Chereshas : 300 |

## 7.Lowest Prices in Cities

You will be given several towns, with products and their price. You need to find **the lowest price** for **every product** and **the town it is sold at** for that price.

The **input** comes as array of strings. Each element will hold data about a **town** , **product** , and **its price** at that town. The **town** and **product** will be **strings** ; the **price** will be a **number**. The input will come in the following format:

{townName} | {productName} | {productPrice}

If you receive the same **town** and **product**** more than once, **you should** update **the** old value **with the** new one**.

As **output** you must print **each**** product **with its** lowest price **and** the town **at which the product is** sold at that ****price**. If **two towns share** the **same lowest price** , print the one that was **entered first**.
The output, for every product, should be in the following format:

**{productName} -&gt; {productLowestPrice} ({townName})**

The **order of output** is – **order of entrance**. See the examples for more info.

### Examples

| **Input** | **Output** |
| --- | --- |
| Sample Town \| Sample Product \| 1000 <br/> Sample Town \| Orange \| 2 <br/> Sample Town \| Peach \| 1 <br/> Sofia \| Orange \| 3 <br/> Sofia \| Peach \| 2 <br/> New York \| Sample Product \| 1000.1 <br/> New York \| Burger \| 10 | Sample Product -&gt; 1000 (Sample Town) <br/> Orange -&gt; 2 (Sample Town) <br/> Peach -&gt; 1 (Sample Town) <br/> Burger -&gt; 10 (New York) |

## 8.Extract Unique Words

Write a JS function that **extracts** all **UNIQUE** words from a **valid text** , and **stores them**. Ensure that there are **NO duplicates** in the stored words. Once you find a word, there is no need for you to store it again if you meet it again in the text. You also need to make all characters from the words you&#39;ve stored – **lowercase**.

The **input** comes as array of strings. Each element will represent a sentence.

The **output** is all of the unique words you&#39;ve found, each with each, **separated** by a **coma and a space** , printed in the order in which you&#39;ve found them.

### Examples

| **Input** | **Output** |
| --- | --- |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. Morbi in ipsum varius, pharetra diam vel, mattis arcu. Integer ac turpis commodo, varius nulla sed, elementum lectus. Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus. | lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis, ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel, mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus, vivamus, malesuada, dapibus, congue, egestas, metus |
| Interdum et malesuada fames ac ante ipsum primis in faucibus.Vestibulum volutpat lacinia blandit.Pellentesque dignissim odio in hendrerit lacinia.Vivamus placerat porttitor purus nec hendrerit.Aliquam erat volutpat. Donec ac augue ligula.Praesent venenatis sapien vitae libero ornare, nec pulvinar velit finibus.Proin dui neque, rutrum vel dolor ut, placerat blandit sapien.Pellentesque at est arcu.Nullam eget orci laoreet, feugiat nisi vitae, egestas libero.Pellentesque pulvinar aliquet felis.Interdum et malesuada fames ac ante ipsum primis in faucibus.Etiam sit amet nisl ex.Sed lacinia pretium metus quis fermentum.Praesent a ante suscipit, efficitur risus cursus, scelerisque risus. | interdum, et, malesuada, fames, ac, ante, ipsum, primis, in, faucibus, vestibulum, volutpat, lacinia, blandit, pellentesque, dignissim, odio, hendrerit, vivamus, placerat, porttitor, purus, nec, aliquam, erat, donec, augue, ligula, praesent, venenatis, sapien, vitae, libero, ornare, pulvinar, velit, finibus, proin, dui, neque, rutrum, vel, dolor, ut, at, est, arcu, nullam, eget, orci, laoreet, feugiat, nisi, egestas, aliquet, felis, etiam, sit, amet, nisl, ex, sed, pretium, metus, quis, fermentum, a, suscipit, efficitur, risus, cursus, scelerisque |