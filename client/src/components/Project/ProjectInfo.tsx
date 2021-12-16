import React from "react"

import { Info } from "@interfaces/project.interface"

interface iProjectInfo {
	info: Info
}

export const ProjectInfo: React.FC<iProjectInfo> = ({ info }) => (
	<li className="info-list__item">
		<h4 className="info-list__header">{info.title}</h4>
		{info.descriptions && info.descriptions.length  >= 1 && (
			<div className="info-list__links">
				{info.descriptions.map(desc => <div key={desc.id}>
						<a
							target="_blank"
							href={desc.link}
						>
							{desc.title}
						</a>
						{desc.children && desc.children.length >= 1  && (
							<ul className="info-list__desc">
								{desc.children.map(child => <li key={child.id}>{child.text}</li>)}
							</ul>
						)}
					</div>
				)}
			</div>
		)}
	</li>
)