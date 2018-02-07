const o = {
    name: 'skylab',
    
    values: [1, 2, 3],
    
    print: function() { this.values.forEach(v => console.log(`${this.name} - ${v}`)) }
    // WARN! following print impl wouldn't work... why? (where does the context - this - points to? to which scope?)
    //print: () => this.values.forEach(v => console.log(`${this.name} - ${v}`))
}

o.print()