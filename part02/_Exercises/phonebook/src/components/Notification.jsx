export default function Notification({message, style}) {
  if (message === null) return;

  return (
    <div className="notification" style={style}>{message}</div>
  )
}