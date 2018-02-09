#dndBattleMaster

## Desired Features to Impliment
1. User Sign In
- Save fights (the existing CombatantList)
- using express on the BackEnd
2. Layouts
- Possibly using Router to have different layouts of the page i.e having a combatant focused layout that shows all of the combatants detailed stats on the page, and the current layout which is better for selecting Combatants one at a time.
3. Stylings
- general stylings
- better layout for MonsterDetail.js
- Roll.js divs
- MonsterList.js
- CombatantList.js

# tech

## Packages:
### redux-persist
- no longer using
```js
import {persistStore, autoRehydrate} from 'redux-persist'

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, undefined, compose(
      middleware,
      autoRehydrate()
    ))
    : console.tron.createStore(rootReducer, undefined, compose(
      middleware,
      autoRehydrate()
    ))

persistStore(store)
```
### react-router
```js
// import:
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
```
### react-moment

```js
// import:
import Moment from 'react-moment';
```

### react-string-replace

```js
// import:
import Moment from 'react-moment';
```
### reactstrap
```js
import { Button } from 'reactstrap';
// import Where Button is the Component that you want to import
```
### react-fontawesome
```js
var React = require('react')
var FontAwesome = require('react-fontawesome')

var MyComponent = React.createClass({
  render: function() {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    )
  },
})
```
## react-onclickout
```js
const ClickOutHandler = require('react-onclickout');

class ExampleComponent extends React.Component {

  onClickOut(e) {
    alert('user clicked outside of the component!');
  }

  render() {
    return (
      <ClickOutHandler onClickOut={this.onClickOut}>
        <div>Click outside of me!</div>
      </ClickOutHandler>
    );
  }
}
```
### reactstrap
```js
// import Where Button is the Component that you want to import
import { Button } from 'reactstrap';
