import { Octokit } from '@octokit/rest'

const octokit = new Octokit({ auth: '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' });

export async function GetContributors() {
    const {data} = await octokit.repos.listContributors({
        owner:  'wtfacademy',
        repo: 'WTFSolidity'
    })
    return data
}