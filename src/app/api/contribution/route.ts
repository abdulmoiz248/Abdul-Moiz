// app/api/githubContributions/route.ts

import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN

  if (!username) {
    return NextResponse.json({ error: "GitHub username is required." }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    })

    const { data } = await response.json()

    if (!data) {
      return NextResponse.json({ error: "GitHub data not found." }, { status: 404 })
    }

    return NextResponse.json(data.user.contributionsCollection.contributionCalendar)
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}
