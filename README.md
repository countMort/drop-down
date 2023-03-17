<h1 align="center">Drop-Down Component</h1>

<div align="center">

This Project is a custom drop-down component with the ability
to add and select new items by typing in the input and pressing Enter.

</div>

### TypeScript

This Project is written in TypeScript with complete definitions.

## ⌨️ Development

```bash
$ git clone git@github.com:countMort/drop-down.git
$ cd drop-down
$ yarn
$ yarn dev
```
## 🗒️ Notes

In the App.tsx component, you will see a className is passed to the drop-down.
```jsx
<DropDown
      ...
      className={appClass.dropDownClass}
></DropDown>
```
That class is for the starting preview and you can change it to place
the drop-down wherever you want.

### Project Structure
In the src folder, I placed the logic that I wanted to be seperate from the react components into the `utils` folder.

Constants that've been used in the project are tried to be gathered in the `parameters` folder.

### Further Considerations
I could've used `useContext` to reduce prop drilling between the project components but I decided to encapsulate the DropDown component logic.

I also could've used `useReducer` so instead of passing `item, setItem, selectedItem, setSelectedItem` in the `App.tsx`, which are 4 props that are related to each other, just pass an object with its dispatch function.
but as I was thinking that this is a component which other people might try to install and use it, it's better for its props to be more simple conventional states.
