export enum ApiCallState {
  Initial = 'Initial', // Initial state before any API call is made
  Loading = 'Loading', // API call is in progress
  Success = 'Success', // API call was successful
  Error = 'Error', // API call failed with an error
}
