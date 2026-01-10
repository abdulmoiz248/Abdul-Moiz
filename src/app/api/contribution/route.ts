// app/api/contribution/route.ts

import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN

  if (!username) {
    return NextResponse.json({ success: false, error: "GitHub username is required." }, { status: 400 })
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
      return NextResponse.json({ success: false, error: "GitHub data not found." }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: data.user.contributionsCollection.contributionCalendar })
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username } = body

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN

    if (!username) {
      return NextResponse.json({ success: false, error: "GitHub username is required." }, { status: 400 })
    }

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

    if (!data || !data.user) {
      return NextResponse.json({ success: false, error: "GitHub data not found." }, { status: 404 })
    }

    const totalContributions = data.user.contributionsCollection.contributionCalendar.totalContributions

    return NextResponse.json({ success: true, totalContributions })
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}