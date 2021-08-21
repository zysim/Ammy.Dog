export default async (slug: string) =>
  fetch(`https://www.speedrun.com/api/v1/${slug}`, {
    headers: {
      Accept: 'application/json, text/javascript, *,*; q=0.01',
    },
  })
