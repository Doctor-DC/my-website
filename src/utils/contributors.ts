import { Octokit } from '@octokit/rest'

const octokit = new Octokit({ auth: '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' });

export async function GetContributors() {
    const {data} = await octokit.repos.listContributors({
        owner:  'wtfacademy',
        repo: 'WTFSolidity'
    })
    return data
}