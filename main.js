import { createElement, render, Component, render } from './toy-react'

class MyComponent extends Component{
    render(){
        return <div>xxx</div>
    }
}

render(<MyComponent id="a" class="c">
<div>123</div>
<div></div>
</MyComponent>, document.querySelector('#root'))

