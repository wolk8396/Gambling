import React from 'react';
import { Link } from 'react-router-dom';
import { NavModule } from '../../../modules/nav.module';

interface LinksProps {
	data: NavModule[];
	classNameUl: string;
	classNameLi: string;
	classNameLink: string;
	title?: string;

}

const Navigation: React.FC<LinksProps> = (props) => {
	const { data, classNameUl, classNameLi, classNameLink, title } = props;
	return (
		<ul className={classNameUl}>{title}
			{data.map(({ url, name, id }) => (
				<li key={id} className={classNameLi}>
					<a className={classNameLink} href={url}>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
};

export default React.memo(Navigation);
