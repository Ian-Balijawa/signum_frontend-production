import practices from './practicesEndpoints';
import teamMembers from './teamMemberEndpoints';
export { FetchFunctions } from '@/utils';

const backendPrefix = '/api/v1';
const uploadsPrefix = '/uploads/';
// export const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const BACKEND_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5005'
    : 'http://localhost:5005';
export const BASE_URL = BACKEND_URL + backendPrefix;

export const isLocal = () => {
  const isServer = typeof window !== 'undefined';
  if (isServer) return false;
  return window?.location?.hostname === 'localhost';
};

export const TEAM_MEMBER_ROLES = {
  Partner: 'Partner',
  Lawyer: 'Lawyer',
  Administrator: 'Administrator',
};

export const practicesEndpoints = { ...practices(BASE_URL) };
export const teamMemberEndpoints = { ...teamMembers(BASE_URL) };
