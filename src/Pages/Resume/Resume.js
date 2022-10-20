import "./Resume.css";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../../assets/Resume.pdf";

export default function Resume() {
	return (
		<div className=" my-button containerResume">
			<a className="downloadBox" href={resume} download="kaelin">
				<button class="button">Download Resume
				<MdOutlineFileDownload />
				</button>
			</a>
		</div>
	);
}