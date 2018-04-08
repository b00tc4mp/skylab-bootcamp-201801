import Input from './';


export default [{
        component: Input,
        name: 'textInput',
        props: {
            type: 'text',
            name: 'text',
            className: 'somthing',
            handlerChangeInput: function (value, name)  {
                console.log(value, name)
            }
        }
    },
    {
        component: Input,
        name: 'textInput - some State',
        props: {
            type: 'text',
            name: 'text',
            className: 'somthing',
            handlerChangeInput: function (value, name)  {
                console.log(value, name)
            }
        },
        state: {
            value: "Whatsapp niggaaa"
        }
    },
    {
        component: Input,
        name: 'emailInput',
        props: {
            type: 'email',
            name: 'email',
            className: 'somthing',
            handlerChangeInput: function (value, name)  {
                console.log(value, name)
            }
        }
    },
    {
        component: Input,
        name: 'numberInput',
        props: {
            type: 'number',
            name: 'number',
            className: 'somthing',
            handlerChangeInput: function (value, name)  {
                console.log(value, name)
            }
        }
    },
    {
        component: Input,
        name: 'passwordInput',
        props: {
            type: 'password',
            name: 'text',
            className: 'somthing',
            handlerChangeInput: function (value, name)  {
                console.log(value, name)
            }
        }
    }
];