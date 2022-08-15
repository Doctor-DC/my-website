import { Octokit } from '@octokit/rest'

const octokit = new Octokit({ auth: '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' });

export async function GetContributors() {
    const {data} = await octokit.repos.listContributors({
        owner:  'wtfacademy',
        repo: 'WTFSolidity'
    })
    return data
}