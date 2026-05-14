const calendlyClientId = 'N24tR3RHkxh41T1wX2Gxm0cK7BdyIWicqVuLGDLrVSo';
const calendlyRedirectUri = 'http://localhost:3000/calendly/callback';

export function getCalendlyOAuthUrl(mentorId?: string | null) {
  if (!mentorId) {
    return null;
  }

  const params = new URLSearchParams({
    client_id: calendlyClientId,
    response_type: 'code',
    redirect_uri: calendlyRedirectUri,
    state: mentorId,
  });

  return `https://auth.calendly.com/oauth/authorize?${params.toString()}`;
}

export function redirectToCalendlyOAuth(mentorId?: string | null) {
  const calendlyAuthUrl = getCalendlyOAuthUrl(mentorId);

  if (!calendlyAuthUrl) {
    return false;
  }

  window.location.href = calendlyAuthUrl;
  return true;
}
