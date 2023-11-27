import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

h1,
h2,
h3,
h4 {
    font-family: 'Marhey', sans-serif;
}

@media screen and (max-width: 768px) {
    .container {

    }
}

// Large devices (desktops, 992px and up)
@media screen and (min-width: 992px) { 
    .container {
        
    }
}

// X-Large devices (large desktops, 1200px and up)
@media screen and (min-width: 1200px) { 
    .container {
        
    }
}
`;








