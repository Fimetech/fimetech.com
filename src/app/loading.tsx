export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        {/* Spinner */}
        <div className='h-8 w-8 animate-spin rounded-full border-2 border-glass-border border-t-accent-blue' />
        <span className='text-sm text-text-muted'>Loading...</span>
      </div>
    </div>
  );
}
