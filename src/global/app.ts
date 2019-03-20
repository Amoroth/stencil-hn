export const truncateURL = (url: string) =>
  url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n]+)/i)[1]
