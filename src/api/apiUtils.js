export async function handleResponse(resp) {
  if (resp.ok) return resp.json();
  if (resp.status === 400) {
    // server side error
    // returns a string error message. Parse to text, instead of json.
    const error = await resp.text();
    throw new Error(error);
  }
  // if not server side error then...
  throw new Error(`Error: Check network!`);
}

// enable for error loggin service
export function handleError(error) {
  console.error(`API call failed. ${error}`);
  // post to table in DB for errors
  // logError(error) -> should be fine but check!
  // Might have to make async/await?? check if error is fully logged before it throws
  throw error;
}
