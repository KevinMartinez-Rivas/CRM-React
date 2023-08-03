const Error = ({children}) => {
  return (
    <div className="p-3 w-full font-bold text-red-700 bg-red-200 mb-5 border-s-red-500 border-s-2">
        {children}
    </div>
  )
}

export default Error