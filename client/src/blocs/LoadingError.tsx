import React from "react"

import { Messages } from "@utils/messages"

export const LoadingError: React.FC<{
	name?: string
}> = ({
	name
}) => (
	<div className="error error__loading">
		{name && (
			<p className="error__title">{`${name}`}</p>
		)}
		<p className="error__message">{`${Messages.loadingError}`}</p>
	</div>
)