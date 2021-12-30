import { Technology } from "@interfaces/technology.interface"

export const getChosenTechs = (techs: Technology[] | undefined) => {
	const chosen: number[] = []
	if (techs) {
		techs.map(tech => {
			chosen.push(Number(tech.id))
			return tech
		})
	}
	return chosen
}