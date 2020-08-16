import { createElement, render, Component } from './toy-react'
const RENDE_TO_DOM = Symbol()

class MyComponent extends Component {
    constructor(){
        super()
        this.state = {
            a: 1,
            b: 2
        }
    }
    
    [RENDE_TO_DOM](range){
        this.render()[RENDE_TO_DOM](range)

    }

    render() {
        return <div>
            <div>{this.state.a.toString()}</div>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>1</div>
    <div>2</div>
</MyComponent>, document.querySelector('#root'))

