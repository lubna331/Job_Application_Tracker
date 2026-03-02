# Job_Application_Tracker
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById selects one element by its id, getElementsByClassName selects all elements that has same class name, querySelector gets first matching element and querySelectorAll gets all the matching element.

### 2. How do you create and insert a new element into the DOM?
Ans : First create element using document.createElement(), then add content to it and finally insert the element to DOM or to parent node using append()/appendChild().

### 3. What is Event Bubbling? And how does it work?
Ans : Event Bubbling, when an element is clicked, it moves upward to its parents. It works like, it bubbles up to the parent then body and then html and lastly the document. It allows parent elements to react to actins happens inside them. 

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a technique where one event listener is used to a parent instead of adding event listener to every child. It is useful bacause only one event listener is used and it saves memory and improves speed.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() stops the browser's default behaviour, and stopPropagation() stops the event moving up to its parents.
