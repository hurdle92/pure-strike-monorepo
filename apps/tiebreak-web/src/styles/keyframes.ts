import { keyframes } from "styled-components";

export const Bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
    100% {
        transform: translateY(0);
    }
`;
