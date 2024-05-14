const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  const style = isError ? {
      backgroundColor: '#e3d3d3',
      color: 'darkred',
      borderColor: 'darkred'
    } : {
      backgroundColor: '#c0ffc0',
      color: 'darkgreen',
      borderColor: 'darkgreen'
    }

  return (
    <div
      className='notification'
      style={style}
    >
      {message}
    </div>
  )
}

export default Notification
