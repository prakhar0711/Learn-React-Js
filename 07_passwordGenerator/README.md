# We will be creating a password generator using React.

## It will introduce to us the concept of React hooks.Such as useState, useEffect,useRef and useCallback.

1. The password generator contains length which we will control by useState<br>
2. The password generator contains numbers which we will control by useState<br>
3. The password generator contains characters which we will control by useState<br>
4. Initializse the above 3 useState variables<br>
5. Initializse another useState variable to set the password<br>
6. Create a password generator function<br>
7. useCallback is a React Hook that lets you cache a function definition between re-renders<br>It is used because users can select to allow numbers,characters or not in real time so to manage that it is used.<br>
8. import the useCallback hook<br>
9. syntax is`const <functionname>=useCallback(fn,dependencies)`

fn can be a normal function or an arrow function
<br> 
10. two variables inside the function let pass="" and let str=[A-Z]and[a-z].<br>
11.then an if-else case`if(numberAllowed) str+="0123456789"`
similarly for charAllowed<br>
12. Run a loop from 1 to length <br>
13. refer to App.jsx for furthur instructions