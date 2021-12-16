export const getNormalName = (name: string): string => {
	return name.toLowerCase().trim().replaceAll(' ', '-')
}