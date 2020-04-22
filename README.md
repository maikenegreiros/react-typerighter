# typist-react

A React Component that makes a cool typing effect

## Usage

Typist react is very simple to use

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
import Typist from "typist-react";

function MyComponent() {
  return (
    <Typist
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

![Typist Example: A text being typed in the screen](https://raw.githubusercontent.com/maikenegreiros/typist-react/master/public/images/typist-example.gif)
