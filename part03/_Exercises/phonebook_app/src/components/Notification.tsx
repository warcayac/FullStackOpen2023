type TProps = {
  message: string|null,
}

export default function Notification({message}: TProps) {
  if (message === null) return;

  return (
    <div className="error">{message}</div>
  )
}