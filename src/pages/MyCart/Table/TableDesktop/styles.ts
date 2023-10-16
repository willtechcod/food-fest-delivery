import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.colors.black};
    padding: 2rem 2.5rem;
    border-radius: 8px;

    table {
        width: 100%;
        border-spacing: 0 0;
        border-collapse: collapse;

        th {
            padding: 0 1rem 0.5rem 1rem;

            font-weight: 500;
            font-size: 1.125rem;
            text-transform: uppercase;
            text-align: left;

            &:nth-child(2){
                padding-left: 2rem;
            }
        }
    }
`;