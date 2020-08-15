class MyComponent {

}

window.a = <MyComponent id="a" class="c">
    <div>123</div>
    <div></div>
</MyComponent>


function createElement(type, attributes, ...children) {
    let e
    if (typeof type === 'string') {
        e = document.createElement(type)
    } else {
        e = new type
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p])
    }
    console.log('children', children)
    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child)
        }
        e.appendChild(child)
    }
    return e
}