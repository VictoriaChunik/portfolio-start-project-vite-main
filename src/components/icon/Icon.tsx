
import iconsSpite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "112"}
      height={props.height || "112"}
      viewBox={props.viewBox || "0 0 112 112"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* так не кто не верстает этот тег усторел xlinkHref */}
      {/* <use xlinkHref={`${iconsSpite}#${props.iconId}`} /> */}
      <use href={`${iconsSpite}#${props.iconId}`} />
    </svg>
  );
};
