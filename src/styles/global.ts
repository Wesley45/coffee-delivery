import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: ${(props) => props.theme.roboto};
        font-weight: 400;
        font-size: 1rem;
    }

   input.form-control:focus {
      border-color: #dc3545!important;

      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
        outline: none;
      }
    }

    .invalid-feedback {
      display: block;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #dc3545;
      width: 100%;
    }
`;
