import styled from "styled-components";

export const StyledBurger = styled.div`
	position: absolute;
	top: 6%;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: var(--color-5);
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}
`;
