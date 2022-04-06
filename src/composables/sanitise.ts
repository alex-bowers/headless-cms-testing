export function createPageTitle(routePath: string): string {
  const words = routePath.split("-")
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }

  return words.join(" ")
}
