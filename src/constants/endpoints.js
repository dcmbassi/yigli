export const ENDPOINTS = {
    addMember: '/api/members',
    editMember: (memberId) => `/api/members/${memberId}`,

    addMeeting: '/api/meetings',
    editMeeting: (meetingId) => `/api/meetings/${meetingId}`,

    addContribution: 'api/contributions',
    editContribution: (contributionId) => `/api/contributions/${contributionId}`,
}