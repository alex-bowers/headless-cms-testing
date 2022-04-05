export function createPageTitle(routePath: string | string[]): string {
  if (typeof routePath === 'string') {
    const words = routePath.split("-")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(" ")
  }

  return routePath.join(" ")
}
