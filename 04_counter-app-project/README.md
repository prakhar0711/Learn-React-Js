<h2>Now onto our first project. <br>
We will be creating a simple counter app</h2><br>

1. create a counter value heading tag<br>

2. create two buttons of addvalue and remove value<br>

3. create a counter variable<br>

4. Inject the counter variable into the counter tag<br>

5. give an onclick method to the buttons<br>

6. then create the function for the respective logic<br>

7. problem arises in UI updation because if we console log the value of counter we can see it getting incremented by 1 but it does not get updated in the UI.<br>

8. to solve issues like this we use the useState hook<br>

9. UI updation is controlled by React<br>

10. to use the useState hook we need to import it<br>

11. import the useState hook<br>

12. create a useState variable<br>

13. give it a default value of 0(0 as the counter is set as 0 initially)<br>

14. in useState you get 2 things in return as an array so syntax to initialise a useState variable is const[]=useState(0)<br>

15.in our case at 0th index the useState gets a variable and in the 1st index it gets a function

16. In our case for eg -it can be const[counter,setCounter]=useState(0)<br>

17. setCounter is a function and counter is a variable<br>

18. counter and setCounter are also conventions you can name them anything but it should be meaningful<br>

19. setCounter is used to update the value of counter<br>

20. counter is used to display the value of counter<br>

21. the setCounter function should be called in the onclick function and the logic should be inside it<br>

22. Remember we used const to initialise the state variable.but we are changing the value so we need to change it to let