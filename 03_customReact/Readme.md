---- we will create our own custom react

1. create a html<br>
2. div.id=root<br>
3. script src=./customReact.js<br>
4. create a customReact.js<br>
5. grab root in js<br>
6. create object const reactElement<br>
7. reactElement have type of html tag<br>
8. it also has props as an object also called properties<br>
9. proprs further contain href and target. target:'\_blank'<br>
10. the element furthur has a children<br>

---- reactElement is given by react as default but we are defining our own react so we have defined a reactElement to see what is going in behind and how react renders html tags

---- now we need a method to render the reactElement we have created

1. customRender(what to inject,where to inject)<br>
2. in our case customRender(reactElement,mainContainer)<br>
3. but now we dont know how customRender will work so we will define the customRender method.<br>
4. create a function customRender(reactElement,mainContainer)<br>
5. We have to create a DOM element that will create element 'reactElement.type'<br>
6. but now the container is empty we will have to provide it with something<br>
7. We will inject an innerHTML into domElement = reactElement.children<br>
8. we will then set a domElement set attribute of href and another of targer<br>
9. container.appendChild(domElement)

