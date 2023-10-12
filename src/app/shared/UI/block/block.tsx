import { BlogModule } from "../../../modules/blog.module";

interface BlockProps {
	date: BlogModule,
	className: string,
  classNameDes: string,
  ClassNameData:string
}

export const Block = (props: BlockProps) => {
	const { date, className, classNameDes, ClassNameData} = props;
  const {des, data} = date

	return (
    <div className={className}>
      <p className={classNameDes}>{des}</p>
      <span className={ClassNameData}>{data}</span>
    </div>
	);
};

