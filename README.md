# react-typerighter

A React Component that makes a cool typing effect

## Usage

React TypeRighter is very simple to use

### Props

Only one of the props is required, the rest of them is optional

1. **text**: _string_ | _required_
2. **color**: _string_
3. **fontSize**: _string_
4. **fontFamily**: _string_
5. **blinkTime**: _number_
6. **typingTime**: _number_

### Example

Here is an example using all the props

```js
import TypeRighter from "react-typerighter";

function MyComponent() {
  return (
    <TypeRighter
      text="My Awesome text"
      color="#ffffff"
      fontSize="2.5em"
      fontFamily="monospace"
      blinkTime={1}
      typingTime={4}
    />
  );
}
```

![TypeRighter Example: A text being typed in the screen](https://raw.githubusercontent.com/maikenegreiros/react-typerighter/master/public/images/typist-example.gif)

## Development

If you want to contribute to this project, you have to compile the project in development mode:

```bash
npm run dev
```

By running the previous command, webpack will compile code in develpment mode and will watch the files changes
