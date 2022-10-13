export function calculation(
  projectId,
  userId,
  deliveryId,
  authKey,
  customerKey,
  reward
) {
  const calculationUrl = 'http://localhost:8001/payments'
  return async function calculation(dispatch, getState) {
    const payresult = await fetch(calculationUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectId: projectId,
        username: userId,
        deliveryId: deliveryId,
        authKey: authKey,
        customerkey: customerKey,
        reward: reward,
      }),
    }).then((result) => result.json())
    console.log(payresult)
  }
}
