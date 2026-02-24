# Assignment-4
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById এক element দেয়, 
     getElementsByClassName একাধিক element দেয় (live)
     querySelector প্রথম match করা element দেয়
     querySelectorAll সব match করা element দেয় 

2. How do you create and insert a new element into the DOM?

Ans: নতুন element তৈরি করতে document.createElement() ব্যবহার করা হয়, তার পর text বা class দেওয়ার জন্য textContent বা className set করা হয়, তারপর DOM এ insert করার জন্য parent element এ appendChild() বা prepend() ব্যবহার করা হয়।

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling হলো একটি DOM event behavior যেখানে একটি event প্রথমে সবচেয়ে inner element-এ trigger হয়, তারপর ধীরে parent elements-এর দিকে উপরে propagate করে। অর্থাৎ, যদি একটি child element-এ click হয়, একই event parent element-এও ঘটে, যতক্ষণ না stopPropagation() ব্যবহার করে তা বন্ধ করা হয়।

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation হলো একটি technique যেখানে parent element-এ একবার event listener বসানো হয়, আর child elements-এর events handle করা হয় ওই listener দিয়ে। এটা useful কারণ এতে memory কম লাগে, নতুন dynamically added elements-এর events handle করা যায়

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() একটি event-এর default behavior বন্ধ করে, কিন্তু event bubbling চলতে দেয়। আর stopPropagation() event-এর bubbling বা capturing বন্ধ করে, কিন্তু default behavior প্রতিরোধ করে না।