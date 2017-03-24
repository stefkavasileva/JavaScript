# Exercises: Objects, Associative Arrays, Maps, Sets

Problems for exercises and homework for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/316/](https://judge.softuni.bg/Contests/316/).

## 1. Heroic Inventory

In the era of heroes, every hero has his own items which make him unique. Create a function which creates a **register for the heroes** , with their **names** , **level** , and **items** , if they have such. The register should accept data in a specified format, and return it presented in a specified format.

The **input** comes as array of strings. Each element holds data for a hero, in the following format:

&quot; **{heroName} / {heroLevel} / {item1}, {item2}, {item3}...**&quot;

You must store the data about every hero. The **name** is a **string** , the **level** is a **number** and the items are all **strings.**

The **output** is a **JSON representation** of the data for all the heroes you&#39;ve stored. The data must be an **array of all the heroes**. Check the examples for more info.

### Examples

| **Input** | **Output** |
| --- | --- |
| Isacc / 25 / Apple, GravityGun <br/> Derek / 12 / BarrelVest, DestructionSword <br/> Hes / 1 / Desolator, Sentinel, Antara | [{&quot;name&quot;:&quot;Isacc&quot;,&quot;level&quot;:25,&quot;items&quot;:[&quot;Apple&quot;,&quot;GravityGun&quot;]},{&quot;name&quot;:&quot;Derek&quot;,&quot;level&quot;:12,&quot;items&quot;:[&quot;BarrelVest&quot;,&quot;DestructionSword&quot;]},{&quot;name&quot;:&quot;Hes&quot;,&quot;level&quot;:1,&quot;items&quot;:[&quot;Desolator&quot;,&quot;Sentinel&quot;,&quot;Antara&quot;]}] |
| Jake / 1000 / Gauss, HolidayGrenade | [{&quot;name&quot;:&quot;Jake&quot;,&quot;level&quot;:1000,&quot;items&quot;:[&quot;Gauss&quot;,&quot;HolidayGrenade&quot;]}] |

### Hints

- We need an array that will hold our hero data. That is the first thing we create.

```JavaScript
 function main(input) {
	let heroData = [
	];
 }
```
 
- Next, we need to loop over the whole input, and process it. Let&#39;s do that with a simple **for** loop.

```JavaScript
 function main(input) {
	let heroData = [
	];
	
	for (let i = 0; i < input.length; i++) {
		let currentHeroArguments = input[i].split(" / ");
	}
 }
 ```
 
- Every element from the input holds data about a hero, however the **elements from the data** we need are **separated by some delimiter** , so we just split each string with that **delimiter**.
- Next, we need to take the elements from the **string array** , which is a result of the **string split** , and parse them.

```JavaScript
 function main(input) {
	let heroData = [
	];
	
	for (let i = 0; i < input.length; i++) {
		let currentHeroArguments = input[i].split(" / ");
		
		let currentHeroName = currentHeroArguments[0];
		let currentHeroLevel = Number(currentHeroArguments[1]);
		let currentHeroItems = currentHeroArguments[2].split(", ");
	}
 }
```
 
- However, if you do this, you could get quite the error in the current logic. If you go up and read the problem definition again, you will notice that there might be a **case** where the hero **has**** no items **; in that case, if we try to take the 3rd**element** of the **currentHeroArguments** array, it will **result in an error**. That is why we need to perform a simple check.

```JavaScript
 function main(input) {
	let currentHeroItems = [];
	
	if(currentHeroArguments.length > 2){
		currentHeroItems = currentHeroArguments[2].split(", ");
	}
 }
```
 
- If **there are any items** in the **input** , the **variable** will be set to the **split version of them**. If not, it will just remain an **empty array** , **as it is supposed to**.
- We have now extracted the needed data – we have stored the **input name** in a **variable** , we have parsed the **given level** to a **number** , and we have also **split** the **items** that the **hero holds** by their **delimiter** , which would result in a **string array** of elements. By definition, the **items** are **strings** , so we don&#39;t need to process the array we&#39;ve made anymore.
- Now what is left is to add that data into **an object** and **add** that object to the **array**.

```JavaScript
let hero = {
	name: currentHeroName,
	level: currentHeroLevel,
	items: currentHeroItems
};
heroData.push(hero);
```

- Lastly, we need to turn the array of objects we have made, into a JSON string, which is done by the **JSON.stringify()** function

```JavaScript
console.log(JSON.stringify(heroData));	
```

## 2.JSON&#39;s Table

JSON&#39;s Table is a magical table which turns JSON data into an HTML table. You will be given **JSON strings** holding data about employees, including their **name** , **position** and **salary**. You need to **parse that data** into **objects** , and create an **HTML table** which holds the data for each **employee on a different row** , as **columns**.

The **name** and **position** of the employee are **strings** , the **salary** is a **number**.

The **input** comes as array of strings. Each element is a JSON string which represents the data for a certain employee.

The **output** is the HTML code of a table which holds the data exactly as explained above. Check the examples for more info.

### Examples

| **Input** | **Output** |
| --- | --- |
| {&quot;name&quot;:&quot;Pesho&quot;,&quot;position&quot;:&quot;Promenliva&quot;,&quot;salary&quot;:100000} <br/> {&quot;name&quot;:&quot;Teo&quot;,&quot;position&quot;:&quot;Lecturer&quot;,&quot;salary&quot;:1000} <br/> {&quot;name&quot;:&quot;Georgi&quot;,&quot;position&quot;:&quot;Lecturer&quot;,&quot;salary&quot;:1000} |<pre> &lt;table&gt; <br/>         &lt;tr&gt; <br/>                 &lt;td&gt;Pesho&lt;/td&gt; <br/>                 &lt;td&gt;Promenliva&lt;/td&gt; <br/>                 &lt;td&gt;100000&lt;/td&gt; <br/>         &lt;tr&gt; <br/>         &lt;tr&gt; <br/>                 &lt;td&gt;Teo&lt;/td&gt; <br/>                 &lt;td&gt;Lecturer&lt;/td&gt; <br/>                 &lt;td&gt;1000&lt;/td&gt; <br/>         &lt;tr&gt; <br/>         &lt;tr&gt; <br/>                 &lt;td&gt;Georgi&lt;/td&gt; <br/>                 &lt;td&gt;Lecturer&lt;/td&gt; <br/>                 &lt;td&gt;1000&lt;/td&gt; <br/>         &lt;tr&gt; <br/> &lt;/table&gt; |

### Hints

- You might want to **escape the HTML**. Otherwise you might find yourself victim to vicious JavaScript **code in the input** , which aims only to hack you.

## 3.Cappy Juice

You will be given different juices, as **strings**. You will also **receive quantity** as a **number**. If you receive a juice, you already have, **you must sum** the **current quantity** of that juice, with the **given one**. When a juice reaches **1000 quantity** , it produces a bottle. You must **store all produced bottles** and you must **print them** at the end.

**Note:**** 1000 quantity **of juice is** one bottle **. If you happen to have** more than 1000 **, you must make** as much bottles as you can **, and store** what ****is**** left** from the juice.

**Example:**** You have 2643 quantity **of Orange Juice – this is** 2 bottles **of Orange Juice and** 643 quantity left**.

The **input** comes as array of strings. Each element holds data about a juice and quantity in the following format:

&quot; **{juiceName} =&gt; {juiceQuantity}**&quot;

The **output** is the produced bottles. The bottles are to be printed in **order of obtaining the bottles**. Check the second example bellow - even though we receive the Kiwi juice first, we don&#39;t form a bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.
### Examples

| **Input** | **Output** |  
| --- | --- |
| Orange =&gt; 2000 <br/> Peach =&gt; 1432 <br/> Banana =&gt; 450 <br/> Peach =&gt; 600 <br/> Strawberry =&gt; 549 | Orange =&gt; 2 <br/> Peach =&gt; 2 |   
| Kiwi =&gt; 234 <br/> Pear =&gt; 2345 <br/> Watermelon =&gt; 3456 <br/> Kiwi =&gt; 4567 <br/> Pear =&gt; 5678 <br/> Watermelon =&gt; 6789 | Pear =&gt; 8 <br/> Watermelon =&gt; 10 <br/> Kiwi =&gt; 4 |

## 4.Store Catalogue

You have to create a sorted catalogue of store products. You will be given the products&#39; names and prices. You need to order them by **alphabetical order**.

The **input** comes as array of strings. Each element holds info about a product in the following format:

&quot; **{productName} : {productPrice}**&quot;

The **product&#39;s name** will be a **string** , which will **always**** start with a capital letter **, and the** price **will be** a number **. You can safely assume there will be** NO duplicate product input **. The comparison for alphabetical order is** case-insensitive**.

As **output** you must print all the products in a specified format. They must be ordered **exactly as specified above**. The products must be **divided into groups** , by the **initial of their name**. The **group&#39;s initial should be printed** , and after that the products should be printed with **2 spaces before their names**. For more info check the examples.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| Appricot : 20.4 <br/> Fridge : 1500 <br/> TV : 1499 <br/> Deodorant : 10 <br/> Boiler : 300 <br/> Apple : 1.25 <br/> Anti-Bug Spray : 15 <br/> T-Shirt : 10   | A <br/>   Anti-Bug Spray: 15 <br/>   Apple: 1.25 <br/>   Appricot: 20.4 <br/> B<br/>  Boiler: 300 <br/> D <br/>   Deodorant: 10 <br/> F <br/>   Fridge: 1500 <br/> T <br/>   T-Shirt: 10   <br/> TV: 1499 |   
| Banana : 2 <br/> Rubic&#39;s Cube : 5 <br/> Raspberry P : 4999 <br/> Rolex : 100000 <br/> Rollon : 10 <br/> Rali Car : 2000000 <br/> Pesho : 0.000001 <br/> Barrel : 10 | B <br/>   Banana: 2 <br/>   Barrel: 10 <br/> P <br/>   Pesho: 0.000001 <br/> R <br/>   Rali Car: 2000000 <br/>   Raspberry P: 4999 <br/>   Rolex: 100000 <br/>   Rollon: 10 <br/>   Rubic&#39;s Cube: 5 |

## 5.Auto-Engineering Company

You are tasked to create a register for a company that produces cars. You need to store **how many cars** have been produced from a **specified model** of a **specified brand**.

The **input** comes as array of strings. Each element holds information in the following format:

&quot; **{carBrand} | {carModel} | {producedCars}**&quot;

The car **brands** and **models** are **strings** , the **produced cars** are **numbers**. If the **car brand** you&#39;ve received **already exists** , just add the **new**** car model **to it with the** produced cars ****as its value**. If even the car model exists, just **add** the **given value** to the **current one**.

As **output** you need to print – **for every car brand** , the **car models** , and **number of cars produced** from that model. The output format is:

&quot;{carBrand}

  ###{carModel} -&gt; {producedCars}

  ###{carModel2} -&gt; {producedCars}

  ...&quot;

The order of printing is the order in which the brands and models first appear in the input. The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on.

### Examples

| **Input** | **Output** |
| --- | --- |
| Audi \| Q7 \| 1000 <br/> Audi \| Q6 \| 100 <br/> BMW \| X5 \| 1000 <br/> BMW \| X6 \| 100 <br/> Citroen \| C4 \| 123 <br/> Volga \| GAZ-24 \| 1000000 <br/> Lada \| Niva \| 1000000 <br/> Lada \| Jigula \| 1000000 <br/> Citroen \| C4 \| 22Citroen \| C5 | 10 | Audi <br/> ###Q7 -&gt; 1000 <br/> ###Q6 -&gt; 100 <br/> BMW <br/> ###X5 -&gt; 1000 <br/> ###X6 -&gt; 100 <br/> Citroen <br/> ###C4 -&gt; 145 <br/> ###C5 -&gt; 10 <br/> Volga <br/> ###GAZ-24 -&gt; 1000000 <br/> Lada <br/> ###Niva -&gt; 1000000 <br/> ###Jigula -&gt; 1000000 |

### Hints

- The **Map structure** should be perfect for this problem.

## 6.System Components

You will be given a register of systems with components and subcomponents. You need to build an ordered database of all the elements that have been given to you.

The elements are registered in a very simple way. When you have processed all of the input data, you must print them in a specific order. For every System you must print its components in a specified order, and for every Component, you must print its Subcomponents in a specified order.

The **Systems** you&#39;ve stored must be ordered by **amount of components** , in **descending order** , as **first criteria** , and by **alphabetical order** as **second criteria**. The **Components** must be ordered by **amount of Subcomponents** , in **descending order**.

The **input** comes as array of strings. Each element holds **data** about a **system** , a **component** in that **system** , and a **subcomponent** in that **component**. If the given **system already exists** , you should just **add the new component** to it. If even the **component exists** , you should just **add** the **new subcomponent** to it. The **subcomponents** will **always be**** unique**. The input format is:

&quot; **{systemName} | {componentName} | {subcomponentName}**&quot;

All of the elements are strings, and can contain **any ASCII character**. The **string comparison** for the alphabetical order is **case-insensitive**.

As **output** you need to print all of the elements, ordered exactly in the way specified above. The format is:

&quot;{systemName}

 |||{componentName}

 |||{component2Name}

 ||||||{subcomponentName}

 ||||||{subcomponent2Name}

 {system2Name}

 ...&quot;

### Examples

| **Input** | **Output** |
| --- | --- |
| SULS \| Main Site \| Home Page <br/> SULS \| Main Site \| Login Page <br/> SULS \| Main Site \| Register Page <br/> SULS \| Judge Site \| Login Page <br/> SULS \| Judge Site \| Submittion Page <br/> Lambda \| CoreA \| A23 <br/> SULS \| Digital Site \| Login Page <br/> Lambda \| CoreB \| B24 <br/> Lambda \| CoreA \| A24 <br/> Lambda \| CoreA \| A25 <br/> Lambda \| CoreC \| C4 <br/> Indice \| Session \| Default Storage <br/> Indice \| Session \| Default Security | Lambda <br/> \|\|\|CoreA <br/> \|\|\|\|\|\|A23 <br/> \|\|\|\|\|\|A24 <br/> \|\|\|\|\|\|A25 <br/> \|\|\|CoreB <br/> \|\|\|\|\|\|B24 <br/> \|\|\|CoreC <br/> \|\|\|\|\|\|C4 <br/> SULS <br/> \|\|\|Main Site <br/> \|\|\|\|\||Home Page <br/> \|\|\|\|\|\|Login Page <br/> \|\|\|\|\|\|Register Page <br/> \|\|\|Judge Site <br/> \|\|\|\|\|\|Login Page<br/> \|\|\|\|\|\| <br/> Submittion Page \|\|\| <br/> Digital Site\|\|\|\|\|\| <br/> Login PageIndice\|\|\| <br/> Session\|\|\|\|\|\| <br/> Default Storage\|\|\|\|\|\| <br/> Default Security |

### Hints

- Creating a sorting function with two criteria might seem a bit daunting at first, but it can be simplified to the following:
  - If elements **a** and **b** are different based on the **first criteria** , then that result is the result of the sorting function, checking the second criteria is not required.
  - If elements **a** and **b** are **equal** based on the **first criteria** , then the result of comparing **a** and **b** on the **second criteria** is the result of the sorting.

## 7.Usernames

You are tasked to create a catalogue of usernames. The usernames will be strings that **may contain any ASCII** character. You **need to order** them **by their length** , in **ascending order** , as **first criteria** , and by **alphabetical order** as **second criteria**.

The **input** comes as array of strings. Each element represents a **username**. Sometimes the input may contain **duplicate usernames**. Make it so that there are **NO duplicates** in the output.

The **output** is all of the usernames, **ordered** exactly as **specified above** – each printed on a new line.

### Examples

| **Input** | **Output** |  
| --- | --- | 
| Ashton <br/> Kutcher <br/> Ariel <br/> Lilly <br/> Keyden <br/> Aizen <br/> Billy <br/> Braston | Aizen <br/> Ariel <br/> Billy <br/> Lilly <br/> Ashton <br/> Keyden <br/> Braston <br/> Kutcher |   
| Denise <br/> Ignatius <br/> Iris <br/> Isacc <br/> Indie <br/> Dean <br/> Donatello <br/> Enfuego <br/> Benjamin <br/> Biser <br/> Bounty <br/> Renard<br/> Rot | Rot <br/> Dean <br/> Iris <br/> Biser <br/> Indie <br/> Isacc <br/> Bounty <br/> Denise <br/> Renard <br/> Enfuego <br/> Benjamin <br/> Ignatius <br/> Donatello |

### Hints

- Try to find a **structure** which **does NOT allow duplicates** , it will be best for the current problem.

## 8.\*Unique Sequences

You are tasked with storing sequences of numbers. You will receive an unknown amount of **arrays containing numbers** from which you must store only the **unique** arrays (duplicate arrays should be discarded). An array is considered the **same** ( **NOT unique** ) if it contains the **same numbers** as another array **, regardless of their order**.

After storing all arrays, your program should print them back in **ascending** order based on their **length** , if two arrays have the same length they should be printed in **order of being received from the input**. Each individual array should be printed in **descending order** in the format **&quot;[a1, a2, a3,… an**]&quot;**. Check the examples bellow.

The **input** comes as an array of strings where each entry is a JSON representing an array of numbers.

The **output** should be printed on the console - each array printed on a new line in the format **&quot;[a1, a2, a3,… an]&quot;** , following the above mentioned ordering.
### Examples

| **Input** | **Output** |
| --- | --- |
| [-3, -2, -1, 0, 1, 2, 3, 4] <br/> [10, 1, -17, 0, 2, 13] <br/> [4, -3, 3, -2, 2, -1, 1, 0] | [13, 10, 2, 1, 0, -17] <br/> [4, 3, 2, 1, 0, -1, -2, -3] |
| [7.14, 7.180, 7.339, 80.099] <br/> [7.339, 80.0990, 7.140000, 7.18] <br/> [7.339, 7.180, 7.14, 80.099] | [80.099, 7.339, 7.18, 7.14] |

### Hints

- Think of an easy way to compare arrays.
- Sometimes the most obvious collection choice is not the best one.