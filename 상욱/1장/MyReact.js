const MyReact = (function () {
    let state;

    return {
        render(Component) {
            const Comp = Component();
            Comp.render();
            return Comp;
        },

        useState(initialValue) {
            state ||= initialValue;

            const setState = (newValue) => {
                state = newValue;
            };

            return [state, setState];
        },
    };
})();

const Counter = () => {
    const [count, setCount] = MyReact.useState(0);

    return {
        click: () => setCount(count + 1),
        render: () => console.log('render:', { count }),
    };
};

let App;
App = MyReact.render(Counter); // render: { count: 0 }
App.click();
App = MyReact.render(Counter); // render: { count: 1 }
