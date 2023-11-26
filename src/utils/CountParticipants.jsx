const CountParticipants = (data) => {
  // Extract all participant names
  const participantNames = data.flatMap((item) => item.participants.map((participant) => participant.user.name))

  // Remove duplicates from participant names
  return [...new Set(participantNames)]
}

export default CountParticipants
