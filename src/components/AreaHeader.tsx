import React from "react";
import { Link } from "react-router-dom";

interface AreaHeaderProps {
	children: React.ReactNode;
}

const AreaHeader = ({ children }: AreaHeaderProps) => {
	return (
		<div className="area-headers">
			<div className="font-bold text-2xl">{children}</div>
			<div>
				<Link to={"/"} className="hover:underline text-[#b3b3b3]">
					Show all
				</Link>
			</div>
		</div>
	);
};
export default AreaHeader;
