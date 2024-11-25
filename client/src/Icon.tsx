interface IconProps {
    href: string;
    className: string;
}

function Icon({href, className}: IconProps) {
    return (
        <a href={href} className={className}></a>
      );
}

export default Icon;