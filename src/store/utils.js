
export const initialActionTracker = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: '',
  successMessage: '',
}

export const handlePending = () => {
  return { ...initialActionTracker, isLoading: true }
}
export const handleSuccess = (message) => {
  return {
    ...initialActionTracker,
    isLoading: false,
    isSuccess: true,
    successMessage: message || 'Request completed successfully',
  }
}

export const handleFailure = (message) => {
  return {
    ...initialActionTracker,
    isError: true,
    isLoading: false,
    errorMessage: message || 'Failed to complete your request',
  }
}
