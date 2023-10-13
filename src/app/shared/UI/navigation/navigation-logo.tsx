import React from "react";
import { LogoNavModule, NavModule } from "../../../modules/nav.module";

interface LogoProps {
	data: NavModule[];
	classNameUl: string;
	classNameLi: string;
	classNameLink: string;
	title?: string;
}

const NavigationLogo: React.FC<LogoProps> = (props) => {
	const { data, classNameUl, classNameLi, classNameLink, title } = props;

	return (
		<ul className={classNameUl}>{title}
			{data.map(({ url, name, id, image }) => (
				<li key={id} className={classNameLi}>
					<a className={classNameLink}  href={url} target="_blank" rel="noreferrer">
						<img className="icon" src={image} alt="" />
					</a>
				</li>
			))}
		</ul>
	);
};

export default React.memo(NavigationLogo);