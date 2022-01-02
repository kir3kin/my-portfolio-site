import React from "react"

import '@scss/blocs/NotFound'

export const NotFound: React.FC<{
	name?: string
}> = ({
	name = 'items'
}) =>  (
	<div className="notfound">
		<p className="notfoud__message">
			{`No ${name} are found!`}
		</p>
	</div>
)