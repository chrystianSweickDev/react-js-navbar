# responsive-react-js-navbar

responsive-react-js-navbar is a React component to build a simple and responsive navbar with hamburger menu to mobile screens 

## Installation

Use the npm package manager to install responsive-react-js-navbar.

```bash
npm install responsive-react-js-navbar
```

## Usage

```javascript
import React from 'react';
import Navbar from 'responsive-react-js-navbar'

function App(props) {
    const links = [{
        "href": "/#",
        "label": "Home",
        "background": false,
    },
    {
        "href": "/login",
        "label": "Login",
        "background": false,
    },
    {
        "href": "/register",
        "label": "Register",
        "background": true,
    }
    ]


    return (
        <>
            <Navbar
                logo='/your-logo-url.png'
                logoHref='/where-logo-click-redirect'
                links={links}

            />
        </>
    );
}


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
