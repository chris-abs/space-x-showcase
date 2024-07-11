interface Status {
  statusText: string;
  statusColor: string;
}

export const getLaunchStatus = (
  upcoming: boolean,
  success: boolean | null,
): Status => {
  if (upcoming) {
    return { statusText: 'Upcoming', statusColor: 'text-blue-500' };
  } else if (success) {
    return { statusText: 'Success', statusColor: 'text-green-500' };
  } else {
    return { statusText: 'Failure', statusColor: 'text-red-500' };
  }
};
