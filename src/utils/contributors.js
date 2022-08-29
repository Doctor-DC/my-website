import { Octokit } from '@octokit/rest'

const octokit = new Octokit();

export async function GetContributors(
    username =  'Doctor-DC',
    page = 1,
    per_page = 100
) {

    let { data } = await octokit.users.listFollowingForUser({
        username
    })

    if (data.length === per_page) {
        data = [...data, ...(await GetContributors(
            username,
            page + 1,
            per_page
        ))]
    }
    return data
}