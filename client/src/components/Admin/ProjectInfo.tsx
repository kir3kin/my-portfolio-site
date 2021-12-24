import { Info } from "@interfaces/project.interface"
import React, { useState } from "react"

export const ProjectInfo: React.FC<{
	info: Info
}> = ({
	info
}) => {
	const [form, setForm] = useState(info)

	return (
		<div className="info__item">

			<div className="info__item__title">
				<label htmlFor={`desc-${form.id}-title`}>{form.title}</label>
				<input
					type="text"
					name={`desc-${form.id}-title`}
					id={`desc-${form.id}-title`}
				/>
			</div>

			{form.descriptions && form.descriptions.length > 0 && (
				<ul className="info__item__descs desc-list">
					{form.descriptions.map(item => (
						<li key={item.id} className="desc-list__item">
							<div className="desc-list__item__title">
								<label htmlFor={`desc-${form.id}-item-${item.id}-title`}>Item title</label>
								<input
									type="text"
									name={`desc-${form.id}-item-${item.id}-title`}
									id={`desc-${form.id}-item-${item.id}-title`}
									value={item.title}
								/>
							</div>
							<div className="desc-list__item__link">
								<label htmlFor={`desc-${form.id}-item-${item.id}-link`}>Item link</label>
								<input
									type="text"
									name={`desc-${form.id}-item-${item.id}-link`}
									id={`desc-${form.id}-item-${item.id}-link`}
									value={item.link}
								/>
							</div>
							{/* <div className="desc-list__item__description">
								<label htmlFor="desc-1-item-1-description"></label>
								<textarea
									name="desc-1-item-1-description"
									id="desc-1-item-1-description"
								></textarea>
							</div> */}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}