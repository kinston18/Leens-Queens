const GlobalButton = (props) => {
    return (
      <button className="bg-gradient-to-tr from-[#c00cec] to-[#42073d] flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">{props.children}</button>
    )
  }

export {GlobalButton}