import React from "react";
import { ButtonHTMLAttributes } from "react";
import './button.scss'

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string,
	isDisabled?: boolean,
	onButtonClick: () => void,
	className: string,
	children?:React.ReactNode
}

const Button = (props: ButtonComponentProps) => {
	const { onButtonClick, text, isDisabled, className, type, children} = props;

	return (
		<>
			<button 
				className={className} 
				type={type} 
				onClick={onButtonClick} 
				disabled={isDisabled}>
				{children}{text}
			</button>
		</>
	);
};
export default React.memo(Button);