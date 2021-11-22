import React from "react"

interface iNotfound {
	name?: string
}

export const ComponentNotfound: React.FC<iNotfound> = ({
	name = 'items'
}) =>  (
	<div className="notfound">
		<p className="notfoud__message">
			{`No ${name} are found!`}
		</p>
	</div>
)